import { motion } from 'motion/react';
import { Container_Variants } from '../variants/variants';

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

    return (
        <>
            <Title>Tools - Cooper Ericksen</Title>

            <Nav />

            <Banner title="Tools" />

            <motion.section 
                className='card-grid'
                
                variants={Container_Variants}
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