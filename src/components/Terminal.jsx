import React, { useEffect, useRef, useState } from "react";
import Reveal, { SectionHead } from "./Reveal.jsx";
import { profile, skillGroups, projects, experience, education } from "../data.js";

const HELP = [
  "Available commands:",
  "  help         show this list",
  "  whoami       who am I",
  "  about        short summary",
  "  skills       technical skills",
  "  projects     list projects",
  "  experience   work history",
  "  education    degrees",
  "  contact      how to reach me",
  "  resume       download resume",
  "  clear        clear the screen",
];

function run(cmd) {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case "":
      return [];
    case "help":
      return HELP;
    case "whoami":
      return [`${profile.name} — ${profile.role}`];
    case "about":
      return [profile.summary];
    case "skills":
      return skillGroups.map((g) => `[${g.title}] ${g.items.join(", ")}`);
    case "projects":
      return projects.map((p, i) => `${String(i + 1).padStart(2, "0")}. ${p.title} — ${p.summary}`);
    case "experience":
      return experience.map((e) => `${e.period} | ${e.role} @ ${e.company}`);
    case "education":
      return education.map((e) => `${e.period} | ${e.degree}, ${e.school}`);
    case "contact":
      return [
        `email    : ${profile.email}`,
        `phone    : ${profile.phones.join(" / ")}`,
        `linkedin : ${profile.linkedin}`,
        `location : ${profile.location}`,
      ];
    case "resume": {
      const a = document.createElement("a");
      a.href = "/resume.pdf";
      a.download = "Nihal_Ansh_Aherwar_Resume.pdf";
      a.click();
      return ["Downloading resume.pdf ..."];
    }
    case "sudo hire-me":
    case "sudo hire me":
      return ["[sudo] permission granted ✔", "Offer letter queued. Please check your inbox 😄"];
    default:
      return [`command not found: ${c}. Type 'help' for the list.`];
  }
}

export default function Terminal() {
  const [lines, setLines] = useState([
    { t: "out", v: "Welcome to nihal-shell v1.0 — type 'help' to begin." },
  ]);
  const [input, setInput] = useState("");
  const [hist, setHist] = useState([]);
  const [hi, setHi] = useState(-1);
  const body = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (body.current) body.current.scrollTop = body.current.scrollHeight;
  }, [lines]);

  const exec = (cmd) => {
    if (cmd.trim().toLowerCase() === "clear") {
      setLines([]);
      return;
    }
    const out = run(cmd).map((v) => ({ t: "out", v }));
    setLines((l) => [...l, { t: "in", v: cmd }, ...out]);
    if (cmd.trim()) setHist((h) => [...h, cmd]);
    setHi(-1);
  };

  const onKey = (e) => {
    if (e.key === "Enter") {
      exec(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const n = Math.min(hi + 1, hist.length - 1);
      if (n >= 0) {
        setHi(n);
        setInput(hist[hist.length - 1 - n]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const n = hi - 1;
      setHi(n);
      setInput(n >= 0 ? hist[hist.length - 1 - n] : "");
    }
  };

  const quick = ["help", "skills", "projects", "experience", "contact"];

  return (
    <section id="terminal" className="section">
      <SectionHead scene="SCENE 04 · BEHIND THE SCENES" title="Interactive Terminal" subtitle="Talk to my portfolio like a real shell." />
      <Reveal>
        <div className="terminal" onClick={() => inputRef.current?.focus()}>
          <div className="term-bar">
            <i className="r" /><i className="y" /><i className="g" />
            <span>nihal@portfolio: ~</span>
          </div>
          <div className="term-body" ref={body}>
            {lines.map((l, i) => (
              <div key={i} className={`term-line ${l.t}`}>
                {l.t === "in" && <span className="prompt">$</span>}
                {l.v}
              </div>
            ))}
            <div className="term-line in">
              <span className="prompt">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal input"
              />
            </div>
          </div>
        </div>
        <div className="quick">
          {quick.map((q) => (
            <button key={q} className="chip" onClick={() => exec(q)}>{q}</button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
