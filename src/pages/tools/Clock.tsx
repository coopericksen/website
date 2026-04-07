import { useState, useEffect, useRef } from 'react';

import { motion } from 'motion/react';
import { Container_Variants } from '../../variants/variants';

import LiveClock from "../../components/LiveClock";
import TimeProgress from "../../components/TimeProgress";

function daysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
}

function daysInYear(year: number) {
    return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0 ? 366 : 365;
}

function Clock() {
    const [now, setNow] = useState<Date>(new Date);
    const frame = useRef<number | null>(null);

    useEffect(() => {
        const update = () => {
            setNow(new Date);
            frame.current = requestAnimationFrame(update);
        }

        frame.current = requestAnimationFrame(update);

        return () => cancelAnimationFrame(frame.current!);
        
    });

    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds() + (milliseconds / 1000);
    const minutes = now.getMinutes() + (seconds / 60);
    const hours = now.getHours() + (minutes / 60);
    const days = (now.getDate() - 1) + (hours / 24);

    const secondProgress = milliseconds/1000;
    const minuteProgress = seconds / 60;
    const hourProgress = minutes / 60;
    const dayProgress = hours / 24;
    const monthProgress = days / daysInMonth(now.getFullYear(), now.getMonth() + 1);

    function calcYearProgress(year1: number, year2: number) {
        const startOfYear1 = new Date(year1, 0, 1);
        const startOfYear2 = new Date(year2, 0, 1);
        return (now.getTime() - startOfYear1.getTime()) / (startOfYear2.getTime() - startOfYear1.getTime());
    }

    const yearProgress = calcYearProgress(now.getFullYear(), now.getFullYear() + 1);

    const firstYearOfDecade = now.getFullYear() - now.getFullYear() % 10;
    const decadeProgress = calcYearProgress(firstYearOfDecade, firstYearOfDecade + 10);

    const firstYearOfCentury = now.getFullYear() - now.getFullYear() % 100;
    const centuryProgress = calcYearProgress(firstYearOfCentury, firstYearOfCentury + 100);

    const firstYearOfMillenium = now.getFullYear() - now.getFullYear() % 1000;
    const milleniumProgress = calcYearProgress(firstYearOfMillenium, firstYearOfMillenium + 1000);

    return (
        <>
            <motion.section
                variants={Container_Variants}
                initial="hidden"
                whileInView="visible"
            >
                <LiveClock />
                <div className='clock-container'>
                    <TimeProgress label="Second Progress" value={secondProgress} decimals={0}/>
                    <TimeProgress label="Minute Progress" value={minuteProgress} decimals={2}/>
                    <TimeProgress label="Hour Progress" value={hourProgress} decimals={3}/>
                    <TimeProgress label="Day Progress" value={dayProgress} decimals={4}/>
                    <TimeProgress label="Month Progress" value={monthProgress} decimals={5}/>
                    <TimeProgress label="Year Progress" value={yearProgress} decimals={6}/>
                    <TimeProgress label="Decade Progress" value={decadeProgress} decimals={7}/>
                    <TimeProgress label="Century Progress" value={centuryProgress} decimals={8}/>
                    <TimeProgress label="Millenium Progress" value={milleniumProgress} decimals={9}/>
                </div>
            </motion.section>
        </>
    )
}

export default Clock;