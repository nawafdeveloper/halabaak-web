"use client";

import { countries } from '@/lib/countries-code';
import { ExpandMoreOutlined, LockOutline } from '@mui/icons-material';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import React, { useRef, useState } from 'react'

type Props = {
    country: string | null;
    currentStep: 'phoneForm' | 'otpForm' | 'app';
    setCurrentStep: (step: 'phoneForm' | 'otpForm' | 'app') => void;
}

export default function AuthPhoneForm({ country, currentStep, setCurrentStep }: Props) {
    const [phone, setPhone] = useState('');
    const [dialCode, setDialCode] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        setPhone("");
        inputRef.current?.blur();
    };

    const defaultCountry = countries.find(c => c.alpha2 === country) || countries.find(c => c.alpha2 === "SA");

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
                        <h1 className='text-4xl text-center'>Enter phone number</h1>
                        <p className='text-lg text-center text-gray-500'>Select a country and enter your phone number.</p>
                    </span>
                    <div className='w-full flex flex-col gap-y-2'>
                        <Autocomplete
                            disablePortal
                            size="small"
                            popupIcon={<ExpandMoreOutlined fontSize="inherit" />}
                            options={countries}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, value) => {
                                if (value) setDialCode(value.dialCode);
                            }}
                            defaultValue={defaultCountry}
                            sx={{
                                width: '100%',
                                verticalAlign: "middle",
                                "& .MuiFilledInput-root": {
                                    borderRadius: 8,
                                    paddingX: "24px",
                                    paddingY: 0,
                                    paddingTop: "6px",
                                    height: "46px",
                                    "&.Mui-focused": {
                                        outline: "2px solid #25D366",
                                    },
                                    "&:before, &:after": { display: "none" },
                                },
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="filled"
                                    InputProps={{
                                        ...params.InputProps,
                                        disableUnderline: true,
                                    }}
                                />
                            )}
                            PaperComponent={(props) => (
                                <Paper
                                    {...props}
                                    sx={{
                                        borderRadius: 4,
                                        boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                                        marginTop: "4px",
                                        "& ul": {
                                            padding: 1,
                                            "& .MuiAutocomplete-option": {
                                                borderRadius: 2,
                                                padding: "8px 16px",
                                                fontSize: "14px",
                                                "&[aria-selected='true']": {
                                                    backgroundColor: "#25D366",
                                                    color: "#1C1E21",
                                                    "&:hover": {
                                                        backgroundColor: "#1ebe56",
                                                        color: "#1C1E21",
                                                    },
                                                },
                                            },
                                        },
                                    }}
                                />
                            )}
                            PopperComponent={(props) => <Popper {...props} placement="bottom-start" />}
                        />
                        <TextField
                            hiddenLabel
                            id="phone-number-input"
                            variant="filled"
                            fullWidth
                            type="tel"
                            size="small"
                            value={phone}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ""); // remove non-digits
                                setPhone(value.slice(0, 9)); // limit to 9 digits
                            }}
                            inputRef={inputRef}
                            sx={{
                                "& .MuiFilledInput-root": {
                                    borderRadius: 8,
                                    paddingY: "3px",
                                    paddingX: "24px",
                                    "&.Mui-focused": {
                                        outline: "2px solid #25D366",
                                    },
                                }
                            }}
                            InputProps={{
                                disableUnderline: true,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {dialCode ? dialCode : defaultCountry?.dialCode}
                                    </InputAdornment>
                                ),
                                endAdornment: phone ? (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClear} size="small">
                                            <CloseOutlined
                                                sx={{
                                                    color: (theme) =>
                                                        theme.palette.mode === "dark" ? "#A5A5A5" : "#636261",
                                                    width: 18,
                                                    height: 18,
                                                }}
                                            />
                                        </IconButton>
                                    </InputAdornment>
                                ) : null,
                            }}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-y-2 w-full justify-center items-center'>
                    <Button
                        onClick={() => setCurrentStep('otpForm')}
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
                    <span className='flex flex-row items-center gap-x-1 text-sm text-gray-500'>
                        <LockOutline fontSize="inherit" />
                        <p>Your personal messages are end-to-end encrypted.</p>
                    </span>
                </div>
            </div>
        </div>
    )
}