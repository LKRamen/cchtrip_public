"use client";

import Image from "next/image";
import favicon_letters from "../assets/favicon_letters.png"
import cruise from "../assets/cruise.png"
import headset from "../assets/headset.png"
import airplane_globe from "../assets/airplane_globe.png"
import service_experience from "../assets/service_experience.png"
import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {

    const stats = [
        { icon: headset,           title: "24/7 Service",   subtitle: "English and Chinese", bgColor: "bg-blue-400" },
        { icon: airplane_globe,    title: "1500+",           subtitle: "Travel Routes",        bgColor: "bg-blue-500" },
        { icon: cruise,            title: "2000+",           subtitle: "Unique Cruises",        bgColor: "bg-blue-700" },
        { icon: service_experience,title: "22 Years",        subtitle: "Service Experience",    bgColor: "bg-blue-800" },
    ];

    const linkColumns = [
        {
            heading: "Our Services",
            links: [
                { label: "Visa Services",        href: "/visa" },
                { label: "Cruise Guide",         href: "/cruiseGuide" },
                { label: "Uncontested Divorce",  href: "/uncontested_divorce" },
                { label: "Power of Attorney",    href: "/powerofattorney" },
                { label: "Travel Insurance",     href: "" },
            ],
        },
        {
            heading: "Resources",
            links: [
                { label: "Current Affairs",           href: "/current_affairs" },
                { label: "China–US Flight Routes",    href: "/china_us_flight_routes" },
                { label: "Terms & Conditions",        href: "/terms_and_conditions" },
                { label: "Privacy Policy",            href: "/privacy_policy" },
                { label: "Statement",                 href: "/statement" },
            ],
        },
        {
            heading: "Company",
            links: [
                { label: "Contact Us",   href: "/contact" },
                { label: "About Us",     href: "/about" },
            ],
        },
    ];

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
    };

    const itemVariants = {
        hidden:  { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
    };

    return (
        <footer className="bg-[#111827] text-white">

            {/* ── Stats Bar ─────────────────────────────────────────── */}
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        className={`${stat.bgColor} py-8 px-6 flex flex-col items-center justify-center text-center`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                    >
                        <div className="relative w-14 h-14 mb-3">
                            <Image src={stat.icon} fill className="object-contain" alt={stat.subtitle} />
                        </div>
                        <p className="text-3xl md:text-4xl font-bold text-white">{stat.title}</p>
                        <p className="text-sm md:text-base text-blue-100 mt-1">{stat.subtitle}</p>
                    </motion.div>
                ))}
            </div>

            {/* ── Main Footer Body ───────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">

                {/* Top Row: Logo + Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

                    {/* Brand Column */}
                    <motion.div
                        className="flex flex-col gap-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10">
                                <Image src={favicon_letters} fill className="object-contain" alt="CCH Logo" />
                            </div>
                            <span className="text-lg font-bold tracking-wide">CCH Trip</span>
                        </div>

                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Professional travel and legal services connecting the US and China for over 22 years.
                        </p>

                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                            <Link
                                href="/contact"
                                className="inline-block px-6 py-2.5 bg-[#045eb8] hover:bg-[#004e9c] text-white text-sm font-bold rounded-lg shadow-lg transition-all duration-200"
                            >
                                Contact Us
                            </Link>
                        </motion.div>

                    </motion.div>

                    {/* Link Columns */}
                    {linkColumns.map((col, colIdx) => (
                        <motion.div
                            key={colIdx}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delayChildren: colIdx * 0.1 }}
                        >
                            <motion.h3
                                variants={itemVariants}
                                className="text-white font-bold text-sm tracking-widest uppercase mb-5"
                            >
                                {col.heading}
                            </motion.h3>
                            <ul className="space-y-3">
                                {col.links.map((link, linkIdx) => (
                                    <motion.li key={linkIdx} variants={itemVariants}>
                                        <Link
                                            href={link.href}
                                            className="text-zinc-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-4"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-zinc-700 mb-8" />

                {/* Bottom Row */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-xs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-center sm:text-left">
                        <span>📞 US: +1 718-353-2188</span>
                        <span className="hidden sm:inline text-zinc-700">|</span>
                        <span>📞 China: +86 400-000-8218</span>
                        <span className="hidden sm:inline text-zinc-700">|</span>
                        <span>📍 41-25 Kissena Blvd #119, Flushing, NY 11355</span>
                    </div>
                    <p className="font-serif text-zinc-600 whitespace-nowrap">
                        © 2024 Phoenix Travel INC. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
} 