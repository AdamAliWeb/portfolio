import "./Contact.css";

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
                    <img src="./assets/linkedin.svg" alt="Linkedin" />
                </a>
                <a
                    target="_blank"
                    className="icon-link contact-link"
                    href="https://github.com/AdamAliWeb"
                >
                    <img src="./assets/github.svg" alt="Github" />
                </a>

                <a
                    target="_blank"
                    className="icon-link contact-link"
                    href="https://x.com/AdamAliWeb"
                >
                    <img src="./assets/twitter.svg" alt="Twitter" />
                </a>
                <a
                    target="_blank"
                    className="icon-link contact-link"
                    href="https://www.instagram.com/adamaliweb/"
                >
                    <img src="./assets/instagram.svg" alt="Instagram" />
                </a>
                <a
                    target="_blank"
                    className="icon-link contact-link"
                    href="https://adamaliweb.com/assets/adam-ali-cv.pdf"
                >
                    <img src="./assets/cv.svg" alt="CV" />
                </a>
            </article>
        </section>
    );
}
