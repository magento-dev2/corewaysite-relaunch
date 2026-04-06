"use client";

import { useCallback, useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Save } from 'lucide-react';
import Editor from '@/components/admin/Editor';
import RelatedArticlesSelector from '@/components/admin/RelatedArticlesSelector';

export default function EditBlog() {
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;


    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    type RelatedArticle = { id: string };
    type FAQItem = {
        question: string;
        answer: string;
    };
    type BlogFormData = {
        title: string;
        author: string;
        slug: string;
        excerpt: string;
        coverImage: string;
        readTime: string;
        content: string;
        isActive: boolean;
        relatedArticleIds: string[];
        metaTitle: string;
        metaDescription: string;
        metaKeywords: string;
        faqSchema: string;
        ctaTitle: string;
        ctaDescription: string;
        ctaButton1Text: string;
        ctaButton1Link: string;
        ctaButton2Text: string;
        ctaButton2Link: string;
    };
    const [formData, setFormData] = useState<BlogFormData>({
        title: '',
        author: '',
        slug: '',
        excerpt: '',
        coverImage: '',
        readTime: '9',
        content: '',
        isActive: true,
        relatedArticleIds: [] as string[],
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
        faqSchema: '',
        ctaTitle: '',
        ctaDescription: '',
        ctaButton1Text: '',
        ctaButton1Link: '',
        ctaButton2Text: '',
        ctaButton2Link: '',
    });
    const [faqItems, setFaqItems] = useState<FAQItem[]>([]);

    const parseFaqSchema = useCallback((value: unknown): FAQItem[] => {
        if (!value) {
            return [];
        }

        let parsed: unknown = value;

        if (typeof value === 'string') {
            try {
                parsed = JSON.parse(value);
            } catch {
                return [];
            }
        }

        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.filter((item): item is FAQItem => {
            return typeof item === 'object'
                && item !== null
                && typeof (item as { question?: unknown }).question === 'string'
                && typeof (item as { answer?: unknown }).answer === 'string';
        });
    }, []);

    const serializeFaqItems = useCallback((items: FAQItem[]) => {
        const validItems = items
            .map((item) => ({
                question: item.question.trim(),
                answer: item.answer.trim(),
            }))
            .filter((item) => item.question && item.answer);

        return validItems.length > 0 ? JSON.stringify(validItems) : '';
    }, []);

    const updateFaqItems = (items: FAQItem[]) => {
        setFaqItems(items);
        setFormData((prev) => ({
            ...prev,
            faqSchema: serializeFaqItems(items),
        }));
    };

    useEffect(() => {
        if (!id) return;

        const fetchBlog = async () => {
            try {
                const res = await fetch(`/api/blogs/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    const parsedFaqItems = parseFaqSchema(data.faqSchema);
                    setFormData({
                        title: data.title,
                        author: data.author || '',
                        slug: data.slug,
                        excerpt: data.excerpt || '',
                        coverImage: data.coverImage || '',
                        readTime: String(data.readTime ?? 9),
                        content: data.content,
                        isActive: data.isActive ?? true,
                        relatedArticleIds: data.relatedArticles?.map((article: RelatedArticle) => article.id) || [],
                        metaTitle: data.metaTitle || '',
                        metaDescription: data.metaDescription || '',
                        metaKeywords: data.metaKeywords || '',
                        faqSchema: serializeFaqItems(parsedFaqItems),
                        ctaTitle: data.ctaTitle || '',
                        ctaDescription: data.ctaDescription || '',
                        ctaButton1Text: data.ctaButton1Text || '',
                        ctaButton1Link: data.ctaButton1Link || '',
                        ctaButton2Text: data.ctaButton2Text || '',
                        ctaButton2Link: data.ctaButton2Link || '',
                    });
                    setFaqItems(parsedFaqItems);
                } else {
                    // alert('Blog not found');
                    // router.push('/admin');
                    console.log("Blog not")
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setFetching(false);
            }
        };

        fetchBlog();
    }, [id, router, parseFaqSchema, serializeFaqItems]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`/api/blogs/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push('/admin');
            } else {
                alert('Error updating blog');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return <div className="min-h-screen bg-[#0E0918] text-white p-8 flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="p-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Edit Post</h1>
                    <p className="text-gray-600 mt-1">Update your blog post content</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Slug</label>
                            <input
                                type="text"
                                required
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Author</label>
                            <input
                                type="text"
                                value={formData.author}
                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="Coreway Team"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Excerpt</label>
                        <textarea
                            rows={3}
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Cover Image URL</label>
                        <input
                            type="text"
                            value={formData.coverImage}
                            onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Read Time (minutes)</label>
                        <input
                            type="number"
                            min="1"
                            value={formData.readTime}
                            onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                            placeholder="9"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Content</label>
                        <Editor
                            content={formData.content}
                            onChange={(content) => setFormData({ ...formData, content })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Related Articles</label>
                        <RelatedArticlesSelector
                            selectedIds={formData.relatedArticleIds}
                            onChange={(ids) => setFormData({ ...formData, relatedArticleIds: ids })}
                            currentBlogId={id}
                        />
                    </div>

                    {/* SEO Settings */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
                        <h2 className="text-lg font-semibold text-gray-900">SEO Settings</h2>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Meta Title</label>
                            <input
                                type="text"
                                value={formData.metaTitle}
                                onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="SEO Title (defaults to post title if empty)"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Meta Description</label>
                            <textarea
                                rows={3}
                                value={formData.metaDescription}
                                onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="SEO Description (defaults to excerpt if empty)"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Meta Keywords</label>
                            <input
                                type="text"
                                value={formData.metaKeywords}
                                onChange={(e) => setFormData({ ...formData, metaKeywords: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="keyword1, keyword2, keyword3"
                            />
                        </div>
                    </div>

                    {/* CTA Settings */}
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 space-y-4">
                        <h2 className="text-lg font-semibold text-purple-900">CTA Section Settings</h2>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">CTA Title</label>
                            <input
                                type="text"
                                value={formData.ctaTitle}
                                onChange={(e) => setFormData({ ...formData, ctaTitle: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="Ready to start your project?"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">CTA Description</label>
                            <textarea
                                rows={2}
                                value={formData.ctaDescription}
                                onChange={(e) => setFormData({ ...formData, ctaDescription: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="Contact our experts today for a free consultation."
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Button 1 Text</label>
                                <input
                                    type="text"
                                    value={formData.ctaButton1Text}
                                    onChange={(e) => setFormData({ ...formData, ctaButton1Text: e.target.value })}
                                    className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                    placeholder="Contact Us"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Button 1 Link</label>
                                <input
                                    type="text"
                                    value={formData.ctaButton1Link}
                                    onChange={(e) => setFormData({ ...formData, ctaButton1Link: e.target.value })}
                                    className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                    placeholder="/contact"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Button 2 Text</label>
                                <input
                                    type="text"
                                    value={formData.ctaButton2Text}
                                    onChange={(e) => setFormData({ ...formData, ctaButton2Text: e.target.value })}
                                    className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                    placeholder="Learn More"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Button 2 Link</label>
                                <input
                                    type="text"
                                    value={formData.ctaButton2Link}
                                    onChange={(e) => setFormData({ ...formData, ctaButton2Link: e.target.value })}
                                    className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                    placeholder="/about"
                                />
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section Settings */}
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-blue-900">FAQ Section Settings</h2>
                            <button
                                type="button"
                                onClick={() => updateFaqItems([...faqItems, { question: '', answer: '' }])}
                                className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
                            >
                                + Add More
                            </button>
                        </div>

                        {faqItems.length === 0 && (
                            <p className="text-sm text-gray-600">No FAQ items added yet. Click &quot;Add More&quot; to add question and answer fields.</p>
                        )}

                        <div className="space-y-4">
                            {faqItems.map((item, index) => (
                                <details key={index} className="group bg-white border border-blue-100 rounded-lg p-4" open={index === faqItems.length - 1}>
                                    <summary className="flex items-center justify-between list-none cursor-pointer">
                                        <p className="text-sm font-medium text-gray-700">FAQ #{index + 1}</p>
                                        <div className="flex items-center gap-4">
                                            {/* <span className="text-xs text-blue-700 group-open:hidden">Open</span>
                                            <span className="text-xs text-blue-700 hidden group-open:inline">Close</span> */}
                                            <span className="text-blue-700 transition-transform duration-200 group-open:rotate-45">+</span>
                                        </div>
                                    </summary>

                                    <div className="mt-4 space-y-3">
                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                onClick={() => updateFaqItems(faqItems.filter((_, i) => i !== index))}
                                                className="text-red-600 hover:text-red-700 text-sm font-medium cursor-pointer"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Question</label>
                                            <input
                                                type="text"
                                                value={item.question}
                                                onChange={(e) => {
                                                    const updated = [...faqItems];
                                                    updated[index] = { ...updated[index], question: e.target.value };
                                                    updateFaqItems(updated);
                                                }}
                                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                                placeholder="How much does a custom AI tool cost?"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Answer</label>
                                            <textarea
                                                rows={4}
                                                value={item.answer}
                                                onChange={(e) => {
                                                    const updated = [...faqItems];
                                                    updated[index] = { ...updated[index], answer: e.target.value };
                                                    updateFaqItems(updated);
                                                }}
                                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                                placeholder="Write a detailed answer..."
                                            />
                                        </div>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Status</label>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, isActive: !formData.isActive })}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${formData.isActive
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                    : 'bg-gray-500/20 text-gray-400 border border-gray-500/50'
                                    }`}
                            >
                                {formData.isActive ? '✓ Active' : '✗ Inactive'}
                            </button>
                            <span className="text-sm text-gray-400">
                                {formData.isActive ? 'This post will be visible on the blog page' : 'This post will be hidden from the blog page'}
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Save size={20} />
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
