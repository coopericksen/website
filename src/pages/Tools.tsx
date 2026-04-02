import { motion } from 'motion/react';

import Title from '../components/Title';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

import toolsData from '../data/tools';

function ToolsPage() {
    const toolElements = toolsData.map((tool, index) => {
        return (
            <Card
                key={index}
                {...tool}
            />
        )
    });

    const card_container_motion = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 1.4
            }
        },
    };

    return (
        <>
            <Title>Tools - Cooper Ericksen</Title>

            <Nav />

            <Banner title="Tools" />

            <motion.section 
                className='card-grid'
                
                variants={card_container_motion}
                initial="hidden"
                whileInView="visible"
            >
                {toolElements}
            </motion.section>

            <Footer />
        </>
    )
}

export default ToolsPage;