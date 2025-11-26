"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import CaseStudyForm from '@/components/admin/CaseStudyForm';

export default function EditCaseStudy() {
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [initialData, setInitialData] = useState<any>(null);

    useEffect(() => {
        if (!id) return;

        const fetchCaseStudy = async () => {
            try {
                const res = await fetch(`/api/case-studies/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setInitialData(data);
                } else {
                    alert('Case study not found');
                    router.push('/admin/case-studies');
                }
            } catch (error) {
                console.error('Error fetching case study:', error);
            } finally {
                setFetching(false);
            }
        };

        fetchCaseStudy();
    }, [id, router]);

    const handleSubmit = async (formData: any) => {
        setLoading(true);

        try {
            const res = await fetch(`/api/case-studies/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push('/admin/case-studies');
            } else {
                alert('Error updating case study');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error updating case study');
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return <div className="p-8">Loading...</div>;
    }

    return (
        <div className="p-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Edit Case Study</h1>
                    <p className="text-gray-600 mt-1">Update case study details</p>
                </div>

                <CaseStudyForm
                    initialData={initialData}
                    onSubmit={handleSubmit}
                    loading={loading}
                    submitLabel="Save Changes"
                />
            </div>
        </div>
    );
}
