import React from "react";
import { useInView } from "../hooks.js";

export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", direction = "up" }) {
  const [ref, inView] = useInView(0.12);
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({ scene, title, subtitle }) {
  return (
    <Reveal className="section-head">
      <span className="scene-tag">{scene}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </Reveal>
  );
}
