export const GITHUB_REPO_URL = "https://github.com/CafeLabsDev/mind-template";
export const GITHUB_LICENSE_URL = `${GITHUB_REPO_URL}/blob/main/LICENSE`;
// README anchor for the full setup walkthrough. Confirmed against the real
// heading "## Setup numa máquina nova" in mind-template/README.md — GitHub's
// slug keeps the unicode letter, so the "á" is percent-encoded in the URL.
export const README_SETUP_URL = `${GITHUB_REPO_URL}#setup-numa-m%C3%A1quina-nova`;

// Full setup sequence (fork-manual flow, two remotes) — copied verbatim by
// both "Copiar comandos de setup" buttons and shown in the no-clipboard
// fallback. The placeholder is wrapped in double quotes on purpose: a
// literal paste-and-run in bash never triggers shell redirection on the
// "<...>", it just makes git fail with an obviously-invalid-URL message
// until the user swaps in their own repo URL.
export const SETUP_COMMANDS =
  "# 1) crie antes um repo vazio e privado (GitHub, GitLab...) — sem README/gitignore\n" +
  "git clone https://github.com/CafeLabsDev/mind-template.git mind\n" +
  "cd mind\n" +
  "git remote rename origin upstream\n" +
  'git remote add origin "<url-do-seu-repo-vazio>"\n' +
  "git push -u origin main\n" +
  "\n" +
  "# 2) setup e primeira conversa\n" +
  "./scripts/setup-symlinks.sh\n" +
  "claude";
