"use client";

import { createContext, useContext, useRef, ReactNode } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface RecaptchaContextType {
    executeRecaptcha: () => Promise<string | null>;
    resetRecaptcha: () => void;
}

const RecaptchaContext = createContext<RecaptchaContextType | undefined>(undefined);

export function useRecaptcha() {
    const context = useContext(RecaptchaContext);
    if (!context) {
        throw new Error('useRecaptcha must be used within RecaptchaProvider');
    }
    return context;
}

interface RecaptchaProviderProps {
    children: ReactNode;
}

export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const executeRecaptcha = async (): Promise<string | null> => {
        try {
            const token = await recaptchaRef.current?.executeAsync();
            return token || null;
        } catch (error) {
            console.error('reCAPTCHA execution failed:', error);
            return null;
        }
    };

    const resetRecaptcha = () => {
        recaptchaRef.current?.reset();
    };

    return (
        <RecaptchaContext.Provider value={{ executeRecaptcha, resetRecaptcha }}>
            {children}
            {/* Invisible reCAPTCHA - badge will appear at bottom right */}
            <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            />
        </RecaptchaContext.Provider>
    );
}
