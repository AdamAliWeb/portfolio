import useDropdown from "../hooks/useDropdown";
import "./Biography.css";

export default function Biography() {
    const [dropdown, handleDropdown] = useDropdown();

    return (
        <section id="biography" className="content-section">
            <h2>Biography</h2>
            <article className="biography-container">
                {/* Who am I */}
                <div className="biography-section">
                    <div
                        className={`biography-btn ${
                            dropdown === 1 ? "--active" : ""
                        }`}
                        onClick={() =>
                            dropdown === 1
                                ? handleDropdown(0)
                                : handleDropdown(1)
                        }
                    >
                        <h3 className="biography-sign">
                            {dropdown === 1 ? "-" : "+"}
                        </h3>
                        <h3 className="biography-title">Who am I?</h3>
                    </div>

                    <div
                        className={`biography-desc ${
                            dropdown === 1 ? "--active" : ""
                        }`}
                    >
                        <p>
                            My name is Adam Ali, and I'm 20 years old. I was
                            born in Spain but also have Ukrainian roots. Growing
                            up, my family and I moved between Spain and Ukraine
                            quite frequently. When I was 11, we settled in
                            Ukraine. Unfortunately, due to the war that began in
                            2022, we were forced to leave the country. We sought
                            refuge in Spain, where we stayed for 8 months.
                            During that time, we considered relocating to
                            Canada, so we applied for a visa and waited. In
                            early 2023, we made the move to Canada, where I
                            currently reside.
                        </p>
                    </div>
                </div>

                {/* How I learnt Web Development? */}
                <div className="biography-section">
                    <div
                        onClick={() =>
                            dropdown === 2
                                ? handleDropdown(0)
                                : handleDropdown(2)
                        }
                        className={`biography-btn ${
                            dropdown === 2 ? "--active" : ""
                        }`}
                    >
                        <h3 className="biography-sign">
                            {dropdown === 2 ? "-" : "+"}
                        </h3>
                        <h3 className="biography-title">
                            How I learnt Web Development?
                        </h3>
                    </div>
                    <div
                        className={`biography-desc ${
                            dropdown === 2 ? "--active" : ""
                        }`}
                    >
                        <p>
                            As a child, I was fascinated by video games and
                            dreamt of becoming a video game programmer. I made
                            my first attempts to learn programming at the ages
                            of 12 and 14, but I struggled to make progress.
                            However, everything changed when I turned 16 and
                            discovered my passion for web development. I started
                            learning the basics and found myself captivated by
                            the world of web programming.
                        </p>
                        <p>
                            Although I can't pinpoint exactly why, I felt drawn
                            to combining programming with content creation. I
                            dedicated a year to studying, but progress was slow
                            as I juggled my studies with preparing for final
                            exams during my last year of high school in Ukraine.
                            After a summer break in Spain, I reignited my
                            passion for web programming and delved into more
                            advanced topics, such as JavaScript frameworks,
                            version control, and design software. This journey
                            was entirely self-directed. I relied on YouTube
                            courses, tutorials, and lots of practice to hone my
                            skills.
                        </p>
                    </div>
                </div>

                {/* What experience do I have?*/}
                <div className="biography-section">
                    <div
                        onClick={() =>
                            dropdown === 3
                                ? handleDropdown(0)
                                : handleDropdown(3)
                        }
                        className={`biography-btn ${
                            dropdown === 3 ? "--active" : ""
                        }`}
                    >
                        <h3 className="biography-sign">
                            {dropdown === 3 ? "-" : "+"}
                        </h3>
                        <h3 className="biography-title">
                            What experience do I have?
                        </h3>
                    </div>
                    <div
                        className={`biography-desc ${
                            dropdown === 3 ? "--active" : ""
                        }`}
                    >
                        <p>
                            I don't have industrial experience or have not
                            worked in a company yet. However, I have completed
                            several projects, which I share on this page. These
                            projects showcase my experience and skills in web
                            development. I am currently looking for job
                            opportunities in the field to gain more experience.
                        </p>
                    </div>
                </div>

                {/* What am I doing right now? */}
                <div className="biography-section">
                    <div
                        onClick={() =>
                            dropdown === 4
                                ? handleDropdown(0)
                                : handleDropdown(4)
                        }
                        className={`biography-btn ${
                            dropdown === 4 ? "--active" : ""
                        }`}
                    >
                        <h3 className="biography-sign">
                            {dropdown === 4 ? "-" : "+"}
                        </h3>
                        <h3 className="biography-title">
                            What am I doing right now?
                        </h3>
                    </div>
                    <div
                        className={`biography-desc ${
                            dropdown === 4 ? "--active" : ""
                        }`}
                    >
                        <p>
                            Essentially, I am looking for a job, but in the
                            meantime, I am doing other things. I am updating the
                            design of my projects because some of them no longer
                            meet my standards. Soon, you will see them improved.
                            I am also learning new technologies to enhance my
                            skills. Recently, I learned TypeScript, and I plan
                            to learn Next.js as well. After this and some
                            backend learning, I will develop more projects to
                            solve common problems that I and people around me
                            face.
                        </p>
                    </div>
                </div>

                {/* Anything else about me? */}
                <div className="biography-section">
                    <div
                        onClick={() =>
                            dropdown === 5
                                ? handleDropdown(0)
                                : handleDropdown(5)
                        }
                        className={`biography-btn ${
                            dropdown === 5 ? "--active" : ""
                        }`}
                    >
                        <h3 className="biography-sign">
                            {dropdown === 5 ? "-" : "+"}
                        </h3>
                        <h3 className="biography-title">
                            Anything else about me?
                        </h3>
                    </div>
                    <div
                        className={`biography-desc ${
                            dropdown === 5 ? "--active" : ""
                        }`}
                    >
                        <p>
                            If you're curious to learn more about me, I'm happy
                            to share! I consider myself a responsible and
                            consistent individual who thrives on routine and
                            daily progress. My hobbies include playing video
                            games, staying active through training, and
                            practicing beatboxing. I have ambitious goals that
                            I'm determined to achieve—building this website was
                            one of them. Beyond that, I strive to treat everyone
                            with respect and equality. Lastly, I'm passionate
                            about helping others grow and succeed. If you have
                            any questions or projects in mind, I'm here to
                            assist you in any way I can.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
}