"use client";

import { CloseOutlined, SearchOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';

interface Props {
    activeTab: "all" | "unread" | "favourites" | "groups";
    setActiveTab: (value: "all" | "unread" | "favourites" | "groups") => void;
}

export default function ChatsSearchHeaderLargeSidebar({activeTab, setActiveTab}: Props) {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        setValue("");
        inputRef.current?.blur();
    };

    const handleSelectActiveTab = (tab: 'all' | 'unread' | 'favourites' | 'groups') => {
        setActiveTab(tab);
    };

    return (
        <div className='flex flex-col gap-y-3'>
            <TextField
                hiddenLabel
                id="filled-search-bar"
                variant="filled"
                size="small"
                placeholder="Search for contact"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                inputRef={inputRef}
                sx={{
                    "& .MuiFilledInput-root": {
                        borderRadius: 8,
                        "&.Mui-focused": {
                            outline: "2px solid #25D366",
                        },
                    }
                }}
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined
                                sx={{
                                    color: (theme) =>
                                        theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </InputAdornment>
                    ),
                    endAdornment: value ? (
                        <InputAdornment position="end">
                            <IconButton onClick={handleClear} size="small">
                                <CloseOutlined
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                                        width: 18,
                                        height: 18,
                                    }}
                                />
                            </IconButton>
                        </InputAdornment>
                    ) : null,
                }}
            />
            <div className='flex flex-row items-center gap-x-3'>
                <Button
                    onClick={() => handleSelectActiveTab('all')}
                    variant="outlined"
                    sx={(theme) => ({
                        borderRadius: 99,
                        borderColor: activeTab === 'all' ? theme.palette.mode === "dark" ? "#139443" : "#25D366" : theme.palette.mode === "dark" ? "#333" : "#e5e5e5",
                        color: activeTab === 'all' ? theme.palette.mode === "dark" ? "#139443" : "#25D366" : theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                        backgroundColor: activeTab === 'all' ? theme.palette.mode === "dark" ? "#103529" : "#D9FDD3" : "transparent",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: activeTab === 'all' ? theme.palette.mode === "dark" ? "#18503E" : "#C1FFB7" : theme.palette.mode === "dark" ? "#333" : "#e5e5e5",
                        },
                    })}
                >
                    All
                </Button>
                <Button
                    onClick={() => handleSelectActiveTab('unread')}
                    variant="outlined"
                    sx={(theme) => ({
                        borderRadius: 99,
                        borderColor: activeTab === 'unread' ? theme.palette.mode === "dark" ? "#139443" : "#25D366" : theme.palette.mode === "dark" ? "#333" : "#e5e5e5",
                        color: activeTab === 'unread' ? theme.palette.mode === "dark" ? "#139443" : "#25D366" : theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                        backgroundColor: activeTab === 'unread' ? theme.palette.mode === "dark" ? "#103529" : "#D9FDD3" : "transparent",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: activeTab === 'unread' ? theme.palette.mode === "dark" ? "#18503E" : "#C1FFB7" : theme.palette.mode === "dark" ? "#333" : "#e5e5e5",
                        },
                    })}
                >
                    Unread
                </Button>
                <Button
                    onClick={() => handleSelectActiveTab('favourites')}
                    variant="outlined"
                    sx={(theme) => ({
                        borderRadius: 99,
                        borderColor: activeTab === 'favourites' ? theme.palette.mode === "dark" ? "#139443" : "#25D366" : theme.palette.mode === "dark" ? "#333" : "#e5e5e5",
                        color: activeTab === 'favourites' ? theme.palette.mode === "dark" ? "#139443" : "#25D366" : theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                        backgroundColor: activeTab === 'favourites' ? theme.palette.mode === "dark" ? "#103529" : "#D9FDD3" : "transparent",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: activeTab === 'favourites' ? theme.palette.mode === "dark" ? "#18503E" : "#C1FFB7" : theme.palette.mode === "dark" ? "#333" : "#e5e5e5",
                        },
                    })}
                >
                    Favourites
                </Button>
                <Button
                    onClick={() => handleSelectActiveTab('groups')}
                    variant="outlined"
                    sx={(theme) => ({
                        borderRadius: 99,
                        borderColor: activeTab === 'groups' ? theme.palette.mode === "dark" ? "#139443" : "#25D366" : theme.palette.mode === "dark" ? "#333" : "#e5e5e5",
                        color: activeTab === 'groups' ? theme.palette.mode === "dark" ? "#139443" : "#25D366" : theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                        backgroundColor: activeTab === 'groups' ? theme.palette.mode === "dark" ? "#103529" : "#D9FDD3" : "transparent",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: activeTab === 'groups' ? theme.palette.mode === "dark" ? "#18503E" : "#C1FFB7" : theme.palette.mode === "dark" ? "#333" : "#e5e5e5",
                        },
                    })}
                >
                    Groups
                </Button>
            </div>
        </div>
    )
}