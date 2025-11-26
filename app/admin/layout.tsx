"use client";

import { LayoutDashboard, FileText, LogOut, Settings, BookOpen, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            router.push('/admin/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white shadow-lg z-50">
                <div className="p-6 border-b border-gray-800">
                    <Link href="/admin" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
                        Admin Panel
                    </Link>
                </div>

                <nav className="p-4 space-y-2">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                        <LayoutDashboard className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                        <span className="font-medium">Dashboard</span>
                    </Link>

                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                        <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                        <span className="font-medium">Manage Blog</span>
                    </Link>

                    <Link
                        href="/admin/case-studies"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                        <Briefcase className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                        <span className="font-medium">Manage Case Study</span>
                    </Link>

                    <Link
                        href="/admin/create"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                        <FileText className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                        <span className="font-medium">Create Post</span>
                    </Link>
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 space-y-2">
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                        <Settings className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                        <span className="font-medium">View Site</span>
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-900/20 transition-colors group text-left"
                    >
                        <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-400" />
                        <span className="font-medium group-hover:text-red-400">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 min-h-screen">
                {children}
            </main>
        </div>
    );
}

