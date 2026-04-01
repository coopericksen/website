import { motion } from 'motion/react';

import Nav from '../components/Nav';
import WelcomeBanner from '../components/WelcomeBanner';
import LiveClock from '../components/LiveClock';
import Footer from '../components/Footer';

function IndexPage() {
    const LiveClock_container_motion = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 1.4
            }
        },
    }

    return (
        <>
            <Nav />
            <WelcomeBanner />

            <motion.section
                variants={LiveClock_container_motion}
                initial="hidden"
                whileInView="visible"
            >
                <a href="/tools/clock" style={{ textDecoration: "none" }}>
                    <LiveClock />
                </a>
            </motion.section>

            <Footer />
        </>
    )
}

export default IndexPage;