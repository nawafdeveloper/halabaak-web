"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatsSectionLargeSideBar from "./chats-section-large-sidebar";
import mockChats from "@/mocks/chat-items";
import CreateChatSectionLargeSideBar from "./create-chat-section-large-sidebar";

interface Props {
    activeSideBar: 'main-chat' | 'search-chat' | 'create-chat' | 'main-setting' | 'main-profile' | 'main-archive';
    setActiveSideBar: (nav: 'main-chat' | 'search-chat' | 'create-chat' | 'main-setting' | 'main-profile' | 'main-archive') => void;
}

export default function LargeSideBar({ activeSideBar, setActiveSideBar }: Props) {
    const customEasing: [number, number, number, number] = [0.32, 0, 0.67, 0];
    
    return (
        <div className="md:flex hidden flex-col w-full xl:max-w-lg lg:max-w-md sm:max-w-xs max-w-xs h-full bg-white dark:bg-[#161717] relative overflow-hidden">
            <div className="absolute w-full z-0">
                <ChatsSectionLargeSideBar
                    data={mockChats}
                    setActiveSideBar={setActiveSideBar}
                />
            </div>
            <AnimatePresence mode="popLayout">
                {activeSideBar !== 'main-chat' && (
                    <motion.div
                        key={activeSideBar}
                        initial={{ x: '-100%', opacity: 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-100%', opacity: 1 }}
                        transition={{ duration: 0.15, ease: customEasing }}
                        className="relative z-10 flex h-full w-full"
                    >
                        {activeSideBar === 'create-chat' && (
                            <CreateChatSectionLargeSideBar
                                setActiveSideBar={setActiveSideBar}
                            />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
