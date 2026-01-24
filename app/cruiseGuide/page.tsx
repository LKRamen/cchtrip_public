"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import globe_image from "../assets/globe_image.jpg";
import { getImageUrl } from "@/sanity/lib/image";
import { useState, useEffect } from "react";

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

  // Initial fetch (top 10)
  useEffect(() => {
    async function fetchInitialPosts() {
      const data = await client.fetch(initialQuery);
      setPosts(data);
    }
    fetchInitialPosts();
  }, []);

  // Load all posts
  const updateCruiseGuidePosts = async () => {
    setLoading(true);
    
    // Check the CURRENT state before toggling
    if (showAll) {
      // Currently showing all, so go back to top 10
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
      // Currently showing 10, so load all
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
      <div className="relative rounded-3xl overflow-hidden mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${globe_image.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-purple-700/90 dark:to-blue-700/90" />
        
        <div className="relative z-10 py-16 px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-4">
            邮轮攻略及推荐
          </h1>
          <p className="text-lg sm:text-xl text-zinc-100 text-center max-w-3xl mx-auto">
            实时更新，这里有一切你想知道的。
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          {posts.map((post) => (
            <div 
              key={post._id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  {post.mainImage ? (
                    <Image
                      src={getImageUrl(post.mainImage.asset)}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500" />
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
                    <Link
                      href={`/cruiseGuide/${post.slug.current}`}
                      className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      查看详情
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center">
            <button 
              className="mb-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={updateCruiseGuidePosts}
              disabled={loading}
            >
              {loading ? '加载中...' : showAll ? '收起' : '查看全部'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}