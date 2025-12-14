"use client";

import React, { useState } from 'react'
import AuthPhoneForm from './auth-phone-form';
import AuthOtpForm from './auth-otp-form';

interface Props {
    country: string | null;
}

export default function AuthFlowSection({ country }: Props) {
    const [currentStep, setCurrentStep] = useState<'phoneForm' | 'otpForm' | 'app'>('phoneForm');
    return (
        <div className='w-full h-full'>
            {currentStep === 'phoneForm' && (
                <AuthPhoneForm
                    country={country}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            )}
            {currentStep === 'otpForm' && (
                <AuthOtpForm
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            )}
        </div>
    )
}