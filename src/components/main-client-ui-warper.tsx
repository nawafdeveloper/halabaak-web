'use client';

import { useEffect, useState } from 'react';
import GlobalLoading from './global-loading';
import { motion } from "framer-motion";

export default function MainClientUIWrapper({ children }: { children: React.ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            setTimeout(() => setIsLoaded(true), 1000);
        });
        return () => cancelAnimationFrame(raf);
    }, []);

    if (!isLoaded) return <GlobalLoading />;

    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                duration: 0.35,
                ease: "easeOut",
            }}
            style={{ height: "100%" }}
        >
            {children}
        </motion.div>
    );
}
