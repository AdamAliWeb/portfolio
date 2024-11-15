import { useEffect, useState } from "react";

import ParticlesComponent from "../components/ParticlesComponent";
import HeroArea from "../components/HeroArea";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Biography from "../components/Biography";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Experience from "../components/Experience";

function App() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    useEffect(() => {
        document
            .querySelectorAll(".content-section")
            .forEach((el) => observer.observe(el));
    });

    return (
        <>
            <ParticlesComponent id="particles" />
            <Header />
            <main className="main-content">
                <HeroArea />
                <Biography />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </>
    );
}

export default App;
