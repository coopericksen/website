import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

import { Card_Variants, Card_Hover } from '../variants/variants';

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


    return (
        <motion.div 
            className="live-clock"

            variants={Card_Variants}
            whileHover={Card_Hover}
        >
            <h3 className="live-clock-label">Current Time:</h3>

            <div className="live-clock-div">
                <h4 className="live-clock-date">{dateOutput},</h4>
                <h4 className="live-clock-time">{timeOutput}</h4>
            </div>
        </motion.div>
    )
}

export default LiveClock;