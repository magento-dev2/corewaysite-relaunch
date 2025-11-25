"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Blog {
    id: string;
    title: string;
    slug: string;
    isActive: boolean;
    createdAt: string;
    publishedAt: string | null;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const res = await fetch('/api/blogs');
            const data = await res.json();
            setBlogs(data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    const deleteBlog = async (id: string) => {
        if (!confirm('Are you sure you want to delete this blog?')) return;

        try {
            await fetch(`/api/blogs/${id}`, {
                method: 'DELETE',
            });
            fetchBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };



    const toggleActive = async (id: string, currentStatus: boolean) => {
        try {
            await fetch(`/api/blogs/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isActive: !currentStatus }),
            });
            fetchBlogs();
        } catch (error) {
            console.error('Error toggling blog status:', error);
        }
    };

    return (
        <div className="p-8">
            <div className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
                    <p className="text-gray-600 mt-1">Manage your blog posts and content</p>
                </div>
                <Link
                    href="/admin/create"
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2 font-medium"
                >
                    <Plus size={20} />
                    Create New Post
                </Link>
            </div>

            {loading ? (
                <div className="text-center py-12 text-gray-600">Loading...</div>
            ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Title</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Slug</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {blogs.map((blog) => (
                                <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <Link
                                            href={`/blog/${blog.slug}`}
                                            target="_blank"
                                            className="text-gray-900 hover:text-purple-600 transition-colors font-medium"
                                        >
                                            {blog.title}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{blog.slug}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => toggleActive(blog.id, blog.isActive)}
                                            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${blog.isActive
                                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {blog.isActive ? 'Active' : 'Inactive'}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-3">
                                            <Link
                                                href={`/blog/${blog.slug}`}
                                                target="_blank"
                                                className="text-blue-600 hover:text-blue-700 transition-colors"
                                                title="View"
                                            >
                                                <Eye size={18} />
                                            </Link>
                                            <Link
                                                href={`/admin/edit/${blog.id}`}
                                                className="text-amber-600 hover:text-amber-700 transition-colors"
                                                title="Edit"
                                            >
                                                <Edit size={18} />
                                            </Link>
                                            <button
                                                onClick={() => deleteBlog(blog.id)}
                                                className="text-red-600 hover:text-red-700 transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {blogs.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        No blogs found. Create your first post!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
