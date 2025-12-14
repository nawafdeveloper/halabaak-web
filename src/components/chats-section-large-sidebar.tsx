"use client";

import ChatsHeaderLargeSideBar from './chats-header-large-sidebar';
import ChatsSideBarContent from './chats-sidebar-content';
import ChatsSearchHeaderLargeSidebar from './chats-search-header-large-sidebar';
import { useState } from 'react';
import NotificationServicesPermissionAlert from './notification-services-permission-alert';

export default function ChatsSectionLargeSideBar() {
    const [activeTab, setActiveTab] = useState<'all' | 'unread' | 'favourites' | 'groups'>('all');

    return (
        <div className='flex flex-col space-y-4 h-screen'>
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
            />
        </div>
    )
}