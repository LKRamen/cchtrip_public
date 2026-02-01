"use client";
import Image from "next/image";
import cch_wechat from "./assets/cch_wechat.png";
import airplane_symbol from "./assets/home_airplane_symbol.png"
import globe_image from "./assets/globe_image.jpg"
import TravelPartners from "./components/TravelPartners";
import Link from "next/link";
import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, AlertCircle, Ship, Search } from 'lucide-react';

export default function Home() {
  const cruiseUrl = "https://cruise.cchtrip.com/";

  return (

    <div className="p-4 sm:p-8 md:p-10">
      <div className="relative flex flex-col md:flex-row justify-center rounded-3xl p-4 md:p-8 gap-4 md:gap-6 overflow-hidden bg-white dark:bg-blue-700">
        
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${globe_image.src})` }}
        />
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full">
          {/* Text Section */}
          <div className="flex flex-col md:w-2/3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-1 text-blue-700 dark:text-white font-bold">
              🌈 ｜彩虹之旅｜业务咨询服务
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg text-black dark:text-zinc-200 px-1 py-3">
              加入彩虹之旅咨询群，进一步给您更新鲜的资讯和更贴心的服务，包括但不限于咨询机票、邮轮、旅游、公证认证问题等，我们会竭诚为您服务，感谢您对彩虹之旅的信任！
            </h2>
          </div>
          
          {/* QR Code Section */}
          <div className="flex justify-center md:justify-end items-start">
            <div className="p-1 bg-gradient-to-r dark:from-purple-700 dark:to-red-400 from-blue-600 to-purple-600 rounded">
              <Image 
                  src={cch_wechat} 
                  className="object-contain w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" 
                  alt='CCH WeChat QR Code'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cruise Search Engine Section */}
      <div className="relative my-5 md:my-10 py-8 md:py-12 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 dark:from-purple-700 dark:to-blue-800">
        <div className="relative z-10 px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2 flex items-center gap-3">
              <Ship className="w-8 h-8 md:w-12 md:h-12" />
              邮轮搜索引擎
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg text-zinc-100 text-center max-w-3xl">
              探索全球豪华邮轮航线，查找最优惠的邮轮行程
            </h2>
          </div>
          
          {/* Demo Video Container */}
          <div className="w-full max-w-7xl mx-auto">
            <div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden relative w-full h-48 sm:h-64 md:h-96 lg:h-[500px] xl:h-[600px]"
            >
              <iframe
                src="https://www.youtube.com/embed/tsvyC_aEA6I?autoplay=1&mute=1&loop=1&playlist=tsvyC_aEA6I&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                className="w-full h-full object-cover"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ border: 'none', pointerEvents: 'none' }}
              />
            </div>

            {/* Primary CTA Button */}
            <div className="text-center mt-6">
              <a
                href={cruiseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl  hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-center"
              >
                <ExternalLink className="w-5 h-5" />
                在新窗口中开始搜索
              </a>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-4 space-y-2">
              <p className="text-xs text-white/70">
                🎥 上方演示展示了邮轮搜索流程
              </p>
              <p className="text-xs text-white/60">
                点击按钮即可进入完整搜索引擎
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
      
      {/* Services Section */}
      <div className="relative my-5 md:my-10 py-10 md:py-16 rounded-3xl overflow-hidden">
        
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 dark:opacity-90"
          style={{ backgroundImage: `url(${globe_image.src})` }}
        />
        
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-blue-700/90 dark:bg-purple-700/90" />
        
        {/* Content Layer */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col items-center max-w-6xl mx-auto">
            <Image 
              src={airplane_symbol} 
              className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" 
              alt='CCH Services'
            />
            <div className="mt-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-1 text-white font-bold text-center">
                主要服务
              </h1>
            </div>
            <div className="mt-4 px-4 sm:px-8 md:px-12 lg:px-20">
              <h2 className="text-sm sm:text-base md:text-lg text-zinc-200 text-center leading-relaxed">
                我们提供多种服务，旅游游轮，各种委托认证，海牙认证，出生纸认证，结婚证认证，离婚证认证，死亡证明认证，护照更新，绿卡更新，旅行证回美证，健在证，红蓝卡，ID/驾照更新，A5/C8卡更新，纽约市民卡更新，低收入粮食劵，水果金，残疾入籍和留学申请等。
              </h2>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto my-8">
            <div className="mx-4 sm:mx-8 md:mx-12 h-[0.1rem] bg-white/50"/>
          </div>
          
          {/* Cards Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
              <div className="border-2 border-white/50 rounded-3xl p-6 text-white text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">🚗旅游</h2>
                <h3 className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
                  多种线路供您选择，我们的足迹遍布全球为您提供最放心最经济最值得的选择。
                </h3>
              </div>
              <div className="border-2 border-white/50 rounded-3xl p-6 text-white text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">✈️机票</h2>
                <h3 className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
                  全球航线，千家航司。以最优惠最经济之选带您飞往全球各地。
                </h3>
              </div>
              <div className="border-2 border-white/50 rounded-3xl p-6 text-white text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">🚢邮轮</h2>
                <h3 className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
                  豪华邮轮预约，2000+ 航线享受多样化的海上体验。
                </h3>
              </div>
            </div>
            
            {/* Second row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 mt-6 md:mt-8">
              <div className="border-2 border-white/50 rounded-3xl p-6 text-white text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">📜委托公证</h2>
                <h3 className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
                  提供各种委托公证申请，委托书，公证书。
                </h3>
              </div>
              <div className="border-2 border-white/50 rounded-3xl p-6 text-white text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">📄中国签证</h2>
                <h3 className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
                  代办Q1 团聚类签证，Q2 探亲类签证及其他类型，祝您归国无忧。
                </h3>
              </div>
              <div className="border-2 border-white/50 rounded-3xl p-6 text-white text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">🛂回美证</h2>
                <h3 className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
                  回美证申请，再次入境美国/绿卡身份返国必备！
                </h3>
              </div>
            </div>
            
            {/* Third row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 mt-6 md:mt-8">
              <div className="border-2 border-white/50 rounded-3xl p-6 text-white text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">🗂️学历认证</h2>
                <h3 className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
                  申请教育学历书面认证和电子认证。
                </h3>
              </div>
              <div className="border-2 border-white/50 rounded-3xl p-6 text-white text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">🪪更换护照</h2>
                <h3 className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
                  护照更新，护照挂失，一站式办理服务便利快捷。
                </h3>
              </div>
              <div className="border-2 border-white/50 rounded-3xl p-6 text-white text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">📑申根签证</h2>
                <h3 className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
                  预约申请申根签证，可前往申根国家在其境内过境。
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-5 md:my-10 py-10 md:py-16 rounded-3xl overflow-hidden">
        
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 dark:opacity-90"
          style={{ backgroundImage: `url(${globe_image.src})` }}
        />
        
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-purple-700/90 dark:bg-sky-400/90" />
        
        {/* Content Layer */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
          <TravelPartners />
        </div>
      </div>
    </div>
  );
}
