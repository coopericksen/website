import { motion } from 'motion/react';
import { Nav_Variants, Nav_Link_Variants, Nav_Link_Hover } from '../variants/variants';

import '../styles/Nav.css';

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

function Nav() {

    return (
        <motion.nav 
            variants={Nav_Variants} 
            initial="hidden" 
            animate="visible"
        >
            {nav_links.map((element, index) => {
                return(
                    <motion.a 
                        className='nav-link'
                        href={element.href}
                        id={element.text === "Home" ? "nav-home-link" : undefined}
                        
                        key={index}
                        variants={Nav_Link_Variants}
                        whileHover={Nav_Link_Hover}
                    >
                        {element.text}
                        {element.logo ? <img id="nav-logo" src='/logo.png' alt="coopericksen's logo" /> : null}
                        
                    </motion.a>
                )
            })}
        </motion.nav>
    )
}

export default Nav;