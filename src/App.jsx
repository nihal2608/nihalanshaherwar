import React, { useState } from "react";
import Loader from "./components/Loader.jsx";
import Cursor from "./components/Cursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import { Skills, Experience, Projects } from "./components/Sections.jsx";
import Terminal from "./components/Terminal.jsx";
import { Contact, Footer } from "./components/Contact.jsx";

export default function App() {
  const [ready, setReady] = useState(false);
  return (
    <>
      <Cursor />
      {!ready && <Loader onDone={() => setReady(true)} />}
      <div className={`app ${ready ? "ready" : ""}`}>
        <div className="grain" />
        <Navbar />
        <main>
          <Hero ready={ready} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Terminal />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
