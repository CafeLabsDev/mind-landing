import { Reveal } from "@/components/Reveal";
import { README_SETUP_URL } from "@/lib/site";

const steps = [
  {
    title: "Crie seu repo",
    description: "Vazio e privado — GitHub, GitLab, tanto faz. Sem README nem .gitignore.",
  },
  {
    title: "Aponte pro seu repo",
    description: (
      <>
        Clone o template e troque os remotes: ele vira{" "}
        <code className="mono">upstream</code>, o seu vira{" "}
        <code className="mono">origin</code>.
      </>
    ),
  },
  {
    title: "Rode o setup",
    description: <code className="mono">./scripts/setup-symlinks.sh</code>,
  },
  {
    title: "Abra e converse",
    description: (
      <>
        <code className="mono">claude</code> no terminal — a Skill cuida do
        resto.
      </>
    ),
  },
];

export function HowToStart() {
  return (
    <section id="comecar">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <span className="eyebrow eyebrow-muted">fricção quase zero</span>
          <h2>Funciona com o que você já tem.</h2>
          <p>
            Não é um <code className="mono">git clone</code> direto: você
            vira dono de um repo próprio desde o primeiro commit — e mesmo
            assim continua recebendo atualizações do template quando quiser.
          </p>
        </Reveal>
        <div className="steps">
          {steps.map((step, i) => (
            <Reveal key={step.title} index={i} as="div">
              <div className="step">
                <div className="step-num">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="readme-link" as="p">
          <a href={README_SETUP_URL} target="_blank" rel="noopener noreferrer">
            Ver o passo a passo completo (com os comandos) no README →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
