"use client";

import { generateVideoThumbnailFromUrl } from '@/lib/generate-thumbnail';
import { Message } from '@/types/messages.type';
import { EmojiEmotionsOutlined, ExpandMore, PlayArrowRounded, ShortcutRounded, VideocamRounded } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getFileExtension, getFileSize } from '@/lib/files';

type Props = {
    value: number;
    message: Message;
    isSelectMode: boolean;
    selectedMessages: string[];
    setSelectedMessages: (value: string[]) => void;
}

export default function ChatRoomMessageBubble({ value, message, isSelectMode, selectedMessages, setSelectedMessages }: Props) {
    const [thumbnail, setThumbnail] = useState('');
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isListEnter, setIsListEnter] = useState(false);
    const [fileSize, setFileSize] = useState(0);
    const [isBubbleEnter, setIsBubbleEnter] = useState(false);

    const mediaTypes = ['photo', 'video'] as const;

    const mediaPrev = mediaTypes.includes(
        message.attached_media as typeof mediaTypes[number]
    );

    const handleToggle = (value: string) => () => {
        const currentIndex = selectedMessages.indexOf(value);
        const newChecked = [...selectedMessages];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setSelectedMessages(newChecked);
    };

    const getThumbnail = async () => {
        try {
            setImageLoaded(false);
            const thumbnailBlob = await generateVideoThumbnailFromUrl(message.media_url || '');
            const thumbnailUrl = URL.createObjectURL(thumbnailBlob);

            setThumbnail(thumbnailUrl);
        } catch (error) {
            console.log(error);
        } finally {
            setImageLoaded(true);
        }
    };

    const filePreperation = async () => {
        try {
            if (message.attached_media !== 'file') {
                return null;
            }

            if (message.media_url) {
                const size = await getFileSize(message.media_url);
                setFileSize(size || 0);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getThumbnail();
        filePreperation();
    }, []);

    return (
        <ListItem
            disablePadding
        >
            <ListItemButton
                role={undefined}
                onClick={isSelectMode ? handleToggle(message.message_id) : () => { }}
                dense={false}
                disableRipple={!isSelectMode}
                disableTouchRipple={!isSelectMode}
                onMouseEnter={() => setIsListEnter(true)}
                onMouseLeave={() => setIsListEnter(false)}
                sx={{
                    cursor: isSelectMode ? "pointer" : "default",
                    ...(!isSelectMode && {
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }),
                    transition: 'ease'
                }}
            >
                <div className='flex flex-row items-center w-full md:max-w-7xl md:mx-auto gap-x-3'>
                    {isSelectMode && (
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={selectedMessages.includes(message.message_id)}
                                tabIndex={-1}
                                disableRipple
                                sx={{
                                    '&.Mui-checked': {
                                        color: "#25D366",
                                    },
                                }}
                            />
                        </ListItemIcon>
                    )}
                    <div className='flex flex-row items-start'>
                        <span className='text-white dark:text-[#222424]' aria-hidden="true" data-icon="tail-in" ><svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 8 13"><title>tail-in</title><path opacity="0.13" fill="currentColor" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path><path fill="currentColor" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path></svg></span>
                        <Card sx={(theme) => ({
                            maxWidth: { lg: mediaPrev ? 250 : '100%', xs: mediaPrev ? 200 : '100%' },
                            padding: "3px",
                            borderTopRightRadius: 7,
                            borderBottomRightRadius: 7,
                            borderBottomLeftRadius: 7,
                            borderTopLeftRadius: 0,
                            position: 'relative',
                            overflow: 'visible',
                            boxShadow: "0px 2px 0px rgba(0,0,0,0.09)",
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(22,24,24,1)" : "#FFFFFF",
                        })}
                            onMouseEnter={() => !isSelectMode && setIsBubbleEnter(true)}
                            onMouseLeave={() => setIsBubbleEnter(false)}
                        >
                            <CardHeader
                                action={message.message_text_content && isBubbleEnter && !isSelectMode && (
                                    <motion.div
                                        initial={{ x: 16, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: 16, opacity: 0 }}
                                        transition={{ duration: 0.09, ease: "easeOut" }}
                                    >
                                        <IconButton
                                            aria-label="more"
                                            sx={(theme) => ({
                                                "&:hover": {
                                                    backgroundColor:
                                                        theme.palette.mode === "dark" ? "#222424" : "#ffffff",
                                                },
                                                padding: 0,
                                                backgroundColor:
                                                    theme.palette.mode === "dark" ? "#222424" : "#ffffff",
                                            })}
                                        >
                                            <ExpandMore
                                                fontSize="inherit"
                                                sx={(theme) => ({
                                                    color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                                                    zIndex: 10,
                                                })}
                                            />
                                        </IconButton>
                                    </motion.div>
                                )}
                                sx={{
                                    position: 'absolute',
                                    zIndex: 10,
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    paddingY: "6px",
                                    paddingX: "12px",
                                    m: "3px",
                                    background: isBubbleEnter ? mediaPrev && 'linear-gradient(190deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 52%)' : 'transparent',
                                    height: "40px",
                                    borderTopRightRadius: 5,
                                    transition: 'ease-in-out'
                                }}
                            />

                            {message.open_graph_data && (
                                <button className='flex cursor-pointer justify-start items-start flex-col gap-x-3 p-2 rounded-lg bg-[#f7f5f3] dark:bg-[#1a1b1b] mb-1 text-sm'>
                                    <p className='font-semibold'>{message.open_graph_data.og_title}</p>
                                    <p className='text-gray-500 dark:text-gray-300'>{message.open_graph_data.og_description}</p>
                                    <p className='text-gray-700 dark:text-gray-400 text-xs'>{message.open_graph_data.og_url}</p>
                                </button>
                            )}
                            {message.attached_media === 'file' && (
                                <div className='flex flex-row items-center gap-x-3 p-4 rounded-lg bg-[#f7f5f3] dark:bg-[#1a1b1b] mb-1'>
                                    <Image
                                        src={'/file.svg'}
                                        alt='File'
                                        width={500}
                                        height={500}
                                        className='w-auto h-8 object-contain'
                                    />
                                    <span className='flex flex-col leading-tight'>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                wordBreak: 'break-word',
                                            }}
                                        >
                                            This is file name
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: 'gray',
                                            }}
                                        >
                                            {getFileExtension(message.media_url || '')} • {fileSize}
                                        </Typography>
                                    </span>
                                </div>
                            )}
                            {mediaPrev && (
                                <div className='overflow-hidden relative'>
                                    {message.attached_media === 'video' && (
                                        <div className='absolute left-0 right-0 top-0 bottom-0 z-10 h-full w-full flex justify-center items-center'>
                                            <div className='w-12 h-12 rounded-full bg-black/30 justify-center items-center flex text-white'>
                                                <PlayArrowRounded fontSize="large" />
                                            </div>
                                            <div className='absolute left-2 bottom-2 flex flex-row items-center gap-x-1 text-xs text-white'>
                                                <VideocamRounded fontSize="small" />
                                                <p className='text-gray-200'>2:33</p>
                                            </div>
                                        </div>
                                    )}
                                    {!message.message_text_content && (
                                        <div className='absolute right-2 bottom-0 text-xs text-white z-10'>
                                            <Typography
                                                variant="caption"
                                            >
                                                {message.created_at.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                                            </Typography>
                                        </div>
                                    )}
                                    <LazyLoadImage
                                        alt={message.message_text_content || ''}
                                        height={'auto'}
                                        effect="blur"
                                        src={(message.attached_media === 'photo' ? message.media_url : message.attached_media === 'video' ? message.video_thumbnail : thumbnail) || ''}
                                        width={'100%'}
                                        wrapperProps={{
                                            style: { transitionDelay: "1s" },
                                        }}
                                        style={{
                                            borderRadius: 7,
                                            overflow: 'hidden'
                                        }}
                                    />
                                </div>
                            )}
                            <CardContent
                                sx={{
                                    px: '2px',
                                    py: '2px',
                                    paddingBottom: '2px !important',
                                }}
                            >
                                {message.message_text_content && (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: mediaPrev ? 'end' : 'start',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                            gap: 1,
                                            position: 'relative',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                flex: 1,
                                                minWidth: 0,
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    display: '-webkit-box',
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    wordBreak: 'break-word',
                                                }}
                                            >
                                                {message.message_text_content}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                flexShrink: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5,
                                                marginTop: message.message_text_content ? 3 : 0
                                            }}
                                        >
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: 'gray',
                                                }}
                                            >
                                                {message.created_at.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                                            </Typography>
                                        </Box>
                                    </Box>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                    {!isSelectMode && (
                        <IconButton
                            aria-label="forward"
                            sx={{
                                color: 'gray'
                            }}
                        >
                            <ShortcutRounded fontSize="small" />
                        </IconButton>
                    )}
                    {isListEnter && !isSelectMode && (
                        <IconButton
                            aria-label="forward"
                            sx={{
                                color: 'gray'
                            }}
                        >
                            <EmojiEmotionsOutlined fontSize="small" />
                        </IconButton>
                    )}
                </div>
            </ListItemButton>
        </ListItem>
    )
}