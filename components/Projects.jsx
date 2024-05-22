import "./Projects.css";

import useModal from "../hooks/useModal";
import wdz from "../src/assets/wdz-logo.svg";
import yig from "../src/assets/yig-logo.svg";

import github from "../src/assets/github.svg";
import website from "../src/assets/website.svg";
import ModalWindow from "./ModalWindow";

export default function Projects() {
    const [modalActive1, openModal1, closeModal1] = useModal(false);
    const [modalActive2, openModal2, closeModal2] = useModal(false);

    return (
        <section id="projects" className="content-section">
            <h2>Projects</h2>
            <article className="projects-section">
                <div className="project" onClick={() => openModal1()}>
                    <img className="project-img" src={wdz} alt="WebDevZone" />
                </div>
                <div className="project" onClick={() => openModal2()}>
                    <img
                        className="project-img"
                        src={yig}
                        alt="Youtube Info Gather"
                    />
                </div>
            </article>
            <ModalWindow modalState={modalActive1} closeModal={closeModal1}>
                <h3 className="modal-title">WebDevZone</h3>
                <div className="modal-links">
                    <a
                        target="_blank"
                        className="icon-link modal-link"
                        href="https://webdevzone.adamaliweb.com/"
                    >
                        <img
                            className="modal-img"
                            src={website}
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
                            src={github}
                            alt="WebDevZone Repository"
                        />
                    </a>
                </div>
            </ModalWindow>
            <ModalWindow modalState={modalActive2} closeModal={closeModal2}>
                <h3 className="modal-title">Youtube Info Gather</h3>
                <div className="modal-links">
                    <a
                        target="_blank"
                        className="icon-link modal-link"
                        href="https://youtubeinfogather.adamaliweb.com/"
                    >
                        <img
                            className="modal-img"
                            src={website}
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
                            src={github}
                            alt="WebDevZone Repository"
                        />
                    </a>
                </div>
            </ModalWindow>
        </section>
    );
}
