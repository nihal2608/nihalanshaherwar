import React, { useEffect, useRef } from "react";
import { profile, marquee } from "../data.js";
import { useTyped } from "../hooks.js";
import { Portrait } from "./Photo.jsx";
import Magnetic from "./Magnetic.jsx";

function DustCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w, h, raf, parts = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.max(40, Math.min(90, Math.floor((w * h) / 20000)));
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.4 + Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.14,
        vy: -(0.08 + Math.random() * 0.32),
        a: Math.random() * Math.PI * 2,
        s: 0.01 + Math.random() * 0.025,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        p.a += p.s;
        if (p.y < -6) { p.y = h + 6; p.x = Math.random() * w; }
        const alpha = 0.12 + 0.55 * (0.5 + 0.5 * Math.sin(p.a));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(246,213,139,${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="dust" />;
}

export default function Hero({ ready }) {
  const typed = useTyped(profile.roles, { active: ready });
  const sec = useRef(null);

  const onMove = (e) => {
    const el = sec.current;
    if (!el) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    el.style.setProperty("--px", x.toFixed(3));
    el.style.setProperty("--py", y.toFixed(3));
  };

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" ref={sec} onMouseMove={onMove} className={`hero ${ready ? "ready" : ""}`}>
      <div className="aurora" />
      <div className="beam" />
      <DustCanvas />
      <div className="hero-vignette" />
      <div className="letterbox top" />
      <div className="letterbox bottom" />

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="rec-dot" /> NOW SHOWING &nbsp;·&nbsp; A BACKEND STORY
          </div>
          <h1 className="hero-title">
            <span className="line l1">{profile.firstName}</span>
            <span className="line l2">{profile.lastName}</span>
          </h1>
          <p className="hero-tag serif">
            Engineering the systems behind <em>every great scene.</em>
          </p>
          <p className="hero-role">
            <span className="tick">▸</span>
            <span className="typed">{typed}</span>
            <span className="caret" />
          </p>
          <p className="hero-sum">
            4.6 years building Spring Boot microservices, Kafka pipelines and REST APIs across telecom, networking,
            smart-city and device-management products.
          </p>
          <div className="hero-cta">
            <Magnetic>
              <button className="btn" onClick={() => go("projects")}>▶ Watch Projects</button>
            </Magnetic>
            <Magnetic>
              <button className="btn ghost" onClick={() => go("contact")}>Get in touch</button>
            </Magnetic>
          </div>
          <div className="hero-metrics">
            <div><b>4.6+</b><span>Years</span></div>
            <div><b>7</b><span>Projects</span></div>
            <div><b>5</b><span>Domains</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <Portrait />
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-row">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      <button className="scroll-hint" onClick={() => go("about")} aria-label="Scroll down">
        <i />
      </button>
    </section>
  );
}
