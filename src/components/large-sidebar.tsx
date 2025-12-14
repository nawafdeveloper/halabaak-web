"use client";

import { usePathname } from "next/navigation";
import ChatsSectionLargeSideBar from "./chats-section-large-sidebar";
import { ChatItemType } from "@/mocks/fake-types";

interface Props {
    data: ChatItemType[];
}

export default function LargeSideBar({ data }: Props) {
    const pathname = usePathname();

    const isChats = pathname.includes('chats');
    const isSettings = pathname.includes('settings');
    const isProfile = pathname.includes('profile');

    return (
        <div className='md:flex hidden flex-col border-r dark:border-neutral-700 border-neutral-300 w-full xl:max-w-lg md:max-w-sm h-full bg-white dark:bg-[#161717]'>
            {isChats && (
                <ChatsSectionLargeSideBar data={data}/>
            )}
        </div>
    )
}