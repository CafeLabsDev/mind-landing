import { Reveal } from "@/components/Reveal";
import {
  ForkIcon,
  GearIcon,
  InfraIcon,
  OwnershipIcon,
} from "@/components/icons";

const features = [
  {
    icon: <OwnershipIcon />,
    title: "Você é dono",
    description:
      "Markdown versionado, visível, editável fora do Claude — não é caixa-preta de ninguém.",
  },
  {
    icon: <InfraIcon />,
    title: "Zero infra nova",
    description:
      "Sem MCP server, sem vector DB. Só uma Skill nativa do Claude Code lendo git.",
  },
  {
    icon: <GearIcon />,
    title: "Guarda como você trabalha, não só o quê",
    description:
      "Convenções, regras, forma de responder — não só fatos soltos sobre sua vida.",
  },
  {
    icon: <ForkIcon />,
    title: "Fork que recebe updates",
    description: (
      <>
        Puxa melhorias do template (
        <code className="mono">git fetch upstream</code>) sem perder seu
        conteúdo.
      </>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section id="beneficios">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <span className="eyebrow eyebrow-muted">
            por que não é só mais um app de notas
          </span>
          <h2>Quatro decisões, um vault.</h2>
        </Reveal>
        <div className="features">
          {features.map((feature, i) => (
            <Reveal key={feature.title} index={i} as="div">
              <div className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
