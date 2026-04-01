import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

import '../styles/LiveClock.css';

function LiveClock() {
    const [time, setTime] = useState(Date.now());
    const frameRef = useRef<number>(null);

    useEffect(() => {
        const update = () => {
            setTime(Date.now());
            frameRef.current = requestAnimationFrame(update);
        };

        frameRef.current = requestAnimationFrame(update);

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    });

    function getMilliseconds() {
        const milliseconds = new Date(time).getMilliseconds();
        let corrected = "";
        if (milliseconds < 100) {
            corrected += "0";

            if (milliseconds < 10) {
                corrected += "0";
            }
        }

        return corrected + String(milliseconds);
    }
    
    const timeOutput = new Date(time).toLocaleTimeString('en-US', { hour12: false }) + ":" + getMilliseconds();
    const dateOutput = new Date(time).toDateString();

    const LiveClock_motion = {
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
        <motion.div 
            className="live-clock"

            variants={LiveClock_motion}
            whileHover={{ scale: 1.05, y: -20, rotate: 2}}
        >
            <h3>Current Time:</h3>
            <h4>{timeOutput} - {dateOutput}</h4>
        </motion.div>
    )
}

export default LiveClock;