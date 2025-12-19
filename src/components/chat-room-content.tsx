"use client";

import Box from "@mui/material/Box";
import React, { useState } from "react";
import ChatRoomInputForm from "./chat-room-input-form";
import ChatRoomMessageBubble from "./chat-room-message-bubble";
import List from "@mui/material/List";
import { messages } from "@/mocks/messages";
import ContextMenu from "@/context/menu";
import { CheckBoxOutlined, DeleteForeverOutlined, DoDisturbOnOutlined, DoNotDisturbOutlined, HighlightOffOutlined, InfoOutlined, NotificationsOffOutlined, ThumbDownOutlined } from "@mui/icons-material";

export default function ChatRoomContent() {
    const [isSelectMode, setIsSelectMode]= useState(false);

    return (
        <Box
            sx={(theme) => ({
                height: "100%",
                width: "100%",
                position: "relative",
                display: "flex",
                overflow: 'hidden',
                backgroundImage:
                    theme.palette.mode === "dark"
                        ? "url('/chat-background-dark.svg')"
                        : "url('/chat-background-light.svg')",
                backgroundRepeat: "repeat",
                backgroundSize: "110px",
                backgroundColor:
                    theme.palette.mode === "dark" ? "#161717" : "#f5f5f5",
            })}
        >
            <List
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    paddingBottom: 8,
                }}
            >
                {messages.map((item, index) => (
                    <ChatRoomMessageBubble
                        value={index}
                        key={index}
                        message={item}
                        isSelectMode={isSelectMode}
                    />
                ))}
            </List>
            <ChatRoomInputForm />
            <ContextMenu
                items={[
                    { label: "Contact Info", onClick: () => { }, icon: <InfoOutlined fontSize="medium" /> },
                    { label: "Select messages", onClick: () => setIsSelectMode(true), icon: <CheckBoxOutlined fontSize="medium" /> },
                    { label: "Mute notifications", onClick: () => { }, icon: <NotificationsOffOutlined fontSize="medium" /> },
                    { label: "Close chat", onClick: () => { }, icon: <HighlightOffOutlined fontSize="medium" /> },
                    { label: "Report", onClick: () => { }, icon: <ThumbDownOutlined fontSize="medium" /> },
                    { label: "Block", onClick: () => { }, icon: <DoNotDisturbOutlined fontSize="medium" /> },
                    { label: "Clear chat", onClick: () => { }, icon: <DoDisturbOnOutlined fontSize="medium" /> },
                    { label: "Delete chat", onClick: () => { }, icon: <DeleteForeverOutlined fontSize="medium" /> },
                ]}
            />
        </Box>
    );
}
