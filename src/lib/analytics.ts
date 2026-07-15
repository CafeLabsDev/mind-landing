import { track as vercelTrack } from "@vercel/analytics";

/**
 * Thin wrapper around @vercel/analytics' custom event tracking.
 *
 * Two conversion points are instrumented from here:
 *   - "copy_clone_command": primary CTA, clicking "Copiar comandos de setup"
 *     (src/lib/useCloneCopy.ts) — event name kept from the earlier
 *     single-line-clone copy; only the copied content changed. Carries a
 *     `location` prop ("hero" | "final_cta"), same values as click_github,
 *     so the two placements of this CTA can be compared.
 *   - "click_github": secondary CTA / star, any outbound click to the GitHub
 *     repo (src/components/GitHubLink.tsx). Carries a `location` prop
 *     ("header" | "hero" | "final_cta" | "footer").
 *
 * Event names/props are intentionally minimal — an analytics specialist
 * reviews naming and defines goals on top of these two events.
 */
export function track(event: string, props?: Record<string, string>) {
  vercelTrack(event, props);
}
