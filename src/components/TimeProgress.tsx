import { motion } from 'motion/react';

import { Card_Variants, Card_Hover } from '../variants/variants';

import '../styles/TimeProgress.css';

interface TimeProgressProps {
    label: string;
    value: number;
    decimals: number;
}

function TimeProgress(props: TimeProgressProps) {
    

    return (
        <motion.div 
            className='time-progress'

            variants={Card_Variants}
            whileHover={Card_Hover}
        >
            <h3>{props.label}</h3>
            <h4>{(props.value * 100).toFixed(props.decimals)}%</h4>
            <progress value={props.value}></progress>
            

        </motion.div>
    )
}

export default TimeProgress;