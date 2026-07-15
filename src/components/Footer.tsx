import { GitHubLink } from "@/components/GitHubLink";
import { GITHUB_LICENSE_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <a className="logo" href="#top">
          <span className="logo-dot" aria-hidden="true" /> mind
        </a>
        <div className="foot-links">
          <GitHubLink location="footer">Repositório</GitHubLink>
          <a href={GITHUB_LICENSE_URL} target="_blank" rel="noopener noreferrer">
            MIT License
          </a>
          <a href="https://cafelabs.net" target="_blank" rel="noopener noreferrer">
            Café Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
