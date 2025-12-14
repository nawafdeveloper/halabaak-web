"use client";

import mockChatsItems from "@/mocks/chat-items";
import List from "@mui/material/List";
import ChatItem from "./chat-item";
import { TransitionGroup } from 'react-transition-group';
import Collapse from "@mui/material/Collapse";
import { ChatItemType } from "@/mocks/fake-types";

type Props = {
    activeTab: "all" | "unread" | "favourites" | "groups";
    data: ChatItemType[];
}

export default function ChatsSideBarContent({ activeTab, data }: Props) {
    return (
        <List sx={{ bgcolor: 'transparent', overflowY: "scroll", height: "100%", paddingBottom: '24px', paddingX: '20px' }}>
            <TransitionGroup>
                {data ? data.map((item) => (
                    <Collapse key={item.chat_id}>
                        <ChatItem
                            key={item.chat_id}
                            chat_id={item.chat_id}
                            chat_type={item.chat_type}
                            avatar={item.avatar}
                            last_message_context={item.last_message_context}
                            last_message_media={item.last_message_media}
                            last_message_sender_is_me={item.last_message_sender_is_me}
                            last_message_sender_nickname={item.last_message_sender_nickname}
                            is_unreaded_chat={item.is_unreaded_chat}
                            unreaded_messages_length={item.unreaded_messages_length}
                            is_archived_chat={item.is_archived_chat}
                            is_muted_chat_notifications={item.is_muted_chat_notifications}
                            is_pinned_chat={item.is_pinned_chat}
                            is_favourite_chat={item.is_favourite_chat}
                            is_blocked_chat={item.is_blocked_chat}
                        />
                    </Collapse>
                )) : null}
            </TransitionGroup>
        </List>
    )
}