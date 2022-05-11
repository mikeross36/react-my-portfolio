import React from "react"
import { projects } from "./data";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="projects-wrapper">
            <section className="projects">
                <div className="project-image" data-testid="project-img">
                    <div className="project-title">
                        <h2>some of my projects...</h2>
                    </div>
                </div>
                <div className="project-items">
                    {projects.map((project, idx) => {
                        const { id, image, btns } = project;
                        return (
                            <motion.article
                                key={id}
                                className="project-item" data-testid="items"
                                initial={{ opacity: 0, translateY: -50 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{duration:.5, delay: idx * .2}}>
                                <img src={image} alt="project" />
                                <div className="project-btns">
                                    {btns.map(btn => {
                                        const { id, url, icon } = btn;
                                        return (
                                            <div key={id} className="btn">
                                                <a
                                                    href={url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {icon}
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </motion.article>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Projects;