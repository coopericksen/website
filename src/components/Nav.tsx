import { motion } from 'motion/react';

import '../styles/Nav.css';

function Nav() {

    const nav_motion = {
        hidden: { y: -50 },
        visible: { 
            y: 0,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        },
    };

    const nav_link_motion = {
        hidden: {
            scale: 0,
            y: -50
        },
        visible: {
            scale: 1,
            y: 0
        }
    }

    const nav_links = [
        {
            text: '',
            href: '/',
            logo: true
        },
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Tools',
            href: '/tools'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'About',
            href: '/about'
        },
    ]

    return (
        <motion.nav 
            variants={nav_motion} 
            initial="hidden" 
            animate="visible"
        >
            {nav_links.map((element, index) => {
                return(
                    <motion.a 
                        className='nav-link'
                        href={element.href}
                        
                        key={index}
                        variants={nav_link_motion}
                        whileHover={{ scale: 1.2, y: -5 }}
                    >
                        {element.text}
                        {element.logo ? <img id="nav-logo" src='./logo.png' alt="coopericksen's logo" /> : null}
                        
                    </motion.a>
                )
            })}
        </motion.nav>
    )
}

export default Nav;