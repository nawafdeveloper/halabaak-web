"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import { MuiOtpInput } from 'mui-one-time-password-input';
import Button from '@mui/material/Button';
import { AdminPanelSettingsOutlined } from '@mui/icons-material';

type Props = {
    currentStep: 'phoneForm' | 'otpForm' | 'app';
    setCurrentStep: (step: 'phoneForm' | 'otpForm' | 'app') => void;
}

export default function AuthOtpForm({ currentStep, setCurrentStep }: Props) {
    const [otp, setOtp] = useState('');

    const handleChange = (newValue: string) => {
        setOtp(newValue)
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-full p-4'>
            <div className='flex flex-col h-full max-h-1/2 justify-between w-full md:max-w-sm md:mx-auto'>
                <div className='flex flex-col items-center justify-center gap-y-4 md:gap-y-8 w-full'>
                    <Image
                        src={'/halabaak-logo.svg'}
                        alt="HalaBaak Corp.©"
                        width={200}
                        height={200}
                        className="w-auto h-7 object-contain"
                    />
                    <span className='flex flex-col gap-y-1'>
                        <h1 className='text-4xl text-center'>Enter code</h1>
                        <p className='text-lg text-center text-gray-500'>We send you an OTP through SMS.</p>
                    </span>
                    <MuiOtpInput
                        value={otp}
                        onChange={handleChange}
                        length={6}
                        autoFocus
                        TextFieldsProps={{
                            type: "tel",
                        }}
                        sx={(theme) => ({
                            "& .MuiOtpInput-TextField": {
                                borderRadius: 3,
                                backgroundColor: theme.palette.mode === "dark" ? "#2B2C2C" : "#E8E7E5",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderRadius: 3,
                                    border: "none"
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#25D366",
                                    backgroundColor: theme.palette.mode === "dark" ? "#343535" : "#E1DFDD",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#25D366",
                                    borderWidth: 2,
                                },
                                input: {
                                    textAlign: "center",
                                },
                            },
                        })}
                    />
                </div>
                <div className='flex flex-col gap-y-2 w-full justify-center items-center'>
                    <Button
                        onClick={() => setCurrentStep('app')}
                        variant="outlined"
                        sx={{
                            borderRadius: 99,
                            paddingY: "10px",
                            border: "none",
                            backgroundColor: "#25D366",
                            textTransform: "none",
                            color: "#1C1E21",
                            "&:hover": {
                                backgroundColor: "#1E9A4D",
                            },
                        }}
                        fullWidth
                    >
                        Next
                    </Button>
                    <span className='flex flex-row items-start gap-x-1 text-sm text-gray-500'>
                        <AdminPanelSettingsOutlined fontSize="inherit" className='mt-0.5' />
                        <p>Your information is protected in accordance with our Privacy Policy.</p>
                    </span>
                </div>
            </div>
        </div>
    )
}