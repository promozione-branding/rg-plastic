"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    FiGrid,
    FiFileText,
    FiMessageSquare,
    FiPackage,
    FiUsers,
    FiSettings,
    FiLogOut,
    FiMenu,
    FiX,
    FiChevronRight,
    FiExternalLink,
} from "react-icons/fi";

const menuItems = [
    {
        name: "Dashboard",
        href: "/admin",
        icon: FiGrid,
    },
    {
        name: "Blogs",
        href: "/admin/blogs",
        icon: FiFileText,
    },
   
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleLogout = () => {
        document.cookie =
            "admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        window.location.href = "/admin/login";
    };

    return (
        <>
            {/* Mobile Header */}
            <div className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:hidden">
                <Link
                    href="/admin"
                    className="text-lg font-bold text-[#00356B]"
                >
                    Dharam Eng Works
                </Link>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
                >
                    {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
                    border-r border-gray-200 bg-white
                    transition-transform duration-300
                    lg:translate-x-0
                    ${
                        mobileOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
            >
                {/* Logo */}
                <div className="flex h-20 items-center border-b border-gray-100 px-6">
                    <Link
                        href="/admin"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00356B] text-lg font-bold text-white shadow-sm">
                            D
                        </div>

                        <div>
                            <h1 className="text-base font-bold text-gray-900">
                                Dharam Eng Works
                            </h1>

                            <p className="text-xs text-gray-500">
                                Admin Panel
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto px-4 py-6">
                    <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                        Main Menu
                    </p>

                    <nav className="space-y-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;

                            const isActive =
                                item.href === "/admin"
                                    ? pathname === "/admin"
                                    : pathname.startsWith(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`
                                        group flex items-center justify-between
                                        rounded-xl px-3 py-3
                                        text-sm font-medium
                                        transition-all duration-200
                                        ${
                                            isActive
                                                ? "bg-[#00356B]/10 text-[#00356B]"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`
                                                flex h-9 w-9 items-center justify-center rounded-lg
                                                transition
                                                ${
                                                    isActive
                                                        ? "bg-[#00356B] text-white shadow-sm"
                                                        : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                                                }
                                            `}
                                        >
                                            <Icon size={18} />
                                        </div>

                                        <span>{item.name}</span>
                                    </div>

                                    {isActive && (
                                        <FiChevronRight
                                            size={16}
                                            className="text-[#00356B]"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Quick Access */}
                    <div className="mt-8">
                        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                            Quick Access
                        </p>

                        <Link
                            href="/"
                            target="_blank"
                            className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                                <FiExternalLink size={17} />
                            </div>

                            <span className="flex-1">
                                View Website
                            </span>

                            <FiExternalLink
                                size={14}
                                className="text-gray-400"
                            />
                        </Link>
                    </div>
                </div>

                {/* Admin Profile */}
                <div className="border-t border-gray-100 p-4">
                    <div className="mb-3 flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00356B] font-semibold text-white">
                            D
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-gray-900">
                                Administrator
                            </p>

                            <p className="truncate text-xs text-gray-500">
                                Super Admin
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-600"
                    >
                        <FiLogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Desktop Sidebar Space */}
            <div className="hidden w-72 shrink-0 lg:block" />
        </>
    );
}