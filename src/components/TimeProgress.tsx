import { useState } from 'react';
import { motion } from 'motion/react';

import { Card_Variants, Card_Hover } from '../variants/variants';

import '../styles/TimeProgress.css';

function TimeProgress({ children } : { children : React.ReactNode }) {
    

    return (
        <motion.div 
            className='time-progress'

            variants={Card_Variants}
            whileHover={Card_Hover}
        >
            {children}
        </motion.div>
    )
}

export default TimeProgress;