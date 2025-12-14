"use client";

import { usePathname } from "next/navigation";
import ChatsSectionLargeSideBar from "./chats-section-large-sidebar";

export default function LargeSideBar() {
    const pathname = usePathname();

    const isChats = pathname.includes('chats');
    const isSettings = pathname.includes('settings');
    const isProfile = pathname.includes('profile');

    return (
        <div className='md:flex hidden flex-col border-r dark:border-neutral-700 border-neutral-300 w-full xxl:max-w-lg md:max-w-md h-full bg-white dark:bg-[#161717]'>
            {isChats && (
                <ChatsSectionLargeSideBar />
            )}
        </div>
    )
}