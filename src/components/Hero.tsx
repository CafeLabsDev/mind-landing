"use client";

import { CopyIcon, PlusIcon, StarIcon } from "@/components/icons";
import { GitHubLink } from "@/components/GitHubLink";
import { InteractiveGraph } from "@/components/InteractiveGraph";
import { SETUP_COMMANDS } from "@/lib/site";
import { useCloneCopy } from "@/lib/useCloneCopy";

export function Hero() {
  const { copy, showFallback } = useCloneCopy("hero");

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            <PlusIcon /> open source · MIT
          </span>
          <h1>
            Sua mente, <span className="accent">versionada.</span>
          </h1>
          <p className="hero-sub">
            O <strong>mind</strong> é um vault de conhecimento pessoal em
            Markdown e git — onde vivem seus fatos, suas decisões e as regras
            de como você quer ser ajudado. Você é dono de cada linha, sem
            caixa-preta e sem infra extra.
          </p>
          <div className="cta-row">
            <button
              type="button"
              className="btn btn-primary"
              aria-describedby="copyHint"
              onClick={copy}
            >
              <CopyIcon />
              Copiar comandos de setup
            </button>
            <GitHubLink location="hero" className="btn btn-secondary">
              <StarIcon />
              Ver no GitHub
            </GitHubLink>
          </div>
          <p id="copyHint" className="micro-proof">
            $ crie seu repo → aponte pro seu repo → setup · sem cadastro
          </p>
          <div className={`clip-fallback${showFallback ? " show" : ""}`}>
            Não foi possível copiar automaticamente — selecione o bloco
            abaixo (edite a URL do seu repo antes de rodar):
            <pre>{SETUP_COMMANDS}</pre>
          </div>
        </div>

        <InteractiveGraph />
      </div>
    </section>
  );
}
