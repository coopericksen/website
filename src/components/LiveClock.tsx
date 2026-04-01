import { useState, useRef, useEffect } from "react";

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

    return (
        <div className="live-clock">
            <h4>{new Date(time).toLocaleTimeString('en-US', { hour12: false }) + ":" + new Date(time).getMilliseconds()}</h4>
        </div>
    )
}

export default LiveClock;