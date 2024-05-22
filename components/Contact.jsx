import "./Contact.css";

import linkedin from "../src/assets/linkedin.svg";
import github from "../src/assets/github.svg";
import cv from "../src/assets/cv.svg";
import twitter from "../src/assets/twitter.svg";
import instagram from "../src/assets/instagram.svg";

export default function Contact() {
    return (
        <section id="contact" className="content-section">
            <h2>Contact</h2>
            <article className="contact-section">
                <a
                    target="_blank"
                    className="icon-link contact-link"
                    href="https://www.linkedin.com/in/adam-ali-413660261/"
                >
                    <img src={linkedin} alt="Linkedin" />
                </a>
                <a
                    target="_blank"
                    className="icon-link contact-link"
                    href="https://github.com/AdamAliWeb"
                >
                    <img src={github} alt="Github" />
                </a>

                <a
                    target="_blank"
                    className="icon-link contact-link"
                    href="https://x.com/AdamAliWeb"
                >
                    <img src={twitter} alt="Twitter" />
                </a>
                <a
                    target="_blank"
                    className="icon-link contact-link"
                    href="https://www.instagram.com/adamaliweb/"
                >
                    <img src={instagram} alt="Instagram" />
                </a>
                <a
                    target="_blank"
                    className="icon-link contact-link"
                    href="https://adamaliweb.com/assets/adam-ali-cv.pdf"
                >
                    <img src={cv} alt="CV" />
                </a>
            </article>
        </section>
    );
}
