'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) {
            posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
                api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
                person_profiles: 'identified_only',
                capture_pageview: false // Disable automatic pageview capture, as we capture manually
            });
        }
    }, []);

    return <PHProvider client={posthog}>{children}</PHProvider>;
}
