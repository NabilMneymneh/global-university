"use client";

import { useEffect } from "react";
import {
  MetaStandardEvent,
  trackMetaEvent,
} from "@/lib/analytics/meta-pixel";

type MetaEventProps = {
  eventName: MetaStandardEvent;
  parameters?: Record<string, string | number | boolean>;
};

export default function MetaEvent({ eventName, parameters }: MetaEventProps) {
  const serializedParameters = JSON.stringify(parameters ?? {});

  useEffect(() => {
    trackMetaEvent(eventName, parameters);
    // The event should fire once for this mounted page view.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName, serializedParameters]);

  return null;
}
