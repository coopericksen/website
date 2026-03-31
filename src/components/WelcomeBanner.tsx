import { motion } from 'motion/react';

import '../styles/WelcomeBanner.css';

function WelcomeBanner() {
    return (
        <motion.section 
            className='welcome-banner'

            initial={{ opacity: 0, y: -50 }} 
            whileInView={{ opacity: 1, y: 0, transition: { delay: 1.2 } }} 
            viewport={{ once: true }} 
        >
            <h1>Welcome to the website of <a className='welcome-banner-name' href="/about">
                <motion.h1 
                    initial={{ scale: 1, rotate: 0 }}
                    whileHover={{
                        scale: [1, 1.15, 0.95, 1.05, 1],
                        rotate: [0, 2, -2, 1, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                >Cooper Ericksen!</motion.h1></a></h1>
        </motion.section>
    )
}

export default WelcomeBanner;