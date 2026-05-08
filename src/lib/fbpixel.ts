// Meta Pixel helper
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const fbqTrack = (event: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) window.fbq("track", event, params);
    else window.fbq("track", event);
  }
};
