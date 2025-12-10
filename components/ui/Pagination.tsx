"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
    totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    // Logic to show a limited number of page buttons
    // Always show first, last, current, and near neighbors
    const getVisiblePages = () => {
        const delta = 2; // How many pages to show around current page
        const range = [];
        const rangeWithDots = [];

        // Always include page 1
        range.push(1);

        for (let i = currentPage - delta; i <= currentPage + delta; i++) {
            if (i < totalPages && i > 1) {
                range.push(i);
            }
        }

        // Always include last page
        if (totalPages > 1) {
            range.push(totalPages);
        }

        // Add dots
        let l;
        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
        return rangeWithDots;
    };

    const visiblePages = getVisiblePages();

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex justify-center items-center gap-2 mt-12 mb-8">
            {/* Previous Button */}
            {currentPage > 1 ? (
                <Link
                    href={createPageURL(currentPage - 1)}
                    className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all"
                >
                    <ArrowLeft size={20} />
                </Link>
            ) : (
                <span className="p-2 rounded-lg border border-white/5 text-gray-700 cursor-not-allowed">
                    <ArrowLeft size={20} />
                </span>
            )}

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
                {visiblePages.map((page, index) => {
                    if (page === '...') {
                        return <span key={`dots-${index}`} className="px-2 text-gray-600">...</span>;
                    }

                    const isCurrent = currentPage === page;
                    return (
                        <Link
                            key={page}
                            href={createPageURL(page)}
                            className={`min-w-[40px] h-[40px] flex items-center justify-center rounded-lg border text-sm font-medium transition-all ${isCurrent
                                    ? "border-purple-500 bg-purple-500/20 text-white"
                                    : "border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/5"
                                }`}
                        >
                            {page}
                        </Link>
                    );
                })}
            </div>

            {/* Next Button */}
            {currentPage < totalPages ? (
                <Link
                    href={createPageURL(currentPage + 1)}
                    className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all"
                >
                    <ArrowRight size={20} />
                </Link>
            ) : (
                <span className="p-2 rounded-lg border border-white/5 text-gray-700 cursor-not-allowed">
                    <ArrowRight size={20} />
                </span>
            )}
        </div>
    );
}
