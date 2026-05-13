import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const LANG_NAMES: Record<string, string> = {
  pt: "European Portuguese (Portugal)",
  es: "Castilian Spanish (Spain)",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { slug, locale, post } = await req.json();

    if (!slug || !locale || !post) {
      return new Response(JSON.stringify({ error: "Missing slug, locale or post" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!LANG_NAMES[locale]) {
      return new Response(JSON.stringify({ error: "Unsupported locale" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Check cache
    const { data: cached } = await supabase
      .from("blog_translations")
      .select("title, excerpt, content, meta_title, meta_description")
      .eq("slug", slug)
      .eq("locale", locale)
      .maybeSingle();

    if (cached) {
      return new Response(
        JSON.stringify({
          title: cached.title,
          excerpt: cached.excerpt,
          content: cached.content,
          metaTitle: cached.meta_title,
          metaDescription: cached.meta_description,
          cached: true,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const targetLang = LANG_NAMES[locale];
    const systemPrompt = `You are a professional translator for a premium Japanese matcha B2B brand (Nokari Matcha). Translate the provided blog post fields from English to ${targetLang}. 

Rules:
- Preserve ALL HTML tags and structure exactly (p, h2, em, strong, etc.)
- Keep brand terms untranslated: "Nokari", "matcha", "tencha", "Uji", "Nishio", "Yame", "Kagoshima", cultivar names (Samidori, Okumidori, Yabukita), "HoReCa", "JAS"
- Use a refined, editorial tone matching premium tea trade
- Convert prices but keep € currency
- Return ONLY the translated text via the provided tool, no extra commentary`;

    const userPrompt = JSON.stringify({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
    });

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-pro",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "return_translation",
              description: "Return the translated blog post fields",
              parameters: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  excerpt: { type: "string" },
                  content: { type: "string", description: "HTML content with all tags preserved" },
                  metaTitle: { type: "string" },
                  metaDescription: { type: "string" },
                },
                required: ["title", "excerpt", "content", "metaTitle", "metaDescription"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "return_translation" } },
      }),
    });

    if (!aiResp.ok) {
      const t = await aiResp.text();
      console.error("AI gateway error:", aiResp.status, t);
      if (aiResp.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, try again later" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (aiResp.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: "Translation service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiJson = await aiResp.json();
    const toolCall = aiJson.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      console.error("No tool call in AI response", JSON.stringify(aiJson).slice(0, 500));
      return new Response(JSON.stringify({ error: "Translation failed" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const translated = JSON.parse(toolCall.function.arguments);

    // Persist
    await supabase.from("blog_translations").upsert(
      {
        slug,
        locale,
        title: translated.title,
        excerpt: translated.excerpt,
        content: translated.content,
        meta_title: translated.metaTitle,
        meta_description: translated.metaDescription,
      },
      { onConflict: "slug,locale" },
    );

    return new Response(
      JSON.stringify({ ...translated, cached: false }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("translate-blog error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
