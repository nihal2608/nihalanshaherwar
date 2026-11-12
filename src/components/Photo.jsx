import React, { useEffect, useRef, useState } from "react";

/*
  Apni photo yahan rakho:  public/profile.jpg
  (profile.jpeg / profile.png / profile.webp bhi chalega)
*/
const CANDIDATES = ["/profile.jpg", "/profile.jpeg", "/profile.png", "/profile.webp"];
let cache;

function loadPhoto() {
  if (cache) return cache;
  cache = (async () => {
    for (const src of CANDIDATES) {
      const ok = await new Promise((res) => {
        const img = new Image();
        img.onload = () => res(img.naturalWidth > 0);
        img.onerror = () => res(false);
        img.src = src;
      });
      if (ok) return src;
    }
    return null;
  })();
  return cache;
}

export function usePhoto() {
  const [src, setSrc] = useState(undefined); // undefined = loading, null = not found
  useEffect(() => {
    let on = true;
    loadPhoto().then((s) => on && setSrc(s));
    return () => {
      on = false;
    };
  }, []);
  return src;
}

export function Photo({ className = "", style, alt = "Nihal Ansh Aherwar" }) {
  const src = usePhoto();
  if (src) {
    return <img className={`photo ${className}`} style={style} src={src} alt={alt} draggable={false} />;
  }
  return (
    <div className={`photo photo-ph ${className}`} style={style} role="img" aria-label="Photo placeholder">
      <span className="ph-mono">NA</span>
      {src === null && import.meta.env.DEV && (
        <small>
          Apni photo yahan rakho
          <br />
          <b>public/profile.jpg</b>
        </small>
      )}
    </div>
  );
}

const BADGES = [
  { t: "Spring Boot", c: "b1", d: 1.3 },
  { t: "Apache Kafka", c: "b2", d: 0.8 },
  { t: "MongoDB", c: "b3", d: 1.1 },
  { t: "PostgreSQL", c: "b4", d: 0.6 },
];

export function Portrait() {
  const tc = useRef(null);

  useEffect(() => {
    const t0 = performance.now();
    const p = (n) => String(n).padStart(2, "0");
    const id = setInterval(() => {
      const t = (performance.now() - t0) / 1000 + 12;
      const f = Math.floor((t % 1) * 24);
      const s = Math.floor(t) % 60;
      const m = Math.floor(t / 60) % 60;
      const h = Math.floor(t / 3600);
      if (tc.current) tc.current.textContent = `${p(h)}:${p(m)}:${p(s)}:${p(f)}`;
    }, 42);
    return () => clearInterval(id);
  }, []);

  return (
    <figure className="portrait">
      <div className="portrait-glow" />
      <div className="portrait-frame">
        <Photo className="portrait-img" />
        <div className="grade" />
        <div className="vig" />
        <div className="flare" />
        <div className="scan" />
        <i className="br tl" />
        <i className="br tr" />
        <i className="br bl" />
        <i className="br bb" />
        <div className="focus" />
        <div className="hud hud-tl"><span className="rec-dot" /> REC</div>
        <div className="hud hud-tr">24 FPS · 2.39:1</div>
        <div className="hud hud-bl" ref={tc}>00:00:12:00</div>
        <div className="hud hud-br">A-CAM · TAKE 04</div>
      </div>
      <figcaption className="plate">
        <b>NIHAL ANSH AHERWAR</b>
        <span>Senior Java Backend Developer</span>
      </figcaption>
      {BADGES.map((b) => (
        <div key={b.t} className={`badge-wrap ${b.c}`} style={{ "--d": b.d }}>
          <span className="badge">{b.t}</span>
        </div>
      ))}
    </figure>
  );
}

export function FilmStrip() {
  const frames = [
    { label: "SC 01 · TAKE 1", pos: "50% 14%", scale: 1, cls: "g1" },
    { label: "SC 02 · TAKE 3", pos: "50% 28%", scale: 1.4, cls: "g2" },
    { label: "SC 03 · TAKE 7", pos: "50% 20%", scale: 1.18, cls: "g3" },
  ];
  return (
    <div className="strip">
      {frames.map((f) => (
        <div className={`strip-frame ${f.cls}`} key={f.label}>
          <Photo style={{ objectPosition: f.pos, transform: `scale(${f.scale})` }} />
          <div className="strip-grade" />
          <span className="strip-label">{f.label}</span>
        </div>
      ))}
    </div>
  );
}
