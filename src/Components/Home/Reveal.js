import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width: "100%";
}

const Reveal = ({ children, width = "fit-content" }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControl = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControl.start("visible");
        }
    }, [isInView, mainControl]);

    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 80 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.9, delay: 0.35 }}
                style={{ width,ease:"easeIn",position:"relative", bottom:7}}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
