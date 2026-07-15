"use client";

import { useEffect, useState } from "react";
import { GitHubLink } from "@/components/GitHubLink";
import { GitHubIcon } from "@/components/icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav">
        <a className="logo" href="#top">
          <span className="logo-dot" aria-hidden="true" /> mind
        </a>
        <GitHubLink location="header" className="nav-gh">
          <GitHubIcon />
          <span className="gh-label">GitHub</span>
        </GitHubLink>
      </div>
    </header>
  );
}
