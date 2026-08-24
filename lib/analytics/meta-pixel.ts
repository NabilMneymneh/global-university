export type MetaStandardEvent =
  | "PageView"
  | "ViewContent"
  | "Contact"
  | "InitiateCheckout"
  | "Lead"
  | "CompleteRegistration";

type MetaEventParameters = Record<string, string | number | boolean>;

type PendingMetaEvent = {
  eventName: MetaStandardEvent;
  parameters?: MetaEventParameters;
};

type MetaPixelFunction = {
  (command: "init", pixelId: string): void;
  (command: "track", eventName: MetaStandardEvent, parameters?: MetaEventParameters): void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  callMethod?: (...args: unknown[]) => void;
};

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
    __guMetaPixelPendingEvents?: PendingMetaEvent[];
  }
}

const rawMetaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || "";
export const META_PIXEL_ID = /^\d+$/.test(rawMetaPixelId) ? rawMetaPixelId : "";

export function isMetaPixelConfigured() {
  return Boolean(META_PIXEL_ID);
}

export function trackMetaEvent(
  eventName: MetaStandardEvent,
  parameters?: MetaEventParameters
) {
  if (typeof window === "undefined" || !isMetaPixelConfigured()) {
    return;
  }

  if (window.fbq) {
    window.fbq("track", eventName, parameters);
    return;
  }

  window.__guMetaPixelPendingEvents ??= [];
  window.__guMetaPixelPendingEvents.push({ eventName, parameters });
}

export function flushQueuedMetaEvents() {
  if (typeof window === "undefined" || !window.fbq) {
    return;
  }

  const pendingEvents = window.__guMetaPixelPendingEvents ?? [];
  pendingEvents.forEach(({ eventName, parameters }) => {
    window.fbq?.("track", eventName, parameters);
  });
  window.__guMetaPixelPendingEvents = [];
}
