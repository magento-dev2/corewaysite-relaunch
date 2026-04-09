"use client";

import { useEffect, useState } from "react";
import { Mail, User, Building2, CheckCircle, Clock, Search } from "lucide-react";

interface Contact {
    id: string;
    email: string;
    name: string | null;
    company: string | null;
    message: string | null;
    ndaAccepted: boolean;
    status: string;
    createdAt: string;
    updatedAt: string;
}

export default function ContactListPage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const res = await fetch("/api/contact-list");
            const data = await res.json();
            setContacts(data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        } finally {
            setLoading(false);
        }
    };

    const filtered = contacts.filter(
        (c) =>
            c.email.toLowerCase().includes(search.toLowerCase()) ||
            (c.name?.toLowerCase().includes(search.toLowerCase())) ||
            (c.company?.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="p-8">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Contact List</h1>
                    <p className="text-gray-600 mt-1">
                        Visitors who submitted the contact form
                    </p>
                </div>
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm w-full sm:w-72">
                    <Search size={16} className="text-gray-400 shrink-0" />
                    <input
                        type="text"
                        placeholder="Search by email, name, company..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full text-sm outline-none text-gray-700 placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <p className="text-2xl font-bold text-gray-900">{contacts.length}</p>
                    <p className="text-sm text-gray-500 mt-1">Total Contacts</p>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <p className="text-2xl font-bold text-green-600">
                        {contacts.filter((c) => c.status === "completed").length}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Form Completed</p>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <p className="text-2xl font-bold text-amber-500">
                        {contacts.filter((c) => c.status === "email_only").length}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Email Only</p>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-12 text-gray-600">Loading...</div>
            ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Contact</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Company</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Message</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">NDA</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filtered.map((contact) => (
                                <tr key={contact.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-semibold text-sm uppercase shrink-0">
                                                {contact.name
                                                    ? contact.name.slice(0, 2)
                                                    : contact.email.slice(0, 2)}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 text-sm">
                                                    {contact.name || <span className="text-gray-400 italic">No name</span>}
                                                </p>
                                                <p className="text-xs text-gray-500">{contact.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {contact.company || <span className="text-gray-400">—</span>}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                                        {contact.message ? (
                                            <p className="line-clamp-2">{contact.message}</p>
                                        ) : (
                                            <span className="text-gray-400">—</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        {contact.ndaAccepted ? (
                                            <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full font-medium">
                                                <CheckCircle size={12} /> Yes
                                            </span>
                                        ) : (
                                            <span className="text-sm text-gray-400">No</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        {contact.status === "completed" ? (
                                            <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full font-medium">
                                                <CheckCircle size={12} /> Completed
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded-full font-medium">
                                                <Clock size={12} /> Email Only
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {new Date(contact.createdAt).toLocaleDateString("en-IN", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        {contacts.length === 0 ? "No contacts yet." : "No contacts match your search."}
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
