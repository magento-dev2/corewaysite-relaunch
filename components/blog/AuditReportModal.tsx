'use client';

import { useState, useEffect } from 'react';
import { X, Send, FileText, CheckCircle, Loader2 } from 'lucide-react';

export default function AuditReportModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-audit-modal', handleOpen);
        return () => window.removeEventListener('open-audit-modal', handleOpen);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/audit-report', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                setEmail('');
                setTimeout(() => {
                    setIsSuccess(false);
                    setIsOpen(false);
                }, 3000);
            } else {
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Failed to send request. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header with Background Pattern */}
                <div className="relative h-32 bg-purple-600 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-900/20 rounded-full blur-3xl"></div>
                    <h2 className="relative text-2xl md:text-3xl font-bold text-white text-center px-6">
                        Get Your Free AI Audit Report
                    </h2>
                </div>

                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute cursor-pointer top-4 right-4 text-white/80 hover:text-white transition-colors z-10 p-2 bg-black/10 rounded-full hover:bg-black/20"
                >
                    <X size={20} />
                </button>

                <div className="p-8">
                    {isSuccess ? (
                        <div className="flex flex-col items-center text-center py-6 animate-in zoom-in-95 duration-500">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle size={40} className="text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                            <p className="text-gray-600">
                                We've received your request. Our experts will send your personalized report within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <>
                            <p className="text-gray-600 mb-8 text-center leading-relaxed">
                                Enter your email below to receive a comprehensive audit report showing exactly where AI and custom software can save you time and money.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-900 placeholder-gray-400"
                                    />
                                    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="cursor-pointer flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-purple-200 active:scale-95 disabled:opacity-70 disabled:active:scale-100  "
                                    >
                                        {isSubmitting ? (
                                            <Loader2 size={20} className="animate-spin" />
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                <span>Get Report</span>
                                            </>
                                        )}
                                    </button>

                                    <a
                                        href="/assets/sample-audit-report.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-purple-100 hover:border-purple-200 hover:bg-purple-50 text-purple-700 font-bold rounded-2xl transition-all active:scale-95"
                                    >
                                        <FileText size={18} />
                                        <span>View Sample</span>
                                    </a>
                                </div>
                            </form>

                            <p className="mt-6 text-xs text-gray-400 text-center">
                                * Your information is secure and will only be used for the audit report.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
