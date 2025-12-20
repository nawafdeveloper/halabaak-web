"use client";

import { InfoOutline, SearchOutlined } from '@mui/icons-material';
import { IconButton, Box, Fade, Paper, Popper, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function CreateChatMoreInfoButton() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => !prev);
    };

    return (
        <Box>
            <Popper
                sx={{
                    zIndex: 1200,
                    maxWidth: 320,
                }}
                open={open}
                anchorEl={anchorEl}
                placement="bottom-end"
                transition
                modifiers={[
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                ]}
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper
                            elevation={3}
                            sx={(theme) => ({
                                p: 2,
                                backgroundColor: theme.palette.mode === "dark" ? "rgba(20, 22, 22, 1)" : "#ffffff",
                                borderRadius: 3,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                                color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
                            })}
                        >
                            <Typography sx={{ fontSize: 14 }}>
                                You can create new chat or new group. To create a new chat, <SearchOutlined fontSize="inherit" /> please enter the number of recipient.
                            </Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <IconButton
                onClick={handleClick}
                sx={(theme) => ({
                    "&:hover": {
                        backgroundColor: theme.palette.mode === "dark" ? "#333333" : "#e5e5e5",
                    },
                    display: { xs: "none", sm: "flex" },
                })}
            >
                <InfoOutline fontSize="inherit" />
            </IconButton>
        </Box>
    );
}
