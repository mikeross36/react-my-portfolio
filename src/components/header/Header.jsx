import React from "react"
import { links } from "./data.js"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {menuBtnVariants, menuNavVariants} from "./headerVariants"

const Header = (props) => {
    const { toggleMobileMenu, showMobileMenu, closeMobileMenu } = props;

    return (
        <header className="header">
            <motion.button className="menu-btn" onClick={toggleMobileMenu}
                variants={menuBtnVariants}
                initial="initial"
            animate="withMotion">
                <span
                    className={`menu-btn-burger ${showMobileMenu && "open"}`}
                    data-testid="burger-span">   
                </span>
            </motion.button>
            <nav className={`nav ${showMobileMenu && "open"}`}>
                <motion.ul className={`menu-nav ${showMobileMenu && "open"}`}
                    variants={menuNavVariants}
                    initial="initial"
                animate="withMotion">
                    {links.map(link => {
                        const { id, url, text } = link;
                        return (
                            <li key={id} className={`menu-nav-item ${showMobileMenu && "open"}`}>
                                <Link to={url}>
                                    <span
                                        onClick={closeMobileMenu}
                                        className="menu-nav-link">
                                        {text}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </motion.ul>
            </nav>
        </header>
    )
}

export default Header;