"use client";

import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import {
  MetaStandardEvent,
  trackMetaEvent,
} from "@/lib/analytics/meta-pixel";

type TrackedLinkProps = PropsWithChildren<
  LinkProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">
> & {
  eventName: MetaStandardEvent;
  eventParameters?: Record<string, string | number | boolean>;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
};

export default function TrackedLink({
  eventName,
  eventParameters,
  onClick,
  children,
  ...linkProps
}: TrackedLinkProps) {
  return (
    <Link
      {...linkProps}
      onClick={(event) => {
        trackMetaEvent(eventName, eventParameters);
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
