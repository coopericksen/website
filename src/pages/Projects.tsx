import { motion } from 'motion/react';
import { Container_Variants } from '../variants/variants';

import Title from '../components/Title';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

import projectsData from '../data/projects';

function ProjectsPage() {
    const projectElements = projectsData.map((project, index) => {
        return (
            <Card
                key={index}
                {...project}
            />
        )
    });

    return (
        <>
            <Title>Projects - Cooper Ericksen</Title>

            <Nav />

            <Banner title="Projects" />

            <motion.section 
                className='card-grid'
                
                variants={Container_Variants}
                initial="hidden"
                whileInView="visible"
            >
                {projectElements}
            </motion.section>

            <Footer />
        </>
    )
}

export default ProjectsPage;