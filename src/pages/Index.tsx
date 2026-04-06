import { motion } from 'motion/react';
import { Container_Variants } from '../variants/variants';

import Title from '../components/Title';
import Nav from '../components/Nav';
import WelcomeBanner from '../components/WelcomeBanner';
import LiveClock from '../components/LiveClock';
import Footer from '../components/Footer';

function IndexPage() {

    return (
        <>
            <Title>Home - Cooper Ericksen</Title>

            <Nav />
            <WelcomeBanner />

            <motion.section
                variants={Container_Variants}
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