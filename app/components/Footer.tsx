"use client";

import Image from "next/image";
import favicon_letters from "../assets/favicon_letters.png"
import { useRouter } from "next/navigation";
import cruise from "../assets/cruise.png"
import headset from "../assets/headset.png"
import airplane_globe from "../assets/airplane_globe.png"
import service_experience from "../assets/service_experience.png"

export default function Footer() {
    const router = useRouter();


    const stats = [
        {
            icon: headset,
            title: "7 X 24 小时",
            subtitle: "中英文服务",
            bgColor: "bg-blue-400"
        },
        {
            icon: airplane_globe,
            title: "1500+",
            subtitle: "旅行路线",
            bgColor: "bg-blue-500"
        },
        {
            icon: cruise,
            title: "2000+",
            subtitle: "邮轮线路",
            bgColor: "bg-blue-700"
        },
        {
            icon: service_experience,
            title: "22 年",
            subtitle: "服务经验",
            bgColor: "bg-blue-800"
        }
    ];

    return (
        <div>
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <div 
                        key={index}
                        className={`${stat.bgColor} py-8 px-6 flex flex-col items-center justify-center text-center`}
                    >
                        <div className="relative w-16 h-16 mb-4">
                            <Image 
                                src={stat.icon} 
                                fill
                                className="object-contain" 
                                alt='CCH Service Icon'
                            />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                            {stat.title}
                        </h1>
                        <h2 className="text-lg md:text-xl text-zinc-200">
                            {stat.subtitle}
                        </h2>
                    </div>
                ))}
            </div>

            {/* Contact Info Section */}
            <div className="flex flex-col items-center px-4 py-8 md:py-12">
                <div className="w-full max-w-4xl mb-6">
                    <div className="h-[0.1rem] dark:bg-white bg-zinc-500"/>
                </div>
                
                <div className="relative w-16 h-16 mb-6">
                    <Image 
                        src={favicon_letters} 
                        fill
                        className="object-contain"  
                        alt='CCH ICON'
                    />
                </div>

                {/* Contact Us Button */}
                <button
                    onClick={() => router.push('/contact')}
                    className="mb-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                    <div>联系我们</div>
                    <div>Contact Us</div>
                </button>
                
                <div className="space-y-2 text-center max-w-2xl">
                    <h1 className="text-sm sm:text-base text-zinc-600 dark:text-zinc-200">
                        24 小时服务热线：718-353-2188
                    </h1>
                    <h2 className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-200">
                        中国联系电话：+86 400-000-8218
                    </h2>
                    <h2 className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-200">
                        美国联系电话：+1 718-353-2188
                    </h2>
                    <h1 className="text-sm sm:text-base text-zinc-600 dark:text-zinc-200">
                        地址：41-25 Kissena Blvd #119，Flushing，NY 11355
                    </h1>
                    <h1 className="text-sm sm:text-base text-zinc-600 dark:text-zinc-200">
                        （法拉盛图书馆对面，百利大厦119室）
                    </h1>
                    <h1 className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-200 pt-4 font-serif">
                        © 2024 Phoenix Travel INC. All rights reserved
                    </h1>
                </div>
            </div>
        </div>
    );
}