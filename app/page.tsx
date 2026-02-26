"use client";
import Image from "next/image";
import cch_wechat from "./assets/cch_wechat.png";
import airplane_symbol from "./assets/home_airplane_symbol.png"
import globe_image from "./assets/globe_image.jpg"
import TravelPartners from "./components/TravelPartners";
import Link from "next/link";
import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, AlertCircle, Ship, Search } from 'lucide-react';
import { motion } from "motion/react";

export default function Home() {
  const cruiseUrl = "https://cruise.cchtrip.com/";

  return (
    <div className="p-4 sm:p-8 md:p-10">
      {/* Cruise Search Engine Section */}
      <motion.div
        className="relative py-8 md:py-12 rounded-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl"
          style={{ backgroundImage: `url(${globe_image.src})` }}
        />
          
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#045eb8]/90 rounded-3xl" />

        <div className="relative z-10 px-4 sm:px-6 md:px-8">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2 flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span
                initial={{ rotate: -15, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
              >
                <Ship className="w-8 h-8 md:w-12 md:h-12" />
              </motion.span>
              Cruise Ship Search Engine
            </motion.h1>

            <motion.h2
              className="text-sm sm:text-base md:text-lg text-zinc-100 text-center max-w-3xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              Explore global luxury cruise itineraries and find the best cruise deals.
            </motion.h2>
          </motion.div>
          
          {/* Demo Video Container */}
          <motion.div
            className="w-full max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden relative w-full h-48 sm:h-64 md:h-96 lg:h-[500px] xl:h-[600px]"
              whileHover={{ scale: 1.01, boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.youtube.com/embed/tsvyC_aEA6I?autoplay=1&mute=1&loop=1&playlist=tsvyC_aEA6I&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                className="w-full h-full object-cover"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ border: 'none', pointerEvents: 'none' }}
              />
            </motion.div>

            {/* Primary CTA Button */}
            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.a
                href={cruiseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ExternalLink className="w-5 h-5" />
                Click Here
              </motion.a>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="text-center mt-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
            >
              <p className="text-xs text-white/70">
                🎥 The demonstration above shows the cruise ship search process.
              </p>
              <p className="text-xs text-white/60">
                Click the button to access the full search engine.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}