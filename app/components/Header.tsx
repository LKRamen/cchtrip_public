"use client";

import Image from "next/image";
import favicon from "../assets/favicon.png";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavDropdown from "./NavDropdown";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const travelServices = [
        { name: "European Tours", href: "http://cchtrip.bianyou.com/" },
        { name: "Group Tours", href: "https://cchtrip.haopingyou.com/" },
        { name: "Cruise Search Engine", href: "http://cruise.cchtrip.com" }
    ];

    const navItems = [
        { name: "Visa", href: "/visa" },
        { name: "Cruise Guide", href: "/cruiseGuide" },
    ];

    const travelInsurance = [
        { name: "Trip Protection", href: "https://www.imglobal.com/img-producer-insurance-plans?IMGAC=543937&app_method=&svi=&uservar=Susan&productType=trip"},
        { name: "Student Plans", href: "https://www.trawickinternational.com/?agent=18065"},
        { name: "Cancellation Insurance", href: "http://www.travelinsured.com/agency?agency=62113"},
        { name: "Schengen Insurance", href: "https://quote.worldtrips.com/CTP/start?branchID=NjgyNjY4NA%3D%3D&agentID=NjgyNjcwNA%3D%3D&pas=1"},
    ];

    return (
        <nav className="fixed w-full z-50 top-0 bg-[#045eb8] shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo Section */}
                <Link href="/" className="flex items-center space-x-3">
                    <div className="relative w-12 h-12 bg-white rounded-full p-1.5 flex items-center justify-center">
                        <Image 
                            src={favicon} 
                            fill
                            className="object-contain" 
                            alt='CCH ICON'
                        />
                    </div>
                    <span className="self-center text-xl md:text-2xl font-bold text-white whitespace-nowrap">
                        彩虹之旅 | CCH Trip
                    </span>
                </Link>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-white/20 active:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-150 active:scale-95"
                    aria-controls="navbar-dropdown"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>

                {/* Navigation Items */}
                <div 
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } w-full md:block md:w-auto`}
                    id="navbar-dropdown"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-white/10 backdrop-blur-sm md:space-x-6 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                    {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                href={item.href}
                                className="block py-3 px-4 text-white rounded-lg
                                        hover:bg-white/20 
                                        active:bg-white/30 active:scale-95
                                        md:hover:bg-[#004e9c]
                                        md:active:bg-transparent md:active:scale-100
                                        transition-all duration-150
                                        md:hover:shadow-lg md:hover:scale-105"  // ← removed hover:font-bold
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                            </li>
                        ))}
                        
                        {/* Dropdown Menus */}
                        <NavDropdown 
                            title="Travel Services" 
                            items={travelServices} 
                            onMenuClose={() => setIsMenuOpen(false)} 
                        />
                        
                        <NavDropdown 
                            title="Travel Insurance" 
                            items={travelInsurance} 
                            onMenuClose={() => setIsMenuOpen(false)} 
                        />  
                    </ul>
                </div>
            </div>
            <footer className="bg-white text-black py-1">
            </footer>

        </nav>
        
    );
}