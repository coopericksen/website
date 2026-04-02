import { motion } from 'motion/react';

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
            <Nav />

            <Banner title="Projects" />

            <motion.section 
                className='card-grid'
                
                variants={card_container_motion}
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