import { motion } from 'motion/react';

import LiveClock from "../../components/LiveClock";

function Clock() {
    const LiveClock_container_motion = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 1.4
            }
        },
    }

    return (
        <>
            <motion.section
                variants={LiveClock_container_motion}
                initial="hidden"
                whileInView="visible"
            >
                <LiveClock />
            </motion.section>
        </>
    )
}

export default Clock;