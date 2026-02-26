"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import { getImageUrl } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset) return null
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(1200).auto('format').url()}
            alt={value.alt || 'Post image'}
            width={1200}
            height={800}
            className="rounded-lg w-full h-auto"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2 italic">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl sm:text-4xl font-bold text-[#045eb8] dark:text-blue-400 mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-[#045eb8] dark:text-blue-300 mt-6 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-gray-700 dark:text-blue-200 mt-4 mb-2">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#045eb8] pl-4 italic my-4 text-gray-600 dark:text-gray-400">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-[#045eb8] dark:text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

interface CurrentAffairsPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: {
    asset: any;
    alt?: string;
  };
  excerpt?: string;
  content?: any[];
}

export default function TravelNewsPage() {
  const [posts, setPost] = useState<CurrentAffairsPost[]>([]);

  useEffect(() => {
    async function getCurrentAffairsPosts() {
      const query = `*[_type == "currentAffairs"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        mainImage {
          asset,
          alt
        },
        excerpt,
        content
      }`;

      const posts = await client.fetch(query);
      setPost(posts);
    }
    getCurrentAffairsPosts();
  }, []);

  return (
    <div className="p-4 sm:p-8 md:p-10">
      {/* Header Section */}
      <div className="relative rounded-3xl overflow-hidden mb-8">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
          style={{ backgroundImage: `url(${globe_image.src})` }}
        />
        <div className="absolute inset-0 bg-[#1e4396]/90" />

        <div className="relative z-10 py-16 px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-4">
            Travel News
          </h1>
          <p className="text-lg sm:text-xl text-zinc-100 text-center max-w-3xl mx-auto">
            Stay up to date — everything you need to know, updated in real time.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#045eb8] dark:text-blue-400 text-center mb-8">
          Latest Updates
        </h2>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 dark:text-gray-400">No posts available at this time.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-1/3 relative h-64 md:h-auto min-h-[200px]">
                    {post.mainImage ? (
                      <Image
                        src={getImageUrl(post.mainImage.asset)}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1e4396] flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#045eb8] dark:text-blue-400 mb-3">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
                          {post.excerpt}
                        </p>
                      )}
                      {post.content && post.content.length > 0 ? (
                        <div className="prose prose-lg max-w-none">
                          <PortableText value={post.content} components={components} />
                        </div>
                      ) : (
                        <p className="text-gray-500 dark:text-gray-400">No content available.</p>
                      )}
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