import { motion } from 'motion/react';
import { Card_Variants, Card_Hover } from '../variants/variants';

import { type Project } from "../types/types";

import '../styles/Card.css';

function Card(props: Project) {

    return (
        <motion.a 
            className="card" 
            href={props.href}

            variants={Card_Variants}
            whileHover={Card_Hover}
        >
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </motion.a>
    )
}

export default Card;