"use client";

import { Reveal } from "@/components/Reveal";
import { GitHubLink } from "@/components/GitHubLink";
import { CopyIcon } from "@/components/icons";
import { useCloneCopy } from "@/lib/useCloneCopy";

export function FinalCta() {
  const { copy } = useCloneCopy("final_cta");

  return (
    <section className="cta-final">
      <div className="wrap">
        <Reveal as="h2">Sua memória, no seu git, hoje.</Reveal>
        <Reveal as="p">
          Um repo seu, um script, e o Claude Code para de começar do zero.
        </Reveal>
        <Reveal className="cta-row cta-row-center" as="div">
          <button type="button" className="btn btn-primary" onClick={copy}>
            <CopyIcon />
            Copiar comandos de setup
          </button>
          <GitHubLink location="final_cta" className="btn btn-secondary">
            ★ Star no GitHub
          </GitHubLink>
        </Reveal>
        <p className="reassure">Grátis, open source (MIT), sem cadastro.</p>
      </div>
    </section>
  );
}
