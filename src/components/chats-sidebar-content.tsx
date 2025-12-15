"use client";

import List from "@mui/material/List";
import ChatItem from "./chat-item";
import { TransitionGroup } from 'react-transition-group';
import Collapse from "@mui/material/Collapse";
import { ChatItemType } from "@/types/chats.type";

type Props = {
    activeChatTab: "all" | "unread" | "favourites" | "groups";
    data: ChatItemType[];
}

export default function ChatsSideBarContent({ activeChatTab, data }: Props) {
    return (
        <List sx={{ bgcolor: 'transparent', overflowY: "scroll", height: "100%", paddingBottom: '24px', paddingX: '20px' }}>
            <TransitionGroup>
                {data ? data.map((item) => (
                    <Collapse key={item.chat_id}>
                        <ChatItem
                            key={item.chat_id}
                            chat_item={item}
                        />
                    </Collapse>
                )) : null}
            </TransitionGroup>
        </List>
    )
}