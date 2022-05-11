import React from "react"
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import { nameVariants, titleVariants, underlineVariants } from "./homeVariants";

const Home = () => {
    return (
        <section className="home">
            <div className="home-wrapper" data-testid="home-div">
                <motion.h1 className="name"
                    variants={nameVariants}
                    initial="initial"
                animate="withMotion">
                    Vladimir Monarov
                </motion.h1>
                <motion.div className="underline"
                    variants={underlineVariants}
                    initial="initial"
                animate="withMotion">
                </motion.div>
                <motion.h3 className="title"
                    variants={titleVariants}
                    initial="initial"
                animate="withMotion">
                    front-end developer
                </motion.h3>
            </div>
            <Footer />
        </section>
    )
}

export default Home;