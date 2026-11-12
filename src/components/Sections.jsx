import React, { useState, useEffect } from "react";
import Reveal, { SectionHead } from "./Reveal.jsx";
import { skillGroups, experience, projects } from "../data.js";

/* ---------------- SKILLS ---------------- */
export function Skills() {
  const [active, setActive] = useState("all");
  const groups = active === "all" ? skillGroups : skillGroups.filter((g) => g.key === active);
  return (
    <section id="skills" className="section">
      <SectionHead scene="SCENE 01 · THE CAST" title="Skills & Technologies" subtitle="The toolkit behind every production." />
      <Reveal className="filters">
        <button className={active === "all" ? "on" : ""} onClick={() => setActive("all")}>All</button>
        {skillGroups.map((g) => (
          <button key={g.key} className={active === g.key ? "on" : ""} onClick={() => setActive(g.key)}>
            {g.title}
          </button>
        ))}
      </Reveal>
      <div className="skill-grid">
        {groups.map((g, gi) => (
          <Reveal key={g.key} delay={gi * 70} className="skill-card tilt-wrap">
            <Tilt>
              <div className="skill-head">
                <span className="skill-icon">{g.icon}</span>
                <h3>{g.title}</h3>
              </div>
              <div className="chips">
                {g.items.map((it, i) => (
                  <span className="chip" key={it} style={{ animationDelay: `${i * 60}ms` }}>
                    {it}
                  </span>
                ))}
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHead scene="SCENE 02 · THE JOURNEY" title="Experience" subtitle="Two studios. One mission: ship reliable backends." />
      <div className="timeline">
        <div className="timeline-line" />
        {experience.map((e, i) => (
          <Reveal key={e.company} className={`tl-item ${i % 2 ? "right" : "left"}`} direction={i % 2 ? "right" : "left"}>
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="scene-tag small">{e.scene}</span>
              <h3>{e.role}</h3>
              <div className="tl-meta">
                <b>{e.company}</b>
                <span>{e.period}</span>
              </div>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- TILT CARD ---------------- */
function Tilt({ children, className = "", onClick, accent }) {
  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * 10}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 12}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };
  const onLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return (
    <div
      className={`tilt ${className}`}
      style={accent ? { "--accent": accent } : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="tilt-glow" />
      {children}
    </div>
  );
}

/* ---------------- PROJECTS ---------------- */
function Modal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" style={{ "--accent": project.accent }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <span className="genre">{project.genre}</span>
        <h3>{project.title}</h3>
        <div className="chips">
          {project.stack.map((s) => (
            <span className="chip" key={s}>{s}</span>
          ))}
        </div>
        <ul>
          {project.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Projects() {
  const [sel, setSel] = useState(null);
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Java", "Spring Boot", "Kafka", "MongoDB", "REST APIs"];
  const list = filter === "All" ? projects : projects.filter((p) => p.stack.some((s) => s.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="projects" className="section">
      <SectionHead scene="SCENE 03 · NOW SHOWING" title="Featured Projects" subtitle="Click a poster to open the full case file." />
      <Reveal className="filters">
        {filters.map((f) => (
          <button key={f} className={filter === f ? "on" : ""} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </Reveal>
      <div className="project-grid">
        {list.map((p, i) => (
          <Reveal key={p.id} delay={i * 60}>
            <Tilt className="poster" accent={p.accent} onClick={() => setSel(p)}>
              <div className="poster-top">
                <span className="genre">{p.genre}</span>
                <span className="poster-no">#{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="chips">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
              <span className="poster-more">View details →</span>
            </Tilt>
          </Reveal>
        ))}
        {list.length === 0 && <p className="empty">No projects match this filter.</p>}
      </div>
      {sel && <Modal project={sel} onClose={() => setSel(null)} />}
    </section>
  );
}
