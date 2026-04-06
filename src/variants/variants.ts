export const Nav_Variants = {
    hidden: { y: -50 },
    visible: { 
        y: 0,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2
        }
    },
}

export const Nav_Link_Variants = {
    hidden: {
        scale: 0,
        y: -50
    },
    visible: {
        scale: 1,
        y: 0
    }
}

export const Nav_Link_Hover = {
    scale: 1.2, 
    y: -5
}

export const Container_Variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 1.4
        }
    },
}

export const Card_Variants = {
    hidden: {
        scale: 0,
        y: -50
    },
    visible: {
        scale: 1,
        y: 0
    }
}

export const Card_Hover = {
    scale: 1.05,
    y: -20,
    rotate: 2
}