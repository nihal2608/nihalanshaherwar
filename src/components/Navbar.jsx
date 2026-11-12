import React, { useMemo, useState } from "react";
import { navItems, profile } from "../data.js";
import { useActiveSection, useScrollProgress } from "../hooks.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();
  const ids = useMemo(() => navItems.map((n) => n.id), []);
  const active = useActiveSection(ids);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`nav ${progress > 0.01 ? "scrolled" : ""}`}>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <button className="brand" onClick={() => go("hero")} aria-label="Go to top">
        <span className="brand-mark">NA</span>
        <span className="brand-name">{profile.name}</span>
      </button>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {navItems.map((n) => (
          <button key={n.id} className={active === n.id ? "active" : ""} onClick={() => go(n.id)}>
            {n.label}
          </button>
        ))}
        <a className="btn small" href="/resume.pdf" download="Nihal_Ansh_Aherwar_Resume.pdf">
          Resume ↓
        </a>
      </nav>
      <button className={`burger ${open ? "open" : ""}`} onClick={() => setOpen((v) => !v)} aria-label="Menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
