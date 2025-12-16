"use client"

import ChatRoomSection from "@/components/chat-room-section";
import ChatsSectionLargeSideBar from "@/components/chats-section-large-sidebar";
import EmptyStartChating from "@/components/empty-start-chating";
import mockChats from "@/mocks/chat-items";
import React, { useState } from "react";

export default function AppPage() {
  const [activeSideBar, setActiveSideBar] = useState<'main-chat' | 'search-chat' | 'create-chat' | 'main-setting' | 'main-profile' | 'main-archive'>('main-chat');
  return (
    <div className="w-full h-screen max-h-screen min-h-screen">
      <div className="flex md:hidden">
        <ChatsSectionLargeSideBar data={mockChats} setActiveSideBar={setActiveSideBar} />
      </div>
      <div className="hidden md:flex w-full h-full">
        {/* <EmptyStartChating /> */}
        <ChatRoomSection />
      </div>
    </div>
  );
}