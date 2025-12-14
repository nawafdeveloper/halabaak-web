"use client";

import GlobalLoading from '@/components/global-loading';

export default function Loading() {
    return (
        <main className='absolute top-0 left-0 right-0 bottom-0 z-50'>
            <GlobalLoading />
        </main>
    )
}