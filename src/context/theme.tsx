"use client";

import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export function MuiSystemThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<"light" | "dark">("light");

    useEffect(() => {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

        const updateTheme = () => {
            const isDark = systemTheme.matches;
            setMode(isDark ? "dark" : "light");

            document.documentElement.classList.toggle("dark", isDark);
        };

        updateTheme();
        systemTheme.addEventListener("change", updateTheme);

        return () => systemTheme.removeEventListener("change", updateTheme);
    }, []);

    const theme = createTheme({
        palette: {
            mode,
        },
    });

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
