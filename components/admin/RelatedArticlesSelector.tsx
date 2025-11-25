"use client";

import { useEffect, useState } from 'react';
import { X, Search, Plus } from 'lucide-react';

interface Blog {
    id: string;
    title: string;
    slug: string;
}

interface RelatedArticlesSelectorProps {
    selectedIds: string[];
    onChange: (ids: string[]) => void;
    currentBlogId?: string;
}

export default function RelatedArticlesSelector({
    selectedIds,
    onChange,
    currentBlogId,
}: RelatedArticlesSelectorProps) {
    const [availableBlogs, setAvailableBlogs] = useState<Blog[]>([]);
    const [selectedBlogs, setSelectedBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch available blogs
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const url = currentBlogId
                    ? `/api/blogs/available?excludeId=${currentBlogId}`
                    : '/api/blogs/available';
                const res = await fetch(url);
                if (res.ok) {
                    const data = await res.json();
                    setAvailableBlogs(data);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [currentBlogId]);

    // Update selected blogs when selectedIds change
    useEffect(() => {
        const selected = availableBlogs.filter(blog => selectedIds.includes(blog.id));
        setSelectedBlogs(selected);
    }, [selectedIds, availableBlogs]);

    const handleToggleBlog = (blog: Blog) => {
        const isSelected = selectedIds.includes(blog.id);
        if (isSelected) {
            onChange(selectedIds.filter(id => id !== blog.id));
        } else {
            onChange([...selectedIds, blog.id]);
        }
    };

    const handleRemoveBlog = (blogId: string) => {
        onChange(selectedIds.filter(id => id !== blogId));
    };

    const filteredBlogs = availableBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !selectedIds.includes(blog.id)
    );

    return (
        <div className="space-y-3">
            {/* Selected Articles Display */}
            {selectedBlogs.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {selectedBlogs.map(blog => (
                        <div
                            key={blog.id}
                            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-medium"
                        >
                            <span>{blog.title}</span>
                            <button
                                type="button"
                                onClick={() => handleRemoveBlog(blog.id)}
                                className="hover:bg-purple-200 rounded-full p-0.5 transition-colors"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Add Button / Dropdown */}
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 text-left text-gray-700 hover:border-purple-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors flex items-center justify-between"
                >
                    <span className="flex items-center gap-2">
                        <Plus size={18} />
                        {selectedBlogs.length > 0
                            ? `${selectedBlogs.length} article${selectedBlogs.length > 1 ? 's' : ''} selected`
                            : 'Select related articles'}
                    </span>
                    <span className="text-gray-400">{isOpen ? '▲' : '▼'}</span>
                </button>

                {/* Dropdown */}
                {isOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-hidden">
                        {/* Search */}
                        <div className="p-3 border-b border-gray-200">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                                />
                            </div>
                        </div>

                        {/* Blog List */}
                        <div className="overflow-y-auto max-h-60">
                            {loading ? (
                                <div className="p-4 text-center text-gray-500">Loading...</div>
                            ) : filteredBlogs.length === 0 ? (
                                <div className="p-4 text-center text-gray-500">
                                    {searchQuery ? 'No articles found' : 'No available articles'}
                                </div>
                            ) : (
                                filteredBlogs.map(blog => (
                                    <button
                                        key={blog.id}
                                        type="button"
                                        onClick={() => handleToggleBlog(blog)}
                                        className="w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors border-b border-gray-100 last:border-b-0"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">{blog.title}</div>
                                                <div className="text-sm text-gray-500 mt-0.5">{blog.slug}</div>
                                            </div>
                                        </div>
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Helper Text */}
            <p className="text-sm text-gray-500">
                Select articles to display in the "Related Articles" section on the blog detail page.
            </p>
        </div>
    );
}
