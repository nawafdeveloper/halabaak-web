"use client";

import { AddOutlined, MicNoneOutlined } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField'
import React, { useRef, useState } from 'react'
import ChatRoomInputAttachButton from './chat-room-input-attach-button';
import ChatRoomInputEmojiButton from './chat-room-input-emoji-button';

export default function ChatRoomInputForm() {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className='absolute bottom-2 left-2 right-2 z-10'>
            <TextField
                hiddenLabel
                id="filled-chat-input-bar"
                variant="filled"
                size="small"
                placeholder="Type a message"
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value)}
                inputRef={inputRef}
                sx={(theme) => ({
                    "& .MuiFilledInput-root": {
                        borderRadius: 8,
                        boxShadow: "0px 2px 2px rgba(0,0,0,0.08)",
                        paddingY: "5px",
                        paddingX: "5px",
                        backgroundColor:
                            theme.palette.mode === "dark" ? "#242626" : "#ffffff",
                        "&.Mui-focused": {
                            outline: "none",
                            backgroundColor:
                                theme.palette.mode === "dark" ? "#242626" : "#ffffff",
                        },
                        "&:hover": {
                            backgroundColor:
                                theme.palette.mode === "dark" ? "#242626" : "#ffffff",
                        },
                        "&::before": { display: "none" },
                        "&::after": { display: "none" },
                    }
                })}
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment
                            position="start"
                        >
                            <ChatRoomInputAttachButton />
                            <ChatRoomInputEmojiButton />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton size="medium">
                                <MicNoneOutlined />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}