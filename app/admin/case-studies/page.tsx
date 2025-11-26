"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';

interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    client: string;
    industry: string;
    isActive: boolean;
    createdAt: string;
}

export default function CaseStudiesAdmin() {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCaseStudies();
    }, []);

    const fetchCaseStudies = async () => {
        try {
            const res = await fetch('/api/case-studies');
            const data = await res.json();
            // Ensure data is an array
            if (Array.isArray(data)) {
                setCaseStudies(data);
            } else {
                console.error('API returned non-array data:', data);
                setCaseStudies([]);
            }
        } catch (error) {
            console.error('Error fetching case studies:', error);
            setCaseStudies([]);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this case study?')) return;

        try {
            const res = await fetch(`/api/case-studies/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchCaseStudies();
            } else {
                alert('Error deleting case study');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (loading) {
        return <div className="p-8">Loading...</div>;
    }

    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Case Studies</h1>
                        <p className="text-gray-600 mt-1">Manage your case studies</p>
                    </div>
                    <Link
                        href="/admin/case-studies/create"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
                    >
                        <Plus size={20} />
                        New Case Study
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Client
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Industry
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Created
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {caseStudies.map((caseStudy) => (
                                <tr key={caseStudy.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">{caseStudy.title}</div>
                                        <div className="text-sm text-gray-500">{caseStudy.slug}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {caseStudy.client}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {caseStudy.industry}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${caseStudy.isActive
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-gray-100 text-gray-800'
                                            }`}>
                                            {caseStudy.isActive ? (
                                                <><Eye size={12} className="mr-1" /> Active</>
                                            ) : (
                                                <><EyeOff size={12} className="mr-1" /> Inactive</>
                                            )}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(caseStudy.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end gap-2">
                                            <Link
                                                href={`/admin/case-studies/edit/${caseStudy.id}`}
                                                className="text-purple-600 hover:text-purple-900 p-2 hover:bg-purple-50 rounded transition-colors"
                                            >
                                                <Edit size={18} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(caseStudy.id)}
                                                className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {caseStudies.length === 0 && !loading && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 mb-2">No case studies found.</p>
                            <p className="text-sm text-gray-400">
                                If you haven't run the database migration yet, please run:
                            </p>
                            <code className="block mt-2 p-2 bg-gray-100 rounded text-xs">
                                npx prisma migrate dev --name add_case_study_model
                            </code>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
