import { motion } from 'motion/react';
import { Container_Variants } from '../../variants/variants';

import LiveClock from '../../components/LiveClock';
import TimeCounterComponent from '../../components/TimeCounterComponent';
import { usePersistentCounters } from "../../hooks/usePersistentCounters";

function TimeCounter() {
    const [counters, setCounters] = usePersistentCounters();

    return (
        <>
            <motion.section
                variants={Container_Variants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <LiveClock />

                <button
                    className='time-counter-new'
                    onClick={() => 
                        setCounters([
                            ...counters,
                            {
                                label: "Click To Rename",
                                date: new Date().toISOString().slice(0, 10),
                                time: "00:00"
                            }
                        ])
                    }
                >
                    New Counter
                </button>

                <div className='time-counter-container'>
                    {counters.map((c, i) => (
                        <TimeCounterComponent
                            key={i}
                            initialLabel={c.label}
                            initialDate={c.date}
                            initialTime={c.time}
                            onChange={(newData) =>
                                setCounters(counters.map((x, idx) => (idx === i ? newData : x)))
                            }
                            onDelete={() => 
                                setCounters(counters.filter((_, idx) => idx !== i))
                            }
                        />
                    ))}
                </div>
            </motion.section>
        </>
    )
}

export default TimeCounter;