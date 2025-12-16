"use client";

import Box from "@mui/material/Box";
import React from "react";
import ChatRoomInputForm from "./chat-room-input-form";

export default function ChatRoomContent() {
    return (
        <Box
            sx={(theme) => ({
                height: "100%",
                width: "100%",
                px: 2,
                position: "relative",
                display: "flex",
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
            <ChatRoomInputForm />
        </Box>
    );
}
