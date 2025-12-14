"use client";

import { NotificationsOffOutlined } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';

export default function NotificationServicesPermissionAlert() {
    return (
        <Alert
            severity="success"
            onClose={() => { }}
            icon={<NotificationsOffOutlined fontSize="large" sx={{color: "#25D366"}}/>}
            sx={(theme) => ({
                borderRadius: 3,
                backgroundColor:
                    theme.palette.mode === "dark" ? "#103529" : "#D9FDD3",
                color: theme.palette.mode === "dark" ? "white" : "black",
                "& .MuiAlert-icon": {
                    color: theme.palette.mode === "dark" ? "#5cd68a" : "#198754",
                },
            })}
        >
            Message notifications are off.{"  "}
            <Link
                href="#"
                underline="hover"
                sx={(theme) => ({
                    fontWeight: 600,
                    color: "#25D366",
                    cursor: "pointer",
                    "&:hover": {
                        color: "#25D366",
                    },
                })}
            >
                Turn on
            </Link>
        </Alert>

    )
}