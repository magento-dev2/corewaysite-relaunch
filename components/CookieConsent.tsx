"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has made a choice
        const cookieConsent = localStorage.getItem("cookieConsent");
        const consentTimestamp = localStorage.getItem("cookieConsentTimestamp");

        if (!cookieConsent) {
            // No consent recorded, show banner
            setShowBanner(true);
            setTimeout(() => setIsVisible(true), 500);
        } else if (cookieConsent === "accepted" && consentTimestamp) {
            // Check if consent has expired (e.g., 365 days)
            const consentDate = new Date(parseInt(consentTimestamp));
            const expiryDate = new Date(consentDate.getTime() + 365 * 24 * 60 * 60 * 1000); // 365 days
            const now = new Date();

            if (now > expiryDate) {
                // Consent expired, show banner again
                localStorage.removeItem("cookieConsent");
                localStorage.removeItem("cookieConsentTimestamp");
                setShowBanner(true);
                setTimeout(() => setIsVisible(true), 500);
            }
        }
        // If user declined, banner will show on every page load (no localStorage entry)
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        localStorage.setItem("cookieConsentTimestamp", Date.now().toString());
        setIsVisible(false);
        setTimeout(() => setShowBanner(false), 300);
    };

    const handleDecline = () => {
        // Don't save anything - banner will show again on reload
        setIsVisible(false);
        setTimeout(() => setShowBanner(false), 300);
    };

    if (!showBanner) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="">
                        <div className="relative bg-gradient-to-br from-[#1a1325] to-[#0E0918] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-20 blur-xl"></div>

                            {/* Content */}
                            <div className="relative p-6 md:p-8">
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-2xl flex items-center justify-center">
                                            <Cookie className="w-8 h-8 text-purple-400" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-xl font-bold text-white">
                                                We Value Your Privacy
                                            </h3>
                                            <Shield className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                                            By clicking "Accept All", you consent to our use of cookies.{" "}
                                            <Link href="/cookie-policy" className="text-purple-400 hover:text-purple-300 underline">
                                                Learn more
                                            </Link>
                                        </p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-4 text-xs md:text-sm text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span>Essential cookies</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span>Analytics</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span>Performance</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                        <button
                                            onClick={handleDecline}
                                            className="cursor-pointer px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all font-medium text-sm whitespace-nowrap"
                                        >
                                            Decline
                                        </button>
                                        <button
                                            onClick={handleAccept}
                                            className="cursor-pointer px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white rounded-lg hover:from-purple-600 hover:to-fuchsia-700 transition-all font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 text-sm whitespace-nowrap flex items-center justify-center gap-2"
                                        >
                                            <CheckCircle className="w-4 h-4" />
                                            Accept All
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
