import React from "react";
import Reveal, { SectionHead } from "./Reveal.jsx";
import { FilmStrip } from "./Photo.jsx";
import { useCounter, useInView } from "../hooks.js";
import { profile, marquee, education, languages } from "../data.js";

function Stat({ value, suffix, decimals, label, start }) {
  const v = useCounter(value, start, 1600, decimals);
  return (
    <div className="stat">
      <div className="stat-num">
        {v}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView(0.3);
  return (
    <section id="about" className="section">
      <SectionHead
        scene="SCENE 00 · THE STORY"
        title="About the Lead"
        subtitle="Backend engineer. Production firefighter. Pipeline builder."
      />
      <div className="about-grid">
        <Reveal direction="left" className="about-visual">
          <FilmStrip />
        </Reveal>

        <div className="about-main">
          <Reveal>
            <p className="lead">{profile.summary}</p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="facts">
              <li><span>📍</span>{profile.location}</li>
              <li><span>🗣</span>{languages.join(" · ")}</li>
              <li><span>✉</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            </ul>
          </Reveal>
          <div ref={ref} className="stats">
            {profile.stats.map((s) => (
              <Stat key={s.label} {...s} start={inView} />
            ))}
          </div>
          <Reveal delay={100}>
            <div className="edu">
              <h4>Education</h4>
              {education.map((e) => (
                <div className="edu-item" key={e.degree}>
                  <b>{e.degree}</b>
                  <span>{e.school} · {e.period}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="reel">
          <div className="reel-row">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
