'use client';

import { useEffect, useState } from 'react';
import GlobalLoading from './global-loading';
import { motion } from "framer-motion";
import { MuiSystemThemeProvider } from '@/context/theme';
import SmallSideBar from './small-sidebar';
import LargeSideBar from './large-sidebar';

export default function MainClientUIAppWrapper({ children }: { children: React.ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeNav, setActiveNav] = useState<'chats' | 'settings' | 'profile' | 'archive'>('chats');
    const [activeSideBar, setActiveSideBar] = useState<'main-chat' | 'search-chat' | 'create-chat' | 'main-setting' | 'main-profile' | 'main-archive'>('main-chat');
    const [activeContentPage, setActiveContentPage] = useState<'empty-state' | 'messages-state'>('empty-state');

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
                <main className="flex flex-row items-start h-screen overflow-y-hidden">
                    <SmallSideBar
                        activeNav={activeNav}
                        setActiveNav={setActiveNav}
                        setActiveSideBar={setActiveSideBar}
                    />
                    <LargeSideBar
                        activeSideBar={activeSideBar}
                        setActiveSideBar={setActiveSideBar}
                    />
                    <div className="flex flex-1 w-full md:max-w-5xl md:mx-auto">
                        {children}
                    </div>
                </main>
            </MuiSystemThemeProvider>
        </motion.div>
    );
}
