import "./Skills.css";

import html from "../src/assets/technologies/html.svg";
import css from "../src/assets/technologies/css.svg";
import javascript from "../src/assets/technologies/javascript.svg";
import sass from "../src/assets/technologies/sass.svg";
import bootstrap from "../src/assets/technologies/bootstrap.svg";
import tailwind from "../src/assets/technologies/tailwind.svg";
import react from "../src/assets/technologies/react.svg";
import reactRouter from "../src/assets/technologies/react-router.svg";
import vite from "../src/assets/technologies/vite.svg";
import typescript from "../src/assets/technologies/typescript.svg";
import csharp from "../src/assets/technologies/csharp.svg";
import python from "../src/assets/technologies/python.svg";
import git from "../src/assets/technologies/git.svg";
import figma from "../src/assets/technologies/figma.svg";

export default function Skills() {
    return (
        <section id="skills" className="content-section">
            <h2>Skills & Technologies</h2>
            <article className="skills-section">
                <a
                    className="skills-link"
                    target="blank"
                    href="https://www.w3schools.com/html/"
                >
                    <img src={html} alt="HTML" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://www.w3schools.com/css/"
                >
                    <img src={css} alt="CSS" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                >
                    <img src={javascript} alt="JavaScript" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://sass-lang.com/"
                >
                    <img src={sass} alt="SASS" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://getbootstrap.com"
                >
                    <img src={bootstrap} alt="Bootstrap" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://tailwindcss.com/"
                >
                    <img src={tailwind} alt="Tailwind" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://react.dev/"
                >
                    <img src={react} alt="React" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://reactrouter.com/en/main"
                >
                    <img src={reactRouter} alt="React Router" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://vitejs.dev/"
                >
                    <img src={vite} alt="Vite" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://www.typescriptlang.org/"
                >
                    <img src={typescript} alt="TypeScript" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                >
                    <img src={csharp} alt="C#" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://www.python.org/"
                >
                    <img src={python} alt="Python" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://git-scm.com/"
                >
                    <img src={git} alt="Git" />
                </a>
                <a
                    className="skills-link"
                    target="blank"
                    href="https://www.figma.com/"
                >
                    <img src={figma} alt="Figma" />
                </a>
            </article>
        </section>
    );
}
