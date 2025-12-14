"use client";

import ChatsHeaderLargeSideBar from './chats-header-large-sidebar';
import ChatsSideBarContent from './chats-sidebar-content';
import ChatsSearchHeaderLargeSidebar from './chats-search-header-large-sidebar';
import { useState } from 'react';
import NotificationServicesPermissionAlert from './notification-services-permission-alert';
import Fab from '@mui/material/Fab';
import { Add } from '@mui/icons-material';
import { ChatItemType } from '@/mocks/fake-types';

interface Props {
    data: ChatItemType[];
}

export default function ChatsSectionLargeSideBar({ data }: Props) {
    const [activeTab, setActiveTab] = useState<'all' | 'unread' | 'favourites' | 'groups'>('all');

    return (
        <div className='flex flex-col space-y-4 h-screen max-h-screen min-h-screen w-full'>
            <div className='px-5 pt-5 flex flex-col space-y-4'>
                <ChatsHeaderLargeSideBar />
                <ChatsSearchHeaderLargeSidebar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <NotificationServicesPermissionAlert />
            </div>
            <ChatsSideBarContent
                activeTab={activeTab}
                data={data}
            />
            <div className='absolute bottom-6 left-6 right-6 z-50 flex md:hidden justify-end'>
                <Fab color="success" sx={{ backgroundColor: "#25D366" }} aria-label="add">
                    <Add />
                </Fab>
            </div>
        </div>
    )
}