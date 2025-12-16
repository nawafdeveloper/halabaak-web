"use client";

import React from 'react'
import ChatRoomHeader from './chat-room-header'
import ChatRoomContent from './chat-room-content'

export default function ChatRoomSection() {
    return (
        <div className='flex flex-col h-full w-full overflow-hidden'>
            <ChatRoomHeader />
            <ChatRoomContent />
        </div>
    )
}