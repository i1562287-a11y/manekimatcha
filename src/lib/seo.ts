import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  jsonLd?: object;
};

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLinkCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, image, url, type = "website", jsonLd }: SeoOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }
    setMeta("property", "og:title", title);
    setMeta("property", "og:type", type);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:card", image ? "summary_large_image" : "summary");

    const fullUrl = url ?? (typeof window !== "undefined" ? window.location.href : "");
    if (fullUrl) {
      setMeta("property", "og:url", fullUrl);
      setLinkCanonical(fullUrl);
    }
    if (image) {
      const absImage = image.startsWith("http")
        ? image
        : (typeof window !== "undefined" ? window.location.origin : "") + image;
      setMeta("property", "og:image", absImage);
      setMeta("name", "twitter:image", absImage);
    }

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      script.dataset.seo = "1";
      document.head.appendChild(script);
    }

    return () => {
      document.title = prevTitle;
      if (script) script.remove();
    };
  }, [title, description, image, url, type, JSON.stringify(jsonLd)]);
}
