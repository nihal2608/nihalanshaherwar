import React, { useState } from "react";
import Reveal, { SectionHead } from "./Reveal.jsx";
import { profile } from "../data.js";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your mail app… ✔");
  };

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    } catch {
      setCopied("");
    }
  };

  return (
    <section id="contact" className="section">
      <SectionHead scene="FINAL SCENE · THE CALL" title="Let's Make Something" subtitle="Open to backend roles, freelance work and interesting problems." />
      <div className="contact-grid">
        <Reveal direction="left" className="contact-info">
          <div className="info-row">
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button className="mini" onClick={() => copy(profile.email, "email")}>{copied === "email" ? "Copied ✔" : "Copy"}</button>
          </div>
          {profile.phones.map((p, i) => (
            <div className="info-row" key={p}>
              <span>Phone</span>
              <a href={`tel:${profile.phoneLinks[i]}`}>{p}</a>
              <button className="mini" onClick={() => copy(p, "p" + i)}>{copied === "p" + i ? "Copied ✔" : "Copy"}</button>
            </div>
          ))}
          <div className="info-row">
            <span>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">nihal-ansh-aherwar</a>
          </div>
          <div className="info-row">
            <span>Location</span>
            <em>{profile.location}</em>
          </div>
          <a className="btn" href="/resume.pdf" download="Nihal_Ansh_Aherwar_Resume.pdf">Download Resume ↓</a>
        </Reveal>

        <Reveal direction="right">
          <form className="form" onSubmit={submit} noValidate>
            <label>
              Your name
              <input value={form.name} onChange={set("name")} placeholder="Username" />
            </label>
            <label>
              Your email
              <input type="email" value={form.email} onChange={set("email")} placeholder="name@gmail.com" />
            </label>
            <label>
              Message
              <textarea rows="5" value={form.message} onChange={set("message")} placeholder="Tell me about the project…" />
            </label>
            <button className="btn" type="submit">Send message ▶</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const credits = [
    ["Written & Engineered by", profile.name],
    ["Backend Stack", "Java · Spring Boot · Kafka · MongoDB · PostgreSQL"],
    ["Frontend Stack", "React · Vite"],
    ["Special Thanks", "Frontend, QA & engineering teammates"],
  ];
  return (
    <footer className="footer">
      <div className="the-end">THE END</div>
      <div className="credits">
        {credits.map(([a, b]) => (
          <p key={a}><span>{a}</span><b>{b}</b></p>
        ))}
      </div>
      <button className="btn ghost" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑ Replay</button>
      <small>© {new Date().getFullYear()} {profile.name}. All rights reserved.</small>
    </footer>
  );
}
