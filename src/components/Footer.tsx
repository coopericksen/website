import { motion } from 'motion/react';
import { useRef } from 'react';

import '../styles/Footer.css';

function Footer() {
    const dragConstraintRef = useRef(null);
    
    return(
        <footer>
            <div className="footer-fixed" ref={dragConstraintRef}>
                <div className="footer-content">
                    <div className='footer-elgroup'>
                        <h4>Links</h4>
                        <a href="https://github.com/coopericksen/website" target='_blank'>Github Repository</a>
                        <a href="https://legacy.coopericksen.com" target='_blank'>Old Site</a>
                    </div>

                    <div className="footer-nav">
                        <a href="/">Home</a>
                        <a href="/tools">Tools</a>
                        <a href="/projects">Projects</a>
                        <a href="/about">About</a>
                    </div>
                </div>

                <motion.h4 
                    className='footer-author'

                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2 }}
                    
                    drag
                    dragConstraints={dragConstraintRef}
                    // dragConstraints={{
                    //     top: -50,
                    //     right: 80,
                    //     bottom: 50,
                    //     left: -80
                    // }}
                    dragElastic={0}
                >
                    coopericksen.com
                </motion.h4>
            </div>

        </footer>
    )
}

export default Footer;