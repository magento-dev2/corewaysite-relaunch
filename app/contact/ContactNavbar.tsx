"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function ContactNavbar() {
    const router = useRouter();

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#0E0918]/70 backdrop-blur-md border-b border-white/10 transition-transform duration-300  ju`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3">
                            <Image
                                src="/logo.png"
                                alt="Coreway Solution Logo"
                                width={214}
                                height={40}
                                priority
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                    </div>
                    <Link href="/">
                        <div className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-600 transition">
                            <ArrowLeft size={18} />
                            Go Back
                        </div>

                    </Link>

                </div>




            </div>


        </nav>
    );
}
