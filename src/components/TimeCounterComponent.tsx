import { useState, useEffect } from "react";
import { motion } from 'motion/react';
import { Card_Variants, Card_Hover } from '../variants/variants';
import { CounterData } from '../hooks/usePersistentCounters';

import '../styles/TimeCounterComponent.css';

function useNow(interval = 100) {
    const [now, setNow] = useState(new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), interval);
        return () => clearInterval(id);
    }, [interval]);
    return now;
}

interface TimeCounterComponentProps {
    initialLabel?: string;
    initialDate?: string;
    initialTime?: string;
    onChange: (data: CounterData) => void;
    onDelete: () => void;
}

function TimeCounterComponent({
    initialLabel = "Click To Rename",
    initialDate,
    initialTime,
    onChange,
    onDelete
}: TimeCounterComponentProps) {
    const now = useNow(100);

    const [label, setLabel] = useState(initialLabel);
    const [date, setDate] = useState(initialDate ?? new Date().toISOString().slice(0, 10));
    const [time, setTime] = useState(initialTime ?? "00:00");

    const target = new Date(`${date}T${time}`);
    const past = now > target;

    const diffMs = Math.abs(target.getTime() - now.getTime());
    const diffSec = Math.floor(diffMs / 1000);

    const seconds = diffSec % 60;
    const minutes = Math.floor(diffSec / 60) % 60;
    const hours = Math.floor(diffSec / 3600) % 24;
    const days = Math.floor(diffSec / 86400);

    return (
        <motion.div 
            className="time-counter-component"
            variants={Card_Variants}
            whileHover={Card_Hover}
        >
            <button className="time-counter-delete" onClick={onDelete}>
                X
            </button>

            <h3 
                contentEditable
                suppressContentEditableWarning 
                onBlur={(e) => {
                    setLabel(e.currentTarget.textContent || "");
                    onChange({ label: e.currentTarget.textContent || "", date, time })
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        e.currentTarget.blur();
                    }
                }}
            >
                {label}
            </h3>

            <div className="time-counter-input">
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => {
                        setDate(e.target.value)
                        onChange({ label, date: e.target.value, time })
                    }}
                />
                <input 
                    type="time" 
                    value={time} 
                    onChange={(e) => {
                        setTime(e.target.value)
                        onChange({ label, date, time: e.target.value })
                    }}
                />
            </div>

            <p className="time-counter-diff">
                {past ? "Time Since": "Time Until"}: {days}d {hours}h {minutes}m {seconds}s
            </p>
        </motion.div>
    )
}

export default TimeCounterComponent;