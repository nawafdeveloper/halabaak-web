"use client";

import { ArchiveOutlined, ChatOutlined, CheckBoxOutlined, ExpandMoreOutlined, FavoriteBorderOutlined, GroupAddOutlined, LogoutOutlined, MarkChatReadOutlined, NotificationsOffOutlined, PushPinOutlined, StarBorderOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React from 'react'

export default function ChatItemMoreButtonMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="more-button"
                component="span"
                size="medium"
                className="chat-hover-action"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={(theme) => ({
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(8px, -50%)",
                    opacity: 0,
                    transition: "all 100ms ease",
                    pointerEvents: "none",
                    "&:hover": {
                        backgroundColor: "transparent"
                    },
                })}
            >
                <ExpandMoreOutlined
                    sx={(theme) => ({
                        color: theme.palette.mode === "dark" ? "#ffffff" : "#000000"
                    })}
                />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: (theme) => ({
                        backgroundColor: theme.palette.mode === "dark" ? "rgba(2, 5, 5, 1)" : "#ffffff",
                        borderRadius: 3,
                        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                    }),
                }}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                        sx: {
                            padding: 1,
                        },
                    },
                }}
            >
                <MenuItem
                    onClick={handleClose}
                    sx={(theme) => ({
                        "&:hover": {
                            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#eee",
                        },
                        borderRadius: 2,
                        paddingY: 1,
                        paddingX: 1
                    })}
                >
                    <ListItemIcon>
                        <ArchiveOutlined
                            fontSize="medium"
                            sx={(theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261"
                            })}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            sx: (theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                                fontWeight: 500,
                                fontSize: "17px",
                            }),
                        }}
                    >Archive chat</ListItemText>
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    sx={(theme) => ({
                        "&:hover": {
                            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#eee",
                        },
                        borderRadius: 2,
                        paddingY: 1,
                        paddingX: 1
                    })}
                >
                    <ListItemIcon>
                        <NotificationsOffOutlined
                            fontSize="medium"
                            sx={(theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261"
                            })}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            sx: (theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                                fontWeight: 500,
                                fontSize: "17px",
                            }),
                        }}
                    >Mute notifications</ListItemText>
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    sx={(theme) => ({
                        "&:hover": {
                            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#eee",
                        },
                        borderRadius: 2,
                        paddingY: 1,
                        paddingX: 1
                    })}
                >
                    <ListItemIcon>
                        <PushPinOutlined
                            fontSize="medium"
                            sx={(theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261"
                            })}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            sx: (theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                                fontWeight: 500,
                                fontSize: "17px",
                            }),
                        }}
                    >Pin chats</ListItemText>
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    sx={(theme) => ({
                        "&:hover": {
                            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#eee",
                        },
                        borderRadius: 2,
                        paddingY: 1,
                        paddingX: 1
                    })}
                >
                    <ListItemIcon>
                        <MarkChatReadOutlined
                            fontSize="medium"
                            sx={(theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261"
                            })}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            sx: (theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                                fontWeight: 500,
                                fontSize: "17px",
                            }),
                        }}
                    >Mark as read</ListItemText>
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    sx={(theme) => ({
                        "&:hover": {
                            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#eee",
                        },
                        borderRadius: 2,
                        paddingY: 1,
                        paddingX: 1
                    })}
                >
                    <ListItemIcon>
                        <FavoriteBorderOutlined
                            fontSize="medium"
                            sx={(theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261"
                            })}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            sx: (theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                                fontWeight: 500,
                                fontSize: "17px",
                            }),
                        }}
                    >Add to favourites</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem
                    onClick={handleClose}
                    sx={(theme) => ({
                        "&:hover": {
                            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#eee",
                        },
                        borderRadius: 2,
                        paddingY: 1,
                        paddingX: 1
                    })}
                >
                    <ListItemIcon>
                        <LogoutOutlined
                            fontSize="medium"
                            sx={(theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261"
                            })}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            sx: (theme) => ({
                                color: theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                                fontWeight: 500,
                                fontSize: "17px",
                            }),
                        }}
                    >Exit group</ListItemText>
                </MenuItem>
            </Menu>
        </div>
    )
}