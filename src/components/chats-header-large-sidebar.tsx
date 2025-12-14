"use client";

import { AddCommentOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import ChatsMoreButtonMenu from "./chats-more-button-menu";

export default function ChatsHeaderLargeSideBar() {
    const handleAddNewChatForAnimation = () => {};
    return (
        <div className="flex flex-row items-center justify-between">
            <Image
                src={'/halabaak-logo.svg'}
                alt="HalaBaak Corp.©"
                width={200}
                height={200}
                className="w-auto h-5 object-contain"
            />
            <div className="flex flex-row items-center gap-x-3">
                <Tooltip
                    title="Create new chat"
                    placement="bottom"
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
                        sx={(theme) => ({
                            "&:hover": {
                                backgroundColor:
                                    theme.palette.mode === "dark"
                                        ? "#333333"
                                        : "#e5e5e5",
                            },
                            display: {xs: "none", sm: "flex"}
                        })}
                    >
                        <AddCommentOutlined
                            sx={(theme) => ({
                                color: theme.palette.mode === "dark" ? "#ffffff" : "#000000"
                            })}
                        />
                    </IconButton>
                </Tooltip>
                <ChatsMoreButtonMenu />
            </div>
        </div>
    )
}