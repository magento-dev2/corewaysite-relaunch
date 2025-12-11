"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

export default function CalendlyCTA() {
    const [open, setOpen] = useState(false);
    const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const el =
            document.getElementById("__next") ??
            document.getElementById("root") ??
            document.body;

        setRootEl(el);
    }, []);

    return (
        <>
            {/* <div className="bg-gradient-to-br from-purple-600 to-orange-700 rounded-lg p-6 text-white"> */}
            <div className="bg-purple-500 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Book a Free Consultation</h3>

                <p className="text-orange-50 mb-4 text-sm">
                    Schedule a quick call to discuss your project and get expert guidance.
                </p>

                <button
                    onClick={() => setOpen(true)}
                    className="block cursor-pointer w-full px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                    Book a Meeting
                </button>
            </div>

            {rootEl && (
                <PopupModal
                    url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT"
                    onModalClose={() => setOpen(false)}
                    open={open}
                    rootElement={rootEl}
                />
            )}
        </>
    );
}
