import { motion } from 'motion/react';

import '../styles/Banner.css';

type BannerType = {
    title: string
}

function Banner(props: BannerType) {
    return (
        <motion.section 
            className='banner'

            initial={{ scale: 0, y: -50 }} 
            whileInView={{ scale: 1, y: 0, transition: { delay: 1.2 } }} 
            viewport={{ once: true }} 
        >
            <h1 className='banner-title'>{props.title}</h1>
        </motion.section>
    )
}

export default Banner;