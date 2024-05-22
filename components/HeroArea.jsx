import manPicture from "../src/assets/adam-ali.png";
import email from "../src/assets/email.svg";
import phone from "../src/assets/phone.svg";

import "./HeroArea.css";

export default function HeroArea() {
    return (
        <section id="home" className="hero-area">
            <img className="hero-img" src={manPicture} alt="Adam Ali" />
            <article className="title-container">
                <h1 className="hero-title">Adam Ali</h1>
                <h2 className="hero-desc">Frontend Developer</h2>
                <div className="hero-contact">
                    <p>
                        <img className="hero-icon" src={email} alt="email" />{" "}
                        adamstar080904@gmail.com
                        {/* FIX IT !!! */}
                    </p>
                    <p>
                        <img className="hero-icon" src={phone} alt="phone" />{" "}
                        (780) 695-2105
                        {/* FIX IT !!! */}
                    </p>
                </div>
            </article>
        </section>
    );
}
