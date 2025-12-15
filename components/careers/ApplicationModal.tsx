"use client";

import { useState, useRef } from "react";
import { X, Upload, Check, Loader2, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
    jobId: number;
}

export default function ApplicationModal({
    isOpen,
    onClose,
    jobTitle,
    jobId,
}: ApplicationModalProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        // Step 1: Personal Info
        name: "",
        email: "",
        phone: "",
        linkedin: "",

        // Step 2: Experience & Skills
        experience: "",
        currentCompany: "",
        skills: [] as string[],
        primaryTechnology: "",

        // Step 3: Additional Info
        message: "",
        noticePeriod: "",
        expectedSalary: "",
        relocate: "",
    });

    const [skillInput, setSkillInput] = useState("");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddSkill = () => {
        if (skillInput.trim() && formData.skills.length < 10) {
            setFormData(prev => ({
                ...prev,
                skills: [...prev.skills, skillInput.trim()]
            }));
            setSkillInput("");
        }
    };

    const handleRemoveSkill = (index: number) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index)
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setError("File size must be less than 5MB");
                return;
            }
            setFileName(file.name);
            setError(null);
        }
    };

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const data = new FormData();
            data.append("jobTitle", jobTitle);
            data.append("jobId", jobId.toString());
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("linkedin", formData.linkedin);
            data.append("experience", formData.experience);
            data.append("currentCompany", formData.currentCompany);
            data.append("skills", formData.skills.join(", "));
            data.append("primaryTechnology", formData.primaryTechnology);
            data.append("message", formData.message);
            data.append("noticePeriod", formData.noticePeriod);
            data.append("expectedSalary", formData.expectedSalary);
            data.append("relocate", formData.relocate);

            if (fileInputRef.current?.files?.[0]) {
                data.append("resume", fileInputRef.current.files[0]);
            } else {
                throw new Error("Please upload your resume");
            }

            const response = await fetch("/api/careers/apply", {
                method: "POST",
                body: data,
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || "Failed to submit application");
            }

            setIsSuccess(true);
            setTimeout(() => {
                onClose();
                setIsSuccess(false);
                setCurrentStep(1);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    linkedin: "",
                    experience: "",
                    currentCompany: "",
                    skills: [],
                    primaryTechnology: "",
                    message: "",
                    noticePeriod: "",
                    expectedSalary: "",
                    relocate: "",
                });
                setFileName(null);
            }, 3000);
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const isStep1Valid = formData.name && formData.email && formData.phone;
    const isStep2Valid = formData.experience && formData.primaryTechnology && formData.skills.length > 0;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
                        onClick={(e) => e.target === e.currentTarget && onClose()}
                    >
                        <div className="bg-[#1a1325] border border-white/10 rounded-2xl shadow-2xl w-full max-w-2xl my-8 relative">
                            {/* Header */}
                            <div className="p-6 border-b border-white/10">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-2">
                                            Apply for {jobTitle}
                                        </h2>
                                        <p className="text-sm text-white/60">
                                            Step {currentStep} of 3
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="text-white/60 hover:text-white transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-4 flex gap-2">
                                    {[1, 2, 3].map((step) => (
                                        <div
                                            key={step}
                                            className={`h-1 flex-1 rounded-full transition-colors ${step <= currentStep
                                                ? "bg-gradient-to-r from-purple-600 to-blue-600"
                                                : "bg-white/10"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Success Message */}
                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute inset-0 bg-[#1a1325] rounded-2xl flex items-center justify-center z-10"
                                >
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Check className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            Application Submitted!
                                        </h3>
                                        <p className="text-white/60">
                                            We'll review your application and get back to you soon.
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6">
                                <AnimatePresence mode="wait">
                                    {/* Step 1: Personal Information */}
                                    {currentStep === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-4"
                                        >
                                            <h3 className="text-lg font-semibold text-white mb-4">
                                                Personal Information
                                            </h3>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder="john@example.com"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    LinkedIn Profile (optional)
                                                </label>
                                                <input
                                                    type="url"
                                                    name="linkedin"
                                                    value={formData.linkedin}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder="https://linkedin.com/in/johndoe"
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 2: Experience & Skills */}
                                    {currentStep === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-4"
                                        >
                                            <h3 className="text-lg font-semibold text-white mb-4">
                                                Experience & Skills
                                            </h3>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Years of Experience *
                                                </label>
                                                <select
                                                    name="experience"
                                                    required
                                                    value={formData.experience}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors [&>option]:bg-[#1a1325]"
                                                >
                                                    <option value="">Select experience</option>
                                                    <option value="0-1">0-1 years</option>
                                                    <option value="1-3">1-3 years</option>
                                                    <option value="3-5">3-5 years</option>
                                                    <option value="5-7">5-7 years</option>
                                                    <option value="7-10">7-10 years</option>
                                                    <option value="10+">10+ years</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Current/Last Company
                                                </label>
                                                <input
                                                    type="text"
                                                    name="currentCompany"
                                                    value={formData.currentCompany}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder="My Company"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Primary Technology/Framework *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="primaryTechnology"
                                                    required
                                                    value={formData.primaryTechnology}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder="e.g., React, Node.js, Python, etc."
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Technical Skills * (Add at least 3)
                                                </label>
                                                <div className="flex gap-2 mb-2">
                                                    <input
                                                        type="text"
                                                        value={skillInput}
                                                        onChange={(e) => setSkillInput(e.target.value)}
                                                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddSkill())}
                                                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                                        placeholder="e.g., JavaScript, AWS, Docker"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={handleAddSkill}
                                                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {formData.skills.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-lg text-sm flex items-center gap-2"
                                                        >
                                                            {skill}
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveSkill(index)}
                                                                className="hover:text-white transition-colors"
                                                            >
                                                                <X className="w-3 h-3" />
                                                            </button>
                                                        </span>
                                                    ))}
                                                </div>
                                                {formData.skills.length < 3 && (
                                                    <p className="text-xs text-yellow-400 mt-2">
                                                        Please add at least 3 skills
                                                    </p>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 3: Additional Info & Resume */}
                                    {currentStep === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-4"
                                        >
                                            <h3 className="text-lg font-semibold text-white mb-4">
                                                Additional Information
                                            </h3>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Notice Period
                                                </label>
                                                <select
                                                    name="noticePeriod"
                                                    value={formData.noticePeriod}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors [&>option]:bg-[#1a1325]"
                                                >
                                                    <option value="">Select notice period</option>
                                                    <option value="immediate">Immediate</option>
                                                    <option value="15-days">15 days</option>
                                                    <option value="1-month">1 month</option>
                                                    <option value="2-months">2 months</option>
                                                    <option value="3-months">3 months</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Willing to Relocate?
                                                </label>
                                                <select
                                                    name="relocate"
                                                    value={formData.relocate}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors [&>option]:bg-[#1a1325]"
                                                >
                                                    <option value="">Select an option</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                    <option value="depends">Depends on location</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Resume/CV *
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        ref={fileInputRef}
                                                        type="file"
                                                        accept=".pdf,.doc,.docx"
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => fileInputRef.current?.click()}
                                                        className="w-full bg-white/5 border border-white/10 border-dashed rounded-lg px-4 py-8 text-white hover:border-purple-500 transition-colors flex flex-col items-center gap-2"
                                                    >
                                                        <Upload className="w-8 h-8 text-purple-400" />
                                                        <span className="text-sm">
                                                            {fileName || "Click to upload your resume"}
                                                        </span>
                                                        <span className="text-xs text-white/60">
                                                            PDF or DOCX (Max 5MB)
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Cover Letter / Additional Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                                    placeholder="Tell us why you're interested in this position..."
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Error Message */}
                                {error && (
                                    <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                                        {error}
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex items-center gap-3 mt-6">
                                    {currentStep > 1 && (
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium transition-colors"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                            Back
                                        </button>
                                    )}

                                    {currentStep < 3 ? (
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            disabled={
                                                (currentStep === 1 && !isStep1Valid) ||
                                                (currentStep === 2 && !isStep2Valid)
                                            }
                                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Continue
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !fileName}
                                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <Check className="w-5 h-5" />
                                                    Submit Application
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
