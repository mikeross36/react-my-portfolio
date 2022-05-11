import React from "react"
import { socialIcons } from "./data";
import { motion } from "framer-motion";

const Socials = () => {
    return (
        <div className="social-icons">
            {socialIcons.map((soc, idx) => {
                const { id, url, icon } = soc;
                return (
                    <motion.ul key={id}
                        initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                        transition={{duration: .3, delay: idx * .2}}>
                        
                        <li>
                            <a  href={url} target="_blank" rel="noreferrer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span data-testid="soc-icon">{icon}</span>
                            </a>
                        </li>
                    </motion.ul>
                   
                )
            })}
        </div>
    )
}

export default Socials;