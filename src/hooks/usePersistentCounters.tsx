import { useEffect, useState } from "react";

export interface CounterData {
    label: string;
    date: string;
    time: string;
}

export function usePersistentCounters() {
    const [counters, setCounters] = useState<CounterData[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("timeCounters")
        if (stored) {
            setCounters(JSON.parse(stored));
        } else {
            setCounters([
                { label: "First Git Commit", date: "2025-07-09", time: "08:18" },
                { label: "2026 HS Graduation", date: "2026-06-05", time: "17:00" },
                { label: "Birthday", date: "2008-02-13", time: "05:00" },
                { label: "Next Birthday", date: "2027-02-13", time: "05:00" },
            ]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("timeCounters", JSON.stringify(counters));
    }, [counters])

    return [counters, setCounters] as const;
}