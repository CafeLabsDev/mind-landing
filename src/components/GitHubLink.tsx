"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { GITHUB_REPO_URL } from "@/lib/site";
import { track } from "@/lib/analytics";

type GitHubLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  /** where this link lives on the page — helps analytics tell CTAs apart */
  location: "header" | "hero" | "final_cta" | "footer";
};

/**
 * Conversion point 2/2: fires `click_github` on every outbound click to the
 * repo, tagged with a `location` prop so an analytics specialist can later
 * tell the secondary hero CTA apart from the final "star" CTA, etc.
 */
export function GitHubLink({
  children,
  location,
  href = GITHUB_REPO_URL,
  className,
  ...rest
}: GitHubLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track("click_github", { location })}
      {...rest}
    >
      {children}
    </a>
  );
}
