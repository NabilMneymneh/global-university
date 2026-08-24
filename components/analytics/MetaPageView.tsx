"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { isMetaPixelConfigured, trackMetaEvent } from "@/lib/analytics/meta-pixel";

export default function MetaPageView() {
  const pathname = usePathname();
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!isMetaPixelConfigured()) {
      return;
    }

    if (hasMounted.current) {
      trackMetaEvent("PageView", { page_path: pathname || "/" });
    }
    hasMounted.current = true;
  }, [pathname]);

  return null;
}
