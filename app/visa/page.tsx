// app/visa/page.tsx
'use client';

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import { getImageUrl } from "@/sanity/lib/image";

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
        {/* Image Skeleton */}
        <div className="sm:w-1/3 relative h-48 sm:h-auto min-h-[200px] bg-gray-300 dark:bg-gray-700 animate-pulse" />
        
        {/* Content Skeleton */}
        <div className="sm:w-2/3 p-6 flex flex-col space-y-4">
          {/* Header Skeleton */}
          <div className="flex justify-between items-start">
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/4 animate-pulse" />
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
            </div>
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-20 ml-4 animate-pulse" />
          </div>

          {/* Details Grid Skeleton */}
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

          {/* Button Skeleton */}
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-8 md:p-10">
      {/* Header Section */}
      <div className="relative rounded-3xl overflow-hidden mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${globe_image.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-purple-700/90 dark:to-blue-700/90" />
        
        <div className="relative z-10 py-16 px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-4">
            签证服务
          </h1>
          <p className="text-lg sm:text-xl text-zinc-100 text-center max-w-3xl mx-auto">
            专业、高效、可靠的签证办理服务
          </p>
        </div>
      </div>

      {/* Visas Grid */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          /* Loading State - Show 6 skeleton cards */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...Array(6)].map((_, index) => (
              <VisaSkeleton key={index} />
            ))}
          </div>
        ) : visas.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              暂无签证信息
            </p>
          </div>
        ) : (
          /* Loaded Visas */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {visas.map((visa) => (
              <div 
                key={visa._id}
                className="flex flex-col"
              >
                {/* Main Card - Fixed Height */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row">
                    {/* Image Section */}
                    <div className="sm:w-1/3 relative h-48 sm:h-auto min-h-[200px]">
                      {visa.image ? (
                        <Image
                          src={getImageUrl(visa.image.asset)}
                          alt={visa.image.alt || visa.name}
                          fill
                          className="object-cover"
                        />
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
                      {/* Header with Category and Price */}
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {visa.description}
                          </p>
                          <h2 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {visa.name}
                          </h2>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {visa.price}
                          </p>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 mt-4 flex-1">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            最长停留时间
                          </p>
                          <p className="text-base font-semibold text-gray-900 dark:text-white">
                            {visa.longestStay}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            办理时间
                          </p>
                          <p className="text-base font-semibold text-gray-900 dark:text-white">
                            {visa.processingTime}
                          </p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            受理范围
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                            {visa.scopeOfAcceptance}
                          </p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-4">
                        <button
                          onClick={() => toggleExpand(visa._id)}
                          className="w-full px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                          查看详情
                          <svg 
                            className={`w-5 h-5 transition-transform duration-200 ${expandedVisa === visa._id ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable Content Section - Outside Main Card */}
                <div 
                  className={`transition-all duration-300 ease-in-out mt-4 ${
                    expandedVisa === visa._id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{
                    overflow: 'hidden'
                  }}
                >
                  <div className="bg-white dark:bg-gray- shadow-lg p-6">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        所需材料
                      </h3>
                      <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                        {visa.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}