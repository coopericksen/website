import { motion } from 'motion/react';

import '../styles/Nav.css';

function Nav() {
    return (
        <nav>
            <motion.a
                className="nav-link" 
                id="nav-logo-container" 
                href="/"

                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >
                <img id="nav-logo" src="./logo.png" alt="coopericksen's logo" />
            </motion.a>

            <motion.a 
                className="nav-link" 
                href="/"

                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >Home</motion.a>

            <motion.a 
                className="nav-link" 
                href="/tools"

                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >Tools</motion.a>

            <motion.a 
                className="nav-link" 
                href="/projects"

                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >Projects</motion.a>

            <motion.a 
                className="nav-link" 
                href="/about"

                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >About</motion.a>
        </nav>
    )
}

export default Nav;