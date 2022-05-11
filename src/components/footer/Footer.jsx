import React from "react"
import { motion } from "framer-motion";

const footerVariants = {
    initial: {
        opacity: 0,
    },
    withMotion: {
        opacity: 1,
        transition: {type: "spring", delay: .8}
    }
}

const Footer = () => {
    return (
        <motion.footer className="footer"
            variants={footerVariants}
            initial="initial"
        animate="withMotion">
            <span className="footer-title">
                &copy; Copyright 2020 DodaDesign
            </span>
        </motion.footer>
    )
}

export default Footer;