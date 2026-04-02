import { motion } from "motion/react";

import Title from '../components/Title';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function NotFound() {
    return (
        <>
            <Title>About - Cooper Ericksen</Title>

            <Nav />

            <Banner title="404" />
            <motion.h4
                style={{ textAlign: "center" }}

                initial={{ scale: 0, y: -50 }} 
                whileInView={{ scale: 1, y: 0, transition: { delay: 1.4 } }} 
                viewport={{ once: true }} 
            >
                Huh? Can't find that anywhere :\
            </motion.h4>

            <Footer />
        </>
    )
}

export default NotFound;