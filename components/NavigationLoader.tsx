"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function NavigationLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset loading state when pathname changes (navigation complete)
    setIsLoading(false);
    setProgress(0);
  }, [pathname]);

  useEffect(() => {
    // Intercept all link clicks to show loader BEFORE navigation
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href && !link.target && !link.download) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);

        // Only show loader for internal navigation to different pages
        if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
          // Scroll to top immediately when navigation starts
          window.scrollTo({ top: 0, behavior: 'smooth' });

          setIsLoading(true);
          setProgress(10);

          // Simulate progress
          const interval = setInterval(() => {
            setProgress(prev => {
              if (prev >= 90) {
                clearInterval(interval);
                return 90;
              }
              return prev + 10;
            });
          }, 200);
        }
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  // Lock body scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-[73px] left-0 right-0 z-[9999] h-1 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-300 ease-out shadow-lg shadow-purple-500/50"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Blur Overlay - Only Below Header */}
      <div className="fixed top-[73px] left-0 right-0 bottom-0 bg-black/10 backdrop-blur-lg flex items-center justify-center z-45 transition-all duration-300">
        <div className="relative">
          {/* Spinning Ring */}
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />

          {/* Center Dot */}
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-600 rounded-full animate-pulse" /> */}
        </div>
      </div>
    </>
  );
}
