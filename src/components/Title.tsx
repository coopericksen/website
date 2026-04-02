import { useEffect } from "react";

function Title({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const title = Array.isArray(children) ? children.join("") : String(children);

        document.title = title;
    }, [children]);

    return null;
}

export default Title;