"use client";

import { AddCommentOutlined } from '@mui/icons-material';
import Image from 'next/image';

export default function EmptyStartChating() {
    return (
        <div className='flex flex-col items-center justify-center h-full w-full gap-y-8'>
            <Image
                src={'/start-chating.svg'}
                alt="HalaBaak Corp.©"
                width={500}
                height={500}
                className="w-auto h-32 object-contain"
            />
            <label className='flex flex-col gap-y-4 text-center w-full md:max-w-xl md:mx-auto'>
                <h1 className='text-2xl font-semibold'>You Haven’t Started Any Chats Yet</h1>
                <p className='text-[#636261] dark:text-[#A5A5A5]'>
                    Start a new conversation by tapping the
                    {' '}
                    <AddCommentOutlined fontSize="inherit" />
                    {' '}
                    button and connect with your friends or contacts.
                </p>
            </label>
        </div>
    )
}