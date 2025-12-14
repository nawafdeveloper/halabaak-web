'use client';

import { useEffect, useState } from 'react';
import GlobalLoading from './global-loading';

export default function MainClientUIWrapper({ children }: { children: React.ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            setTimeout(() => setIsLoaded(true), 1000);
        });
        return () => cancelAnimationFrame(raf);
    }, []);

    if (!isLoaded) return <GlobalLoading />;

    return <>{children}</>;
}
