import { motion } from 'motion/react';

function Message({ children }: { children: React.ReactNode }) {
    return(
        <motion.h4
            style={{ textAlign: "center" }}

            initial={{ scale: 0, y: -50 }} 
            whileInView={{ scale: 1, y: 0, transition: { delay: 1.4 } }} 
            viewport={{ once: true }} 
        >
            {children}
        </motion.h4>
    )
}

export default Message;