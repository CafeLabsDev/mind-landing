import { Reveal } from "@/components/Reveal";

export function ConceptSection() {
  return (
    <section id="conceito">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <span className="eyebrow eyebrow-muted">o problema</span>
          <h2>Toda sessão nova, o mesmo resumo.</h2>
          <p>
            Memória interna existe — mas é opaca, e reseta a forma como você
            tem que explicar as coisas. O mind troca isso por um vault que
            você enxerga e edita.
          </p>
        </Reveal>
        <div className="compare">
          <Reveal className="compare-card old" as="div">
            <span className="tag">sem mind</span>
            <h3>Memória interna do assistente</h3>
            <div className="chat-bubble">
              &ldquo;lembra que eu te falei sobre o projeto X...&rdquo;
              <br />
              <span style={{ opacity: 0.5 }}>— toda sessão, de novo</span>
            </div>
            <ul style={{ marginTop: 16 }}>
              <li>Caixa-preta: você não vê nem edita o que foi guardado</li>
              <li>
                Presa ao produto — não acompanha se você trocar de ferramenta
              </li>
            </ul>
            <p className="fade-note">reinicia, se dilui, você reexplica</p>
          </Reveal>
          <Reveal className="compare-card new" as="div">
            <span className="tag">com mind</span>
            <h3>Vault versionado, seu</h3>
            <div className="md-note">
              projetos/hobby.md
              <br />
              <span style={{ color: "var(--subtle)" }}>
                tags: [mobile, backend]
              </span>
              <br />
              ## Estado atual
              <br />
              App em produção. Próximo: revisar autenticação...
            </div>
            <ul style={{ marginTop: 16 }}>
              <li>Markdown real, no seu git — abre em qualquer editor</li>
              <li>Sobrevive a troca de ferramenta, de máquina, de sessão</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
