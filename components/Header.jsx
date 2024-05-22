import { useState } from "react";
import "./Header.css";

export default function Header() {
    const [navMenu, setNavMenu] = useState(false);

    const handleNavMenu = () =>
        navMenu ? setNavMenu(false) : setNavMenu(true);

    return (
        <header className="header">
            <button
                className={`hamburger-btn ${navMenu ? "--active" : ""}`}
                onClick={handleNavMenu}
            >
                <div className="hamburger-btn-bar-1"></div>
                <div className="hamburger-btn-bar-2"></div>
                <div className="hamburger-btn-bar-3"></div>
            </button>
            <nav className={`nav-menu ${navMenu ? "--active" : ""}`}>
                <a
                    className="nav-menu-link"
                    onClick={() => setNavMenu(false)}
                    href="#home"
                >
                    Home
                </a>
                <a
                    className="nav-menu-link"
                    onClick={() => setNavMenu(false)}
                    href="#biography"
                >
                    Biography
                </a>
                <a
                    className="nav-menu-link"
                    onClick={() => setNavMenu(false)}
                    href="#projects"
                >
                    Projects
                </a>
                <a
                    className="nav-menu-link"
                    onClick={() => setNavMenu(false)}
                    href="#skills"
                >
                    Skills
                </a>
                <a
                    className="nav-menu-link"
                    onClick={() => setNavMenu(false)}
                    href="#contact"
                >
                    Contact
                </a>
            </nav>
            <nav></nav>
        </header>
    );
}
