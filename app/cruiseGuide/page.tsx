"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import globe_image from "../assets/globe_image.jpg";
import { getImageUrl } from "@/sanity/lib/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CruiseGuidePost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: {
    asset: any;
    alt?: string;
  };
  excerpt?: string;
}

export default function CruiseGuidePage() { 
  const [posts, setPosts] = useState<CruiseGuidePost[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialQuery = `*[_type == "cruiseGuide"] | order(publishedAt desc) [0...10] {
        _id,
        title,
        slug,
        publishedAt,
        mainImage {
          asset,
          alt
        },
        excerpt
      }`;

  useEffect(() => {
    async function fetchInitialPosts() {
      const data = await client.fetch(initialQuery);
      setPosts(data);
    }
    fetchInitialPosts();
  }, []);

  const updateCruiseGuidePosts = async () => {
    setLoading(true);
    
    if (showAll) {
      const top10Query = `*[_type == "cruiseGuide"] | order(publishedAt desc) [0...10] {
        _id,
        title,
        slug,
        publishedAt,
        mainImage {
          asset,
          alt
        },
        excerpt
      }`;
      const top10Posts = await client.fetch(top10Query);
      setPosts(top10Posts);
      setShowAll(false);
    } else {
      const allPostsQuery = `*[_type == "cruiseGuide"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        mainImage {
          asset,
          alt
        },
        excerpt
      }`;
      const allPosts = await client.fetch(allPostsQuery);
      setPosts(allPosts);
      setShowAll(true);
    }
    
    setLoading(false);
  };

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
            Cruise Guide
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-zinc-100 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Stay updated in real time; everything you want to know is here.
          </motion.p>
        </div>
      </motion.div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {posts.map((post, index) => (
              <motion.div
                key={post._id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: "easeOut",
                  layout: { duration: 0.4 }
                }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                    {post.mainImage ? (
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <Image
                          src={getImageUrl(post.mainImage.asset)}
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ) : (
                      <div className="w-full h-full bg-[#0f2557]" />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        {post.title}
                      </h2>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.04, x: 4 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="inline-block"
                      >
                        <Link
                          href={`/cruiseGuide/${post.slug.current}`}
                          className="inline-block px-6 py-3 bg-[#045eb8] hover:bg-[#004e9c] text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          Read Here
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Show More / Show Less Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="mb-6 px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={updateCruiseGuidePosts}
              disabled={loading}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {loading ? 'Loading...' : showAll ? 'Show Less' : 'Show More'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 