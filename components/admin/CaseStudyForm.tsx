"use client";

import { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface CaseStudyFormData {
    title: string;
    subtitle: string;
    slug: string;
    client: string;
    industry: string;
    location: string;
    overview: string;
    services: string[];
    technologies: string[];
    duration: string;
    teamSize: string;
    imageUrl: string;
    bannerImage: string;
    clientOverviewTitle: string;
    clientOverviewDescription: string;
    challengeTitle: string;
    challengeDescription: string;
    challengePoints: string[];
    challengeConclusion: string;
    challengeImage: string;
    solutionTitle: string;
    solutionDescription: string;
    solutionSteps: { title: string; description: string }[];
    solutionImage: string;
    impactTitle: string;
    impactDescription: string;
    impactPoints: string[];
    impactConclusion: string;
    impactImage: string;
    stats: { value: string; label: string }[];
    testimonialQuote: string;
    testimonialAuthor: string;
    testimonialPosition: string;
    testimonialImage: string;
    quoteText: string;
    quoteAuthor: string;
    gradient: string;
    icon: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    isActive: boolean;
}

interface CaseStudyFormProps {
    initialData?: Partial<CaseStudyFormData>;
    onSubmit: (data: CaseStudyFormData) => void;
    loading: boolean;
    submitLabel: string;
}

export default function CaseStudyForm({ initialData, onSubmit, loading, submitLabel }: CaseStudyFormProps) {
    const [formData, setFormData] = useState<CaseStudyFormData>({
        title: initialData?.title || '',
        subtitle: initialData?.subtitle || '',
        slug: initialData?.slug || '',
        client: initialData?.client || '',
        industry: initialData?.industry || '',
        location: initialData?.location || '',
        overview: initialData?.overview || '',
        services: initialData?.services || [],
        technologies: initialData?.technologies || [],
        duration: initialData?.duration || '',
        teamSize: initialData?.teamSize || '',
        imageUrl: initialData?.imageUrl || '',
        bannerImage: initialData?.bannerImage || '',
        clientOverviewTitle: initialData?.clientOverviewTitle || '',
        clientOverviewDescription: initialData?.clientOverviewDescription || '',
        challengeTitle: initialData?.challengeTitle || '',
        challengeDescription: initialData?.challengeDescription || '',
        challengePoints: initialData?.challengePoints || [],
        challengeConclusion: initialData?.challengeConclusion || '',
        challengeImage: initialData?.challengeImage || '',
        solutionTitle: initialData?.solutionTitle || '',
        solutionDescription: initialData?.solutionDescription || '',
        solutionSteps: initialData?.solutionSteps || [],
        solutionImage: initialData?.solutionImage || '',
        impactTitle: initialData?.impactTitle || '',
        impactDescription: initialData?.impactDescription || '',
        impactPoints: initialData?.impactPoints || [],
        impactConclusion: initialData?.impactConclusion || '',
        impactImage: initialData?.impactImage || '',
        stats: initialData?.stats || [{ value: '', label: '' }, { value: '', label: '' }, { value: '', label: '' }, { value: '', label: '' }],
        testimonialQuote: initialData?.testimonialQuote || '',
        testimonialAuthor: initialData?.testimonialAuthor || '',
        testimonialPosition: initialData?.testimonialPosition || '',
        testimonialImage: initialData?.testimonialImage || '',
        quoteText: initialData?.quoteText || '',
        quoteAuthor: initialData?.quoteAuthor || '',
        gradient: initialData?.gradient || '',
        icon: initialData?.icon || '',
        metaTitle: initialData?.metaTitle || '',
        metaDescription: initialData?.metaDescription || '',
        metaKeywords: initialData?.metaKeywords || '',
        isActive: initialData?.isActive ?? true,
    });

    const [newService, setNewService] = useState('');
    const [newTech, setNewTech] = useState('');
    const [newChallengePoint, setNewChallengePoint] = useState('');
    const [newImpactPoint, setNewImpactPoint] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const addItem = (field: 'services' | 'technologies' | 'challengePoints' | 'impactPoints', value: string, setter: (val: string) => void) => {
        if (value.trim()) {
            setFormData({ ...formData, [field]: [...formData[field], value.trim()] });
            setter('');
        }
    };

    const removeItem = (field: 'services' | 'technologies' | 'challengePoints' | 'impactPoints', index: number) => {
        setFormData({ ...formData, [field]: formData[field].filter((_, i) => i !== index) });
    };

    const addSolutionStep = () => {
        setFormData({
            ...formData,
            solutionSteps: [...formData.solutionSteps, { title: '', description: '' }]
        });
    };

    const removeSolutionStep = (index: number) => {
        setFormData({
            ...formData,
            solutionSteps: formData.solutionSteps.filter((_, i) => i !== index)
        });
    };

    const updateSolutionStep = (index: number, field: 'title' | 'description', value: string) => {
        const updated = [...formData.solutionSteps];
        updated[index][field] = value;
        setFormData({ ...formData, solutionSteps: updated });
    };

    const updateStat = (index: number, field: 'value' | 'label', value: string) => {
        const updated = [...formData.stats];
        updated[index][field] = value;
        setFormData({ ...formData, stats: updated });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-700">Title *</label>
                        <input
                            type="text"
                            required
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-700">Subtitle *</label>
                        <input
                            type="text"
                            required
                            value={formData.subtitle}
                            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Slug *</label>
                        <input
                            type="text"
                            required
                            value={formData.slug}
                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                            placeholder="url-friendly-slug"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Client *</label>
                        <input
                            type="text"
                            required
                            value={formData.client}
                            onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Industry *</label>
                        <input
                            type="text"
                            required
                            value={formData.industry}
                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Location *</label>
                        <input
                            type="text"
                            required
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-700">Overview *</label>
                        <textarea
                            rows={4}
                            required
                            value={formData.overview}
                            onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Project Details */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Project Details</h2>
                <div className="space-y-6">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Services</label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={newService}
                                onChange={(e) => setNewService(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addItem('services', newService, setNewService))}
                                className="flex-1 bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="Add a service"
                            />
                            <button
                                type="button"
                                onClick={() => addItem('services', newService, setNewService)}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-lg transition-colors"
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {formData.services.map((service, index) => (
                                <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                    {service}
                                    <button type="button" onClick={() => removeItem('services', index)} className="hover:text-purple-900">
                                        <X size={14} />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Technologies</label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={newTech}
                                onChange={(e) => setNewTech(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addItem('technologies', newTech, setNewTech))}
                                className="flex-1 bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="Add a technology"
                            />
                            <button
                                type="button"
                                onClick={() => addItem('technologies', newTech, setNewTech)}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-lg transition-colors"
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {formData.technologies.map((tech, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                    {tech}
                                    <button type="button" onClick={() => removeItem('technologies', index)} className="hover:text-blue-900">
                                        <X size={14} />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Duration</label>
                            <input
                                type="text"
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="e.g., 6 months"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700">Team Size</label>
                            <input
                                type="text"
                                value={formData.teamSize}
                                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="e.g., 8+ Developers"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Images */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Hero Image URL *</label>
                        <input
                            type="url"
                            required
                            value={formData.imageUrl}
                            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Banner Image URL *</label>
                        <input
                            type="url"
                            required
                            value={formData.bannerImage}
                            onChange={(e) => setFormData({ ...formData, bannerImage: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Stats (4 required)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formData.stats.map((stat, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Stat {index + 1}</h3>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    required
                                    value={stat.value}
                                    onChange={(e) => updateStat(index, 'value', e.target.value)}
                                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                    placeholder="Value (e.g., 80%)"
                                />
                                <input
                                    type="text"
                                    required
                                    value={stat.label}
                                    onChange={(e) => updateStat(index, 'label', e.target.value)}
                                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                    placeholder="Label (e.g., Less Admin Work)"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Client Overview */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Client Overview Section</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            value={formData.clientOverviewTitle}
                            onChange={(e) => setFormData({ ...formData, clientOverviewTitle: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            rows={4}
                            value={formData.clientOverviewDescription}
                            onChange={(e) => setFormData({ ...formData, clientOverviewDescription: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Challenge Section */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Challenge Section</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            value={formData.challengeTitle}
                            onChange={(e) => setFormData({ ...formData, challengeTitle: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            rows={3}
                            value={formData.challengeDescription}
                            onChange={(e) => setFormData({ ...formData, challengeDescription: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Challenge Points</label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={newChallengePoint}
                                onChange={(e) => setNewChallengePoint(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addItem('challengePoints', newChallengePoint, setNewChallengePoint))}
                                className="flex-1 bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="Add a challenge point"
                            />
                            <button
                                type="button"
                                onClick={() => addItem('challengePoints', newChallengePoint, setNewChallengePoint)}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-lg transition-colors"
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                        <div className="space-y-2">
                            {formData.challengePoints.map((point, index) => (
                                <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-start justify-between">
                                    <span className="text-sm text-gray-700">{point}</span>
                                    <button type="button" onClick={() => removeItem('challengePoints', index)} className="text-red-600 hover:text-red-800">
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Conclusion</label>
                        <textarea
                            rows={2}
                            value={formData.challengeConclusion}
                            onChange={(e) => setFormData({ ...formData, challengeConclusion: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="url"
                            value={formData.challengeImage}
                            onChange={(e) => setFormData({ ...formData, challengeImage: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Solution Section */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Solution Section</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            value={formData.solutionTitle}
                            onChange={(e) => setFormData({ ...formData, solutionTitle: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            rows={3}
                            value={formData.solutionDescription}
                            onChange={(e) => setFormData({ ...formData, solutionDescription: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium text-gray-700">Solution Steps</label>
                            <button
                                type="button"
                                onClick={addSolutionStep}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-colors"
                            >
                                <Plus size={16} /> Add Step
                            </button>
                        </div>
                        <div className="space-y-3">
                            {formData.solutionSteps.map((step, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-sm font-medium text-gray-700">Step {index + 1}</h4>
                                        <button type="button" onClick={() => removeSolutionStep(index)} className="text-red-600 hover:text-red-800">
                                            <X size={16} />
                                        </button>
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            value={step.title}
                                            onChange={(e) => updateSolutionStep(index, 'title', e.target.value)}
                                            className="w-full bg-white border border-gray-300 rounded-lg p-2 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                            placeholder="Step title"
                                        />
                                        <textarea
                                            rows={2}
                                            value={step.description}
                                            onChange={(e) => updateSolutionStep(index, 'description', e.target.value)}
                                            className="w-full bg-white border border-gray-300 rounded-lg p-2 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                            placeholder="Step description"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="url"
                            value={formData.solutionImage}
                            onChange={(e) => setFormData({ ...formData, solutionImage: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Impact Section */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Impact Section</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            value={formData.impactTitle}
                            onChange={(e) => setFormData({ ...formData, impactTitle: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            rows={3}
                            value={formData.impactDescription}
                            onChange={(e) => setFormData({ ...formData, impactDescription: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Impact Points</label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={newImpactPoint}
                                onChange={(e) => setNewImpactPoint(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addItem('impactPoints', newImpactPoint, setNewImpactPoint))}
                                className="flex-1 bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                                placeholder="Add an impact point"
                            />
                            <button
                                type="button"
                                onClick={() => addItem('impactPoints', newImpactPoint, setNewImpactPoint)}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-lg transition-colors"
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                        <div className="space-y-2">
                            {formData.impactPoints.map((point, index) => (
                                <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-start justify-between">
                                    <span className="text-sm text-gray-700">{point}</span>
                                    <button type="button" onClick={() => removeItem('impactPoints', index)} className="text-red-600 hover:text-red-800">
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Conclusion</label>
                        <textarea
                            rows={2}
                            value={formData.impactConclusion}
                            onChange={(e) => setFormData({ ...formData, impactConclusion: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="url"
                            value={formData.impactImage}
                            onChange={(e) => setFormData({ ...formData, impactImage: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Testimonial (Optional) */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Testimonial (Optional)</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Quote</label>
                        <textarea
                            rows={3}
                            value={formData.testimonialQuote}
                            onChange={(e) => setFormData({ ...formData, testimonialQuote: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Author</label>
                            <input
                                type="text"
                                value={formData.testimonialAuthor}
                                onChange={(e) => setFormData({ ...formData, testimonialAuthor: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700">Position</label>
                            <input
                                type="text"
                                value={formData.testimonialPosition}
                                onChange={(e) => setFormData({ ...formData, testimonialPosition: e.target.value })}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="url"
                            value={formData.testimonialImage}
                            onChange={(e) => setFormData({ ...formData, testimonialImage: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Inspirational Quote (Optional) */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Inspirational Quote (Optional)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Quote Text</label>
                        <textarea
                            rows={2}
                            value={formData.quoteText}
                            onChange={(e) => setFormData({ ...formData, quoteText: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Author</label>
                        <input
                            type="text"
                            value={formData.quoteAuthor}
                            onChange={(e) => setFormData({ ...formData, quoteAuthor: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* UI Styling */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">UI Styling</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Gradient</label>
                        <input
                            type="text"
                            value={formData.gradient}
                            onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                            placeholder="e.g., from-violet-500 to-purple-600"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Icon</label>
                        <input
                            type="text"
                            value={formData.icon}
                            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                            placeholder="e.g., search, trending, shield"
                        />
                    </div>
                </div>
            </div>

            {/* SEO Settings */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">SEO Settings</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Meta Title</label>
                        <input
                            type="text"
                            value={formData.metaTitle}
                            onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                            placeholder="SEO Title (defaults to case study title if empty)"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Meta Description</label>
                        <textarea
                            rows={3}
                            value={formData.metaDescription}
                            onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                            placeholder="SEO Description (defaults to overview if empty)"
                        />
                    </div>
                    <div>
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
            </div>

            {/* Status */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Status</h2>
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
                        {formData.isActive ? 'This case study will be visible on the website' : 'This case study will be hidden from the website'}
                    </span>
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Saving...' : submitLabel}
                </button>
            </div>
        </form>
    );
}
