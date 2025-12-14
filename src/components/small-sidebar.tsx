"use client";

import IconButton from "@mui/material/IconButton";
import { usePathname, useRouter } from "next/navigation";
import Tooltip from '@mui/material/Tooltip';
import { ChatOutlined, Chat, SettingsOutlined, Settings, Person, PersonOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import mockChats from "@/mocks/chat-items";

export default function SmallSideBar() {
    const pathname = usePathname();
    const router = useRouter();

    const isChats = pathname.includes('chats');
    const isSettings = pathname.includes('settings');
    const isProfile = pathname.includes('profile');

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    const totalUnread = mockChats
        .map((item) => item.unreaded_messages_length)
        .reduce((acc, curr) => acc + curr, 0);

    return (
        <div className='flex flex-col items-start justify-between h-screen overflow-y-hidden p-3 dark:bg-[#1d1f1f] bg-[#f7f5f3] border-r dark:border-neutral-700 border-neutral-300'>
            <div className="flex flex-col gap-y-3">
                <Tooltip
                    title="Chats"
                    placement="right"
                    slotProps={{
                        tooltip: {
                            sx: (theme) => ({
                                backgroundColor:
                                    theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                                color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
                            }),
                        },
                    }}
                >
                    <IconButton
                        onClick={() => handleNavigation('chats')}
                        sx={(theme) => ({
                            backgroundColor: isChats ? theme.palette.mode === "dark" ? "#333333" : "#EAE9E7" : "transparent",
                            "&:hover": {
                                backgroundColor:
                                    theme.palette.mode === "dark"
                                        ? "#333333"
                                        : "#e5e5e5",
                            },
                        })}
                    >
                        <Badge
                            badgeContent={totalUnread}
                            color="success"
                            sx={(theme) => ({
                                '& .MuiBadge-badge': {
                                    backgroundColor: '#25D366',
                                    color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
                                },
                            })}
                        >
                            {isChats ? (
                                <Chat sx={(theme) => ({ color: theme.palette.mode === "dark" ? "#ffffff" : "#000000" })} />
                            ) : (
                                <ChatOutlined
                                    sx={(theme) => ({
                                        color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261"
                                    })}
                                />
                            )}
                        </Badge>
                    </IconButton>
                </Tooltip>
                <Divider />
            </div>
            <div className="flex flex-col gap-y-3">
                <Tooltip
                    title="Settings"
                    placement="right"
                    slotProps={{
                        tooltip: {
                            sx: (theme) => ({
                                backgroundColor:
                                    theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                                color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
                            }),
                        },
                    }}
                >
                    <IconButton
                        onClick={() => handleNavigation('settings')}
                        sx={(theme) => ({
                            backgroundColor: isSettings ? theme.palette.mode === "dark" ? "#333333" : "#EAE9E7" : "transparent",
                            "&:hover": {
                                backgroundColor:
                                    theme.palette.mode === "dark"
                                        ? "#333333"
                                        : "#e5e5e5",
                            },
                        })}
                    >
                        {isSettings ? (
                            <Settings sx={(theme) => ({ color: theme.palette.mode === "dark" ? "#ffffff" : "#000000" })} />
                        ) : (
                            <SettingsOutlined
                                sx={(theme) => ({
                                    color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261"
                                })}
                            />
                        )}
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title="Profile"
                    placement="right"
                    slotProps={{
                        tooltip: {
                            sx: (theme) => ({
                                backgroundColor:
                                    theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                                color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
                            }),
                        },
                    }}
                >
                    <IconButton
                        onClick={() => handleNavigation('profile')}
                        sx={(theme) => ({
                            backgroundColor: isProfile ? theme.palette.mode === "dark" ? "#333333" : "#EAE9E7" : "transparent",
                            "&:hover": {
                                backgroundColor:
                                    theme.palette.mode === "dark"
                                        ? "#333333"
                                        : "#e5e5e5",
                            },
                        })}
                    >
                        {isProfile ? (
                            <Person sx={(theme) => ({ color: theme.palette.mode === "dark" ? "#ffffff" : "#000000" })} />
                        ) : (
                            <PersonOutlined
                                sx={(theme) => ({
                                    color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261"
                                })}
                            />
                        )}
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}