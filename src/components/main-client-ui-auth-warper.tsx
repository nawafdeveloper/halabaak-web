'use client';

import { useEffect, useState } from 'react';
import GlobalLoading from './global-loading';
import { motion } from "framer-motion";
import { MuiSystemThemeProvider } from '@/context/theme';
import AuthFlowSection from './auth-flow-section';

export default function MainClientUIAuthWrapper({ country }: { country: string | null }) {
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
            <MuiSystemThemeProvider>
                <main className="w-full h-screen overflow-hidden">
                    <AuthFlowSection country={country} />
                </main>
            </MuiSystemThemeProvider>
        </motion.div>
    );
}
