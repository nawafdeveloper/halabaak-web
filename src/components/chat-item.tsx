import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React from 'react'
import { AttachFileOutlined, DoneAll, ExpandMoreOutlined, Group, ImageOutlined, KeyboardVoiceOutlined, Person, SlowMotionVideoOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ChatItemMoreButtonMenu from './chat-item-more-button-menu';

type Props = {
    chat_id: string;
    chat_type: 'single' | 'group';
    avatar: string;
    last_message_context: string;
    last_message_media: string | null;
    last_message_sender_is_me: boolean;
    last_message_sender_nickname: string;
    is_unreaded_chat: boolean;
    unreaded_messages_length: number;
    is_archived_chat: boolean;
    is_muted_chat_notifications: boolean;
    is_pinned_chat: boolean;
    is_favourite_chat: boolean;
    is_blocked_chat: boolean;
}

export default function ChatItem({
    chat_id,
    chat_type,
    avatar,
    last_message_context,
    last_message_media,
    last_message_sender_is_me,
    last_message_sender_nickname,
    is_unreaded_chat,
    unreaded_messages_length,
    is_archived_chat,
    is_muted_chat_notifications,
    is_pinned_chat,
    is_favourite_chat,
    is_blocked_chat,
}: Props) {
    return (
        <Button
            variant="contained"
            sx={(theme) => ({
                width: "100%",
                borderRadius: 3,
                padding: 0,
                marginY: '2px',
                backgroundColor: "transparent",
                boxShadow: "0px 4px 20px rgba(0,0,0,0)",
                textTransform: "inherit",
                color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",

                "&:hover": {
                    boxShadow: "0px 4px 20px rgba(0,0,0,0)",
                    backgroundColor: theme.palette.mode === "dark" ? "#333" : "#eee",
                    "& .chat-badge": {
                        transform: "translate(-28px, -50%)",
                        opacity: 1,
                    },
                    "& .chat-hover-action": {
                        transform: "translate(-50%, -50%)",
                        opacity: 1,
                        pointerEvents: "auto",
                    },
                    "& .MuiListItemText-secondary": {
                        maxWidth: "calc(100% - 30px)",
                    },
                },
                "& .MuiListItemText-secondary": {
                    maxWidth: "100%",
                },
            })}
        >
            <ListItem
                sx={{
                    paddingY: 1,
                    paddingX: 2,
                }}
                secondaryAction={
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                        }}
                    >
                        <span
                            className={`text-[13px] font-light ${is_unreaded_chat
                                ? "text-[#25D366]"
                                : "dark:text-[#A5A5A5] text-[#636261]"
                                }`}
                        >
                            9:30 PM
                        </span>
                        <div
                            className="badge-slot"
                            style={{
                                position: "relative",
                                width: 28,
                                height: 28,
                            }}
                        >
                            <Badge
                                badgeContent={unreaded_messages_length}
                                color="success"
                                className="chat-badge"
                                sx={(theme) => ({
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    transition: "all 100ms ease",
                                    '& .MuiBadge-badge': {
                                        backgroundColor: '#25D366',
                                        color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
                                    },
                                })}
                            />
                            <ChatItemMoreButtonMenu />
                        </div>
                    </div>
                }
            >
                <ListItemAvatar>
                    <Avatar
                        sx={(theme) => ({
                            width: 45,
                            height: 45,
                            backgroundColor: theme.palette.mode === "dark" ? "#103529" : "#D9FDD3",
                            color: theme.palette.mode === "dark" ? "#25D366" : "#1F4E2E",
                        })}
                        src={avatar || ""}
                    >
                        {chat_type === 'group' ? <Group /> : <Person />}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={last_message_sender_nickname}
                    sx={{
                        transition: "max-width 100ms ease",
                        maxWidth: "75%",
                        "& .MuiListItemText-secondary": {
                            color: (theme) =>
                                is_unreaded_chat ? theme.palette.mode === "dark" ? "white" : "black" : theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                        },
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        display: "block",
                    }}
                    secondary={
                        <React.Fragment>
                            {chat_type === 'group' && last_message_sender_is_me && <DoneAll fontSize="small" />}
                            {chat_type === 'group' && !last_message_sender_is_me && `${last_message_sender_nickname}:`}
                            {last_message_media && (
                                <>
                                    {last_message_media === 'image' && (
                                        <ImageOutlined fontSize="small" />
                                    )}
                                    {last_message_media === 'video' && (
                                        <SlowMotionVideoOutlined fontSize="small" />
                                    )}
                                    {last_message_media === 'voice' && (
                                        <KeyboardVoiceOutlined fontSize="small" />
                                    )}
                                    {last_message_media === 'file' && (
                                        <AttachFileOutlined fontSize="small" />
                                    )}
                                </>
                            )}
                            {'  '}
                            {last_message_media ?
                                last_message_media === 'image' ? 'Image' :
                                    last_message_media === 'video' ? 'Video' :
                                        last_message_media === 'voice' ? 'Voice' :
                                            'File' :
                                last_message_context
                            }
                        </React.Fragment>
                    }
                    secondaryTypographyProps={{
                        noWrap: true,
                        sx: {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "block",
                            maxWidth: "100%",
                            transition: "max-width 100ms ease",
                            color: (theme) =>
                                is_unreaded_chat
                                    ? theme.palette.mode === "dark"
                                        ? "white"
                                        : "black"
                                    : theme.palette.mode === "dark"
                                        ? "#A5A5A5"
                                        : "#636261",
                        },
                    }}
                />
            </ListItem>
        </Button>
    )
}