import { motion } from 'motion/react';

import { type Project } from "../types/types";

import '../styles/Card.css';

function Card(props: Project) {

    const card_motion = {
        hidden: {
            scale: 0,
            y: -50
        },
        visible: {
            scale: 1,
            y: 0
        }
    }

    return (
        <motion.a 
            className="card" 
            href={props.href}

            variants={card_motion}
            whileHover={{ scale: 1.05, y: -20, rotate: 2 }}
        >
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </motion.a>
    )
}

export default Card;