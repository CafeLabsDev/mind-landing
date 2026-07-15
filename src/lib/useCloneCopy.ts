"use client";

import { useCallback, useState } from "react";
import { SETUP_COMMANDS } from "@/lib/site";
import { track } from "@/lib/analytics";
import { useToast } from "@/components/Toast";

/**
 * Copies the full setup command block (fork-manual flow, two remotes) to
 * the clipboard, with the fallback the mockup specifies: if the Clipboard
 * API fails (permissions, insecure context, unsupported browser), reveal a
 * selectable multi-line block instead of failing silently.
 *
 * Conversion point 1/2: fires `copy_clone_command` on every click, whether
 * or not the clipboard write itself succeeds — the click is the conversion
 * signal, the fallback panel still lets the user finish the copy by hand.
 * Event name is unchanged from the earlier (single git-clone-line) version;
 * only the copied content grew.
 *
 * Tagged with the same `location` values as GitHubLink ("hero" | "final_cta")
 * so the two CTAs can be compared against each other, not just aggregated.
 */
export function useCloneCopy(location: "hero" | "final_cta") {
  const { showToast } = useToast();
  const [showFallback, setShowFallback] = useState(false);

  const copy = useCallback(async () => {
    track("copy_clone_command", { location });
    try {
      await navigator.clipboard.writeText(SETUP_COMMANDS);
      setShowFallback(false);
      showToast("comandos copiados — edite a URL do seu repo antes de rodar");
    } catch {
      setShowFallback(true);
      showToast("não foi possível copiar — selecione o texto");
    }
  }, [showToast, location]);

  return { copy, showFallback };
}
