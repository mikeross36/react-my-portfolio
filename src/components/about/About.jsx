import React from "react"
import { qualification } from "./data";
import { motion } from "framer-motion";
import { titleVariants, qualVariants } from "./aboutVariants";

const About = () => {
    return (
        <div className="about-wrapper">
            <section className="about">
                <div className="about-image" data-testid="about-img">
                </div>
                <div className="resume">
                    <motion.div className="resume-title"
                        variants={titleVariants}
                        initial="initial"
                        animate="withMotion">
                        <h2>Academic Qualification</h2>
                    </motion.div>
                    {qualification.map(qual => {
                        const { id, year, school, title } = qual;
                        return (
                            <motion.div data-testid="cv"
                                key={id}
                                className="res-qual"
                                variants={qualVariants}
                                initial="initial"
                                animate="withMotion">
                                <span className="year">{year}</span>
                                <br />
                                <span className="school">{school}</span>
                                <span className="title">{title}</span>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default About;