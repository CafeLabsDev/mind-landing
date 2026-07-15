export type GraphNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  hub?: boolean;
  leaf?: boolean;
  path: string;
  body: string;
  caption: string;
};

export type GraphEdge = [source: string, target: string];

// Real vault node names, two levels deep — mirrors the approved mockup 1:1.
export const graphNodes: GraphNode[] = [
  {
    id: "mind",
    label: "Mind",
    x: 210,
    y: 215,
    hub: true,
    path: "MIND.md",
    body: "# Índice\n\n## Projetos\n- [hobby](projetos/hobby.md)\n\n## Tarefas\n- [pessoal](tarefas/pessoal.md)\n\n## Estudos\n- [algoritmos](estudos/algoritmos.md)",
    caption:
      "índice raiz — só links e uma linha de descrição, sem conteúdo pesado.",
  },
  {
    id: "projetos",
    label: "Projetos",
    x: 95,
    y: 130,
    path: "projetos/projetos.md",
    body: "# Projetos\n\n- [hobby](hobby.md) — projeto pessoal, feito nas horas vagas\n- [empresa](empresa.md) — negócio próprio, 2 produtos ativos",
    caption:
      "pasta-índice: cada projeto seu vira um nó próprio, linkado daqui.",
  },
  {
    id: "tarefas",
    label: "Tarefas",
    x: 335,
    y: 115,
    path: "tarefas/pessoal.md",
    body: "- [ ] Renovar CNH até 30/07\n- [ ] Ligar pro dentista\n- [x] Revisar contrato do apê",
    caption:
      "pendências centralizadas aqui — nunca soltas dentro de um nó de projeto.",
  },
  {
    id: "estudos",
    label: "Estudos",
    x: 55,
    y: 275,
    path: "estudos/algoritmos.md",
    body: "---\ntags: [grafos, prova]\n---\n## Resumo\nDijkstra: caminho mínimo com pesos\nnão-negativos — O((V+E) log V) com heap.",
    caption:
      "categoria livre — não há árvore fixa, você cria as pastas que fizerem sentido.",
  },
  {
    id: "pessoal",
    label: "Pessoal",
    x: 345,
    y: 300,
    path: "vida-pessoal.md",
    body: "## Preferências\n- Café: só coado, sem açúcar\n- Livro atual: Sapiens",
    caption:
      "fatos do dia a dia — o Claude sempre pergunta antes de guardar algo assim.",
  },
  {
    id: "conhecimentos",
    label: "Conhecimentos",
    x: 214,
    y: 100,
    path: "conhecimentos/git-avancado.md",
    body: "## rebase interativo\ngit rebase -i HEAD~5\n\nsquash de commits antes do PR.",
    caption: "conhecimento técnico solto, não preso a um projeto específico.",
  },
  {
    id: "hobby",
    label: "Hobby",
    x: 25,
    y: 70,
    leaf: true,
    path: "projetos/hobby.md",
    body: "---\ntags: [mobile, backend]\n---\n## Estado atual\nApp em produção, deploy automatizado.\nPróximo: revisar autenticação.",
    caption:
      "nó de projeto — 2º grau de profundidade, linkado a partir de Projetos.",
  },
  {
    id: "empresa",
    label: "Empresa",
    x: 130,
    y: 30,
    leaf: true,
    path: "projetos/empresa.md",
    body: "## Estado atual\nEstúdio próprio, 2 produtos em produção.\nVer também → tarefas/empresa.md",
    caption:
      'links cruzados ("Ver também") criam arestas extras — o grafo não é só uma estrela.',
  },
];

export const graphEdges: GraphEdge[] = [
  ["mind", "projetos"],
  ["mind", "tarefas"],
  ["mind", "estudos"],
  ["mind", "pessoal"],
  ["mind", "conhecimentos"],
  ["projetos", "hobby"],
  ["projetos", "empresa"],
  ["empresa", "tarefas"],
];
