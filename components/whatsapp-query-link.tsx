"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { getCurrentLocationLink, whatsappUrl } from "@/lib/whatsapp";

type WhatsAppQueryLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  subject?: string;
  interestDetails?: string[];
  children: ReactNode;
};

export function WhatsAppQueryLink({
  subject = "सामान्य enquiry",
  interestDetails = [],
  children,
  onClick,
  target = "_blank",
  rel = "noreferrer",
  ...props
}: WhatsAppQueryLinkProps) {
  async function openWhatsApp(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;

    event.preventDefault();
    const pendingTab = window.open("about:blank", "_blank");
    if (pendingTab) pendingTab.opener = null;

    const locationLink = await getCurrentLocationLink();
    const url = whatsappUrl(subject, {
      interestDetails,
      locationLink: locationLink ?? undefined,
      pageUrl: window.location.href,
    });

    if (pendingTab) pendingTab.location.href = url;
    else window.location.href = url;
  }

  return (
    <a
      {...props}
      href={whatsappUrl(subject, { interestDetails })}
      target={target}
      rel={rel}
      onClick={openWhatsApp}
    >
      {children}
    </a>
  );
}
