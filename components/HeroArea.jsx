import "./HeroArea.css";

export default function HeroArea() {
    return (
        <section id="home" className="hero-area">
            <img
                className="hero-img"
                src="./assets/adam-ali.png"
                alt="Adam Ali"
            />
            <article className="title-container">
                <h1 className="hero-title">Adam Ali</h1>
                <h2 className="hero-desc">Frontend Developer</h2>
                <div className="hero-contact">
                    <p>
                        <img
                            className="hero-icon"
                            src="./assets/email.svg"
                            alt="email"
                        />{" "}
                        adamstar080904@gmail.com
                    </p>
                    <p>
                        <img
                            className="hero-icon"
                            src="./assets/phone.svg"
                            alt="phone"
                        />{" "}
                        (780) 695-2105
                    </p>
                </div>
            </article>
        </section>
    );
}
