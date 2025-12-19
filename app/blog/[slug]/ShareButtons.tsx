"use client";

import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
    slug: string;
    title: string;
}

export default function ShareButtons({ slug, title }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const blogUrl = `https://www.corewaysolution.com/blog/${slug}`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(blogUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
                <div className="flex gap-3">
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors"
                        aria-label="Share on Facebook"
                    >
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center text-white transition-colors"
                        aria-label="Share on Twitter"
                    >
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center text-white transition-colors"
                        aria-label="Share on LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <button
                        onClick={handleCopyLink}
                        className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-900 flex items-center justify-center text-white transition-colors relative"
                        aria-label="Copy link"
                    >
                        {copied ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        ) : (
                            <LinkIcon className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
