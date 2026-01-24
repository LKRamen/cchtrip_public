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
        { name: "欧洲游", href: "http://cchtrip.bianyou.com/" },
        { name: "旅游团", href: "https://cchtrip.haopingyou.com/" },
        { name: "邮轮", href: "http://cruise.cchtrip.com" }
    ];

    const navItems = [
        { name: "主页", href: "/" },
        { name: "关于我们", href: "/about" },
        { name: "邮轮攻略", href: "/cruiseGuide" },
    ];

    const travelInsurance = [
        { name: "来美留学旅游保险", href: "https://www.trawickinternational.com/?agent=18065"},
        { name: "无理由取消旅游险", href: "http://www.travelinsured.com/agency?agency=62113"},
        { name: "申根保险（英文)", href: "https://quote.worldtrips.com/CTP/start?branchID=NjgyNjY4NA%3D%3D&agentID=NjgyNjcwNA%3D%3D&pas=1"},
        { name: "旅游保险（英文）", href: "https://www.imglobal.com/img-producer-insurance-plans?IMGAC=543937&app_method=&svi=&uservar=Susan&productType=trip"},
    ];

    const otherServices = [
        { name: "委托书样板", href: "/powerofattorney" },
        { name: "签证", href: "/visa" },
        { name: "无争议离婚", href: "/uncontested_divorce" },
        { name: "声明书", href: "/statement"},
        { name: "中美直飞航线一览", href: "/china_us_flight_routes"},
        { name: "特价机票讯息", href: "/discounted_airfares"},
    ];

    return (
        <nav className="fixed w-full z-50 top-0 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
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
                        彩虹之旅
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
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-white/10 backdrop-blur-sm md:space-x-2 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="block py-3 px-4 text-white rounded-lg
                                               hover:bg-white/20 
                                               active:bg-white/30 active:scale-95
                                               md:hover:bg-gradient-to-br md:hover:from-blue-700 md:hover:to-purple-700
                                               md:active:bg-transparent md:active:scale-100
                                               transition-all duration-150
                                               md:hover:shadow-lg md:hover:scale-105 hover:font-bold"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        
                        {/* Dropdown Menus */}
                        <NavDropdown 
                            title="旅游服务" 
                            items={travelServices} 
                            onMenuClose={() => setIsMenuOpen(false)} 
                        />
                        
                        <NavDropdown 
                            title="旅行保险" 
                            items={travelInsurance} 
                            onMenuClose={() => setIsMenuOpen(false)} 
                        />
                        
                        <NavDropdown 
                            title="其他服务" 
                            items={otherServices} 
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