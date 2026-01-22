'use client';

import { useEffect } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

interface PdfModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
}

export default function PdfModal({ isOpen, onClose, pdfUrl }: PdfModalProps) {

    // Lock background scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center px-4">
            <div className="w-full max-w-6xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3 border-b bg-[#f9f9f9]">
                    <span className="text-sm font-semibold text-gray-800">
                        CV Preview
                    </span>
                    <button
                        onClick={onClose}
                        className="px-3 py-1.5 text-sm rounded-lg bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                    >
                        ✕ Close
                    </button>
                </div>

                {/* Viewer container (STRICT height) */}
                <div className="h-[calc(90vh-52px)] overflow-y-auto">
                    <Worker workerUrl="/pdf.worker.min.js">
                        <Viewer fileUrl={pdfUrl} />
                    </Worker>
                </div>
            </div>
        </div>
    );
}
