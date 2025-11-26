"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CaseStudyForm from '@/components/admin/CaseStudyForm';

export default function CreateCaseStudy() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (formData: any) => {
        setLoading(true);

        try {
            const res = await fetch('/api/case-studies', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push('/admin/case-studies');
            } else {
                alert('Error creating case study');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating case study');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Create New Case Study</h1>
                    <p className="text-gray-600 mt-1">Add a new case study to showcase your work</p>
                </div>

                <CaseStudyForm
                    onSubmit={handleSubmit}
                    loading={loading}
                    submitLabel="Publish Case Study"
                />
            </div>
        </div>
    );
}
