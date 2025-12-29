"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
    name: string;
    href: string;
}

interface NavDropdownProps {
    title: string;
    items: DropdownItem[];
    onMenuClose: () => void;
}

export default function NavDropdown({ title, items, onMenuClose }: NavDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="relative">
            {/* Desktop Dropdown (hover) */}
            <div className="hidden md:block group">
                <button className="flex items-center justify-between w-full py-3 px-4 text-white rounded-lg
                                   hover:bg-gradient-to-br hover:from-blue-700 hover:to-purple-700
                                   transition-all duration-300
                                   group-hover:shadow-lg group-hover:scale-105 group-hover:font-bold">
                    {title}
                    <ChevronDown className="w-4 h-4 ml-1.5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {/* Desktop Dropdown Content */}
                <div className="absolute top-full left-0 mt-1 w-48 
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                transition-all duration-300
                                bg-white dark:bg-gray-800 
                                rounded-lg shadow-xl 
                                overflow-hidden z-50">
                    {items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-gray-800 dark:text-white
                                       hover:bg-gradient-to-br hover:from-blue-700 hover:to-purple-700 hover:text-white
                                       transition-colors duration-200
                                       text-sm md:text-base
                                       border-b border-gray-200 dark:border-gray-700
                                       last:border-b-0"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Dropdown (click) */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-full py-3 px-4 text-white rounded-lg
                               hover:bg-white/20 active:bg-white/30 active:scale-95 transition-all duration-150"
                >
                    {title}
                    <ChevronDown className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`} />
                </button>
                
                {/* Mobile Dropdown Content */}
                {isOpen && (
                    <ul className="py-2 pl-4 space-y-2">
                        {items.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="block py-2 px-4 text-white text-sm rounded-lg
                                               hover:bg-white/20 active:bg-white/30 active:scale-95 transition-all duration-150"
                                    onClick={() => {
                                        onMenuClose();
                                        setIsOpen(false);
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </li>
    );
}