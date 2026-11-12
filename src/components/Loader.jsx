import React, { useEffect, useRef, useState } from "react";

export default function Loader({ onDone }) {
  const [n, setN] = useState(3);
  const [opening, setOpening] = useState(false);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // countdown 3 → 2 → 1 → 0
  useEffect(() => {
    if (opening) return;
    if (n === 0) {
      setOpening(true);
      return;
    }
    const t = setTimeout(() => setN((v) => v - 1), 700);
    return () => clearTimeout(t);
  }, [n, opening]);

  // after the panels slide away, remove the loader
  useEffect(() => {
    if (!opening) return;
    const t = setTimeout(() => doneRef.current(), 1000);
    return () => clearTimeout(t);
  }, [opening]);

  const skip = () => {
    setN(0);
    setOpening(true);
  };

  return (
    <div className={`loader ${opening ? "opening" : ""}`}>
      <div className="loader-panel top" />
      <div className="loader-panel bottom" />
      <div className="loader-center">
        <div className="leader">
          <svg viewBox="0 0 200 200" className="leader-svg">
            <circle cx="100" cy="100" r="86" className="leader-ring" />
            <circle cx="100" cy="100" r="64" className="leader-ring thin" />
            <line x1="100" y1="6" x2="100" y2="194" className="leader-cross" />
            <line x1="6" y1="100" x2="194" y2="100" className="leader-cross" />
            <path className="leader-sweep" d="M100 100 L100 14 A86 86 0 0 1 186 100 Z" />
          </svg>
          <span key={n} className="leader-num">{n === 0 ? "▶" : n}</span>
        </div>
        <p className="loader-text">NIHAL ANSH AHERWAR PRESENTS</p>
        <p className="loader-sub">A Senior Java Backend Developer Portfolio</p>
        <button className="skip-btn" onClick={skip}>Skip intro ›</button>
      </div>
    </div>
  );
}
