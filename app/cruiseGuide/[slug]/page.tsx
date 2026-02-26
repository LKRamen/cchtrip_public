// app/cruiseGuide/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { urlFor } from '@/sanity/lib/image'
import { getImageUrl } from "@/sanity/lib/image";
import globe_image from "../../assets/globe_image.jpg"


interface CruiseGuidePost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  excerpt?: string;
  content: any[];
}

async function getCruiseGuidePost(slug: string): Promise<CruiseGuidePost | null> {
  const query = `*[_type == "cruiseGuide" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    excerpt,
    content
  }`;
  
  const post = await client.fetch(query, { slug });
  return post;
}

export async function generateStaticParams() {
  const query = `*[_type == "cruiseGuide"] { "slug": slug.current }`;
  const posts = await client.fetch(query);
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

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
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-blue-200 mt-4 mb-2">
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
      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
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


export default async function CruiseGuidePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getCruiseGuidePost(resolvedParams.slug);

  if (!post) notFound();

  return (
    <div className="p-4 sm:p-8 md:p-10">

      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden mb-8">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
          style={{ backgroundImage: `url(${globe_image.src})` }}
        />
        <div className="absolute inset-0 bg-[#1e4396]/90" />

        <div className="relative z-10 py-14 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            {post.excerpt && (
              <p className="text-zinc-300 text-sm sm:text-base mb-3">
                {post.excerpt}
              </p>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Main Image */}
      {post.mainImage && (
        <div className="max-w-4xl mx-auto rounded-t-3xl overflow-hidden shadow-lg">
          <Image
            src={getImageUrl(post.mainImage.asset)}
            alt={post.mainImage.alt || post.title}    
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-4xl mx-auto">
        <article className="bg-white dark:bg-gray-800 rounded-b-3xl p-6 sm:p-8 md:p-12 shadow-lg">
          {post.content && post.content.length > 0 ? (
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.content} components={components} />
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No content available.</p>
          )}
        </article>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/cruiseGuide"
            className="inline-block px-6 py-3 bg-[#045eb8] hover:bg-[#004e9c] text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            ← Return to Cruise Guide
          </Link>
        </div>
      </div>

    </div>
  );
}