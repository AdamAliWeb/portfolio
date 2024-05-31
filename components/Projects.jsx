import "./Projects.css";

import useModal from "../hooks/useModal";
import ModalWindow from "./ModalWindow";

export default function Projects() {
    const [modalActive1, openModal1, closeModal1] = useModal(false);
    const [modalActive2, openModal2, closeModal2] = useModal(false);

    return (
        <section id="projects" className="content-section">
            <h2>Projects</h2>
            <article className="projects-section">
                <div className="project" onClick={() => openModal1()}>
                    <img
                        className="project-img"
                        src="./assets/wdz-logo.svg"
                        alt="WebDevZone"
                    />
                </div>
                <div className="project" onClick={() => openModal2()}>
                    <img
                        className="project-img"
                        src="./assets/yig-logo.svg"
                        alt="Youtube Info Gather"
                    />
                </div>
            </article>
            <ModalWindow modalState={modalActive1} closeModal={closeModal1}>
                <h3 className="modal-title">WebDevZone</h3>
                <p className="modal-desc">
                    This is a markdown previewer. On this website, I compile
                    different resources and tips which are publicly accessible.
                    I didn't create the content; I just organized it and put it
                    in one place. This is helpful because I can keep all the
                    information in one place and share it with others.
                </p>
                <div className="modal-links">
                    <a
                        target="_blank"
                        className="icon-link modal-link"
                        href="https://webdevzone.adamaliweb.com/"
                    >
                        <img
                            className="modal-img"
                            src="./assets/website.svg"
                            alt="WebDevZone Website"
                        />
                    </a>
                    <a
                        target="_blank"
                        className="icon-link modal-link"
                        href="https://github.com/AdamAliWeb/web-dev-zone"
                    >
                        <img
                            className="modal-img"
                            src="./assets/github.svg"
                            alt="WebDevZone Repository"
                        />
                    </a>
                </div>
            </ModalWindow>
            <ModalWindow modalState={modalActive2} closeModal={closeModal2}>
                <h3 className="modal-title">Youtube Info Gather</h3>

                <p className="modal-desc">
                    This website helps you retrieve data from YouTube playlists.
                    It can collect, save, and compare information from videos
                    within a playlist. This is particularly useful because
                    YouTube videos can be unexpectedly deleted, making it
                    challenging to recover them.
                </p>
                <div className="modal-links">
                    <a
                        target="_blank"
                        className="icon-link modal-link"
                        href="https://youtubeinfogather.adamaliweb.com/"
                    >
                        <img
                            className="modal-img"
                            src="./assets/website.svg"
                            alt="WebDevZone Website"
                        />
                    </a>
                    <a
                        target="_blank"
                        className="icon-link modal-link"
                        href="https://github.com/AdamAliWeb/youtube-info-gather"
                    >
                        <img
                            className="modal-img"
                            src="./assets/github.svg"
                            alt="WebDevZone Repository"
                        />
                    </a>
                </div>
            </ModalWindow>
        </section>
    );
}
