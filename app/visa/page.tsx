// app/visa/page.tsx
'use client';

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import { getImageUrl } from "@/sanity/lib/image";
import { motion, AnimatePresence } from "motion/react";

interface Visa {
  _id: string;
  name: string;
  slug: { current: string };
  description: string;
  image?: {
    asset: any;
    alt?: string;
  };
  longestStay: string;
  scopeOfAcceptance: string;
  processingTime: string;
  price: string;
  featured: boolean;
  order: number;
  content: string;
}

export default function VisaPage() {
  const [visas, setVisas] = useState<Visa[]>([]);
  const [expandedVisa, setExpandedVisa] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVisas() {
      try {
        const query = `*[_type == "visa"] | order(order asc) {
          _id,
          name,
          slug,
          description,
          image {
            asset,
            alt
          },
          longestStay,
          scopeOfAcceptance,
          processingTime,
          price,
          featured,
          order,
          content
        }`;
        
        const data = await client.fetch(query);
        setVisas(data);
      } catch (error) {
        console.error('Error fetching visas:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchVisas();
  }, []);

  const toggleExpand = (visaId: string) => {
    setExpandedVisa(expandedVisa === visaId ? null : visaId);
  };

  // Loading skeleton component
  const VisaSkeleton = () => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 relative h-48 sm:h-auto min-h-[200px] bg-gray-300 dark:bg-gray-700 animate-pulse" />
        <div className="sm:w-2/3 p-6 flex flex-col space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/4 animate-pulse" />
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
            </div>
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-20 ml-4 animate-pulse" />
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
              <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
              <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse" />
            </div>
            <div className="col-span-2 space-y-2">
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3 animate-pulse" />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/5 animate-pulse" />
            </div>
          </div>
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-8 md:p-10">
      {/* Header Section */}
      <motion.div
        className="relative rounded-3xl overflow-hidden mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
          style={{ backgroundImage: `url(${globe_image.src})` }}
        />
        <div className="absolute inset-0 bg-[#1e4396]/90" />
        
        <div className="relative z-10 py-16 px-4 sm:px-6 md:px-8">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Visa Services
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-zinc-100 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Professional, efficient, and reliable visa processing services
          </motion.p>
        </div>
      </motion.div>

      {/* Visas Grid */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <VisaSkeleton />
              </motion.div>
            ))}
          </div>
        ) : visas.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Unable to find any visas at this time
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {visas.map((visa, index) => (
              <motion.div
                key={visa._id}
                className="flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" as const }}
              >
                {/* Main Card */}
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image Section */}
                    <div className="sm:w-1/3 relative h-48 sm:h-auto min-h-[200px] overflow-hidden">
                      {visa.image ? (
                        <motion.div
                          className="w-full h-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4, ease: "easeOut" as const }}
                        >
                          <Image
                            src={getImageUrl(visa.image.asset)}
                            alt={visa.image.alt || visa.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                          <span className="text-white text-4xl font-bold">
                            {visa.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="sm:w-2/3 p-6 flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {visa.description}
                          </p>
                          <h2 className="text-xl sm:text-2xl font-bold text-[#045eb8] dark:text-blue-400">
                            {visa.name}
                          </h2>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-2xl font-bold text-[#045eb8] dark:text-blue-400">
                            {visa.price}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4 flex-1">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Longest Stay</p>
                          <p className="text-base font-semibold text-gray-900 dark:text-white">{visa.longestStay}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Processing Time</p>
                          <p className="text-base font-semibold text-gray-900 dark:text-white">{visa.processingTime}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Requirements</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">{visa.scopeOfAcceptance}</p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-4">
                        <motion.button
                          onClick={() => toggleExpand(visa._id)}
                          className="w-full px-6 py-2.5 bg-[#045eb8] hover:bg-[#004e9c] text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          Details
                          <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: expandedVisa === visa._id ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" as const }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Expandable Content Section */}
                <AnimatePresence>
                  {expandedVisa === visa._id && (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" as const }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="bg-white dark:bg-gray-800 shadow-lg p-6">
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                            Content
                          </h3>
                          <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                            {visa.content}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 