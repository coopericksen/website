import { motion } from 'motion/react';
import { Container_Variants } from '../../variants/variants';

import LiveClock from "../../components/LiveClock";
import TimeProgress from "../../components/TimeProgress";

function Clock() {

    return (
        <>
            <motion.section
                className='clock-grid'

                variants={Container_Variants}
                initial="hidden"
                whileInView="visible"
            >
                <LiveClock />
                <TimeProgress><h3>Hello World!</h3></TimeProgress>
                <TimeProgress><h3>Seconds!</h3></TimeProgress>
                <TimeProgress><h3>Minutes!</h3></TimeProgress>
                <TimeProgress><h3>Hours!</h3></TimeProgress>
                <TimeProgress><h3>Days!</h3></TimeProgress>
                <TimeProgress><h3>Months!</h3></TimeProgress>
                <TimeProgress><h3>Years!</h3></TimeProgress>
            </motion.section>
        </>
    )
}

export default Clock;