import { motion } from 'motion/react';

import LiveClock from "../../components/LiveClock";

function Clock() {
    return (
        <>
            <motion.section
                style={{ width: "max-content", margin: "0 auto" }}

                initial={{ scale: 0, y: -50 }} 
                animate={{ scale: 1, y: 0, transition: { delay: 1.4, duration: 0.2 } }}

                whileHover={{ scale: 1.05, y: -20, rotate: 2}}
            >
                <LiveClock />
            </motion.section>
        </>
    )
}

export default Clock;