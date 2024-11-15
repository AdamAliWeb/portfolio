import "./Experience.css";

export default function Experience() {
    return (
        <section id="experience" className="content-section">
            <h2>Experience</h2>
            <div className="work-cards">
                <article className="work-card">
                    <a href="https://enjovia.com" target="_blank">
                        <img src="./assets/work-1.webp" alt="work-1" />
                    </a>

                    <h4>Enjovia</h4>
                    <p>
                        Increase your gift voucher sales with the easy to use
                        gift voucher management system from Enjovia.
                    </p>
                </article>
                <article className="work-card">
                    <a href="https://olvet.if.ua" target="_blank">
                        <img src="./assets/work-2.webp" alt="work-3" />
                    </a>

                    <h4>OlVet</h4>
                    <p>
                        The "OlVet" Veterinary Clinic offers quality animal care
                        in Ivano-Frankivsk. Professional veterinarians and
                        modern equipment
                    </p>
                </article>
                <article className="work-card">
                    <a href="https://sim23.ua" target="_blank">
                        <img src="./assets/work-3.webp" alt="work-3" />
                    </a>

                    <h4>Simi</h4>
                    <p>
                        At "Simi," you can explore and enjoy our wide selection
                        of foods and products.
                    </p>
                </article>
                <article className="work-card">
                    <a href="https://print.foliant.if.ua" target="_blank">
                        <img src="./assets/work-4.webp" alt="work-4" />
                    </a>

                    <h4>Foliant</h4>
                    <p>
                        "Foliant" is a company that specializes in printing text
                        or logos on a wide variety of paper products.
                    </p>
                </article>
            </div>
        </section>
    );
}
