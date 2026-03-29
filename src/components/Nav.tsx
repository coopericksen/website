import { motion } from 'motion/react';

import '../styles/Nav.css';

function Nav() {
    return (
        <nav>
            <motion.a
                className="nav-link" 
                id="nav-logo-container" 
                href="/"

                initial={{ opacity: 0, y: -50}} 
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }} 
                viewport={{ once: true }} 

                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >
                <img id="nav-logo" src="./logo.png" alt="coopericksen's logo" />
            </motion.a>

            <motion.a 
                className="nav-link" 
                href="/"

                initial={{ opacity: 0, y: -50}} 
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }} 
                viewport={{ once: true }} 

                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >Home</motion.a>

            <motion.a 
                className="nav-link" 
                href="/tools"

                initial={{ opacity: 0, y: -50}} 
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }} 
                viewport={{ once: true }} 

                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >Tools</motion.a>

            <motion.a 
                className="nav-link" 
                href="/projects"

                initial={{ opacity: 0, y: -50}} 
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } }} 
                viewport={{ once: true }} 

                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >Projects</motion.a>

            <motion.a 
                className="nav-link" 
                href="/about"

                initial={{ opacity: 0, y: -50}} 
                whileInView={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.5 } }} 
                viewport={{ once: true }} 

                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >About</motion.a>
        </nav>
    )
}

export default Nav;