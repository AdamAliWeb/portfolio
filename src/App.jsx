import { useState } from "react";

import ParticlesComponent from "../components/ParticlesComponent";
import HeroArea from "../components/HeroArea";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Biography from "../components/Biography";
import Contact from "../components/Contact";
import Header from "../components/Header";

function App() {
    return (
        <>
            <ParticlesComponent id="particles" />
            <Header />
            <main className="main-content">
                <HeroArea />
                <Biography />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </>
    );
}

export default App;
