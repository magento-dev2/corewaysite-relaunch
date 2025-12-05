"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";

interface JobPosition {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    isActive: boolean;
    createdAt: string;
}

export default function AdminPositionsPage() {
    const [positions, setPositions] = useState<JobPosition[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

    useEffect(() => {
        fetchPositions();
    }, []);

    const fetchPositions = async () => {
        try {
            const res = await fetch("/api/admin/positions");
            if (!res.ok) {
                throw new Error("Failed to fetch positions");
            }
            const data = await res.json();
            // Ensure data is an array
            setPositions(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching positions:", error);
            setPositions([]); // Set to empty array on error
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this position?")) return;

        try {
            const res = await fetch(`/api/admin/positions/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setPositions(positions.filter((p) => p.id !== id));
            }
        } catch (error) {
            console.error("Error deleting position:", error);
        }
    };

    const handleToggleStatus = async (id: string, currentStatus: boolean) => {
        try {
            const position = positions.find((p) => p.id === id);
            if (!position) return;

            const res = await fetch(`/api/admin/positions/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...position, isActive: !currentStatus }),
            });

            if (res.ok) {
                setPositions(
                    positions.map((p) =>
                        p.id === id ? { ...p, isActive: !currentStatus } : p
                    )
                );
            }
        } catch (error) {
            console.error("Error updating position status:", error);
        }
    };

    const filteredPositions = positions.filter((p) => {
        if (filter === "active") return p.isActive;
        if (filter === "inactive") return !p.isActive;
        return true;
    });

    return (
        <div className="min-h-screen bg-[#0E0918] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Job Positions
                        </h1>
                        <p className="text-gray-400">
                            Manage open positions on the careers page
                        </p>
                    </div>
                    <Link
                        href="/admin/positions/create"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                    >
                        <Plus className="w-5 h-5" />
                        Add Position
                    </Link>
                </div>

                {/* Filters */}
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === "all"
                            ? "bg-purple-600 text-white"
                            : "bg-white/5 text-gray-400 hover:bg-white/10"
                            }`}
                    >
                        All ({positions.length})
                    </button>
                    <button
                        onClick={() => setFilter("active")}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === "active"
                            ? "bg-purple-600 text-white"
                            : "bg-white/5 text-gray-400 hover:bg-white/10"
                            }`}
                    >
                        Active ({positions.filter((p) => p.isActive).length})
                    </button>
                    <button
                        onClick={() => setFilter("inactive")}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === "inactive"
                            ? "bg-purple-600 text-white"
                            : "bg-white/5 text-gray-400 hover:bg-white/10"
                            }`}
                    >
                        Inactive ({positions.filter((p) => !p.isActive).length})
                    </button>
                </div>

                {/* Table */}
                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : filteredPositions.length === 0 ? (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-12 text-center">
                        <p className="text-gray-400 text-lg">No positions found</p>
                    </div>
                ) : (
                    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-white/5 border-b border-white/10">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                                            Title
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                                            Department
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                                            Location
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                                            Type
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {filteredPositions.map((position) => (
                                        <tr
                                            key={position.id}
                                            className="hover:bg-white/5 transition-colors"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="text-white font-medium">
                                                    {position.title}
                                                </div>
                                                <div className="text-gray-400 text-sm">
                                                    {position.experience}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-300">
                                                {position.department}
                                            </td>
                                            <td className="px-6 py-4 text-gray-300">
                                                {position.location}
                                            </td>
                                            <td className="px-6 py-4 text-gray-300">
                                                {position.type}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() =>
                                                        handleToggleStatus(position.id, position.isActive)
                                                    }
                                                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all ${position.isActive
                                                        ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                                                        : "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30"
                                                        }`}
                                                >
                                                    {position.isActive ? (
                                                        <>
                                                            <Eye className="w-3 h-3" />
                                                            Active
                                                        </>
                                                    ) : (
                                                        <>
                                                            <EyeOff className="w-3 h-3" />
                                                            Inactive
                                                        </>
                                                    )}
                                                </button>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        href={`/admin/positions/edit/${position.id}`}
                                                        className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors"
                                                    >
                                                        <Edit className="w-4 h-4" />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(position.id)}
                                                        className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
