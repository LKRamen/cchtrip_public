// app/discountedAirfares/page.tsx
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import globe_image from "../assets/globe_image.jpg";
import { getImageUrl } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

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
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-300 mt-6 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-0.1xl sm:text-0.5xl font-bold text-zinc-700 dark:text-blue-200 mt-4 mb-2">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-600 pl-4 italic my-4 text-gray-600 dark:text-gray-400">
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
      <li className="text-gray-700 dark:text-white leading-relaxed">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="text-gray-700 dark:text-white leading-relaxed">
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
        className="text-blue-600 dark:text-blue-400 hover:underline"
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
  content?: any[];  // Change from string to any[]
}

async function getCurrentAffairsPosts(): Promise<CurrentAffairsPost[]> {
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
  
  return client.fetch(query);
}

const flightDeals = [
  {
    route: "达拉斯 - 北京",
    dates: "25年04月24日 - 25年5月12日",
    type: "往返直飞",
    price: "经济舱现票含税：$11xx 起"
  },
  {
    route: "迈阿密 - 北京",
    dates: "25年03月03日 - 25年04月14日",
    type: "往返直飞",
    price: "商务舱含税：$41xx 起"
  },
  {
    route: "洛杉矶 - 广州",
    dates: "25年02月24日 - 25年04月04日",
    type: "直飞往返",
    price: "商务舱现票含税：$41xx 起"
  },
  {
    route: "休斯顿 - 上海",
    dates: "25年04月08日 - 25年04月29日",
    type: "往返直飞",
    price: "经济舱现票含税：$12xx 起"
  },
  {
    route: "波士顿 - 北京",
    dates: "25年03月12日 - 25年04月02日",
    type: "直飞往返",
    price: "经济舱现票含税：$12xx 起"
  },
  {
    route: "武汉 - 旧金山",
    dates: "25年04月",
    type: "单程",
    price: "经济舱含税：$5xx 起"
  }
];

export default async function DiscountedAirfaresPage() {
  const posts = await getCurrentAffairsPosts();

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
            特价机票讯息
          </h1>
          <p className="text-lg sm:text-xl text-zinc-100 text-center max-w-3xl mx-auto">
            实时更新，这里有一切你想知道的。
          </p>
        </div>
      </div>

      {/* Flight Deals Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            特价机票咨讯
          </h2>
          
          <div className="space-y-6">
            {flightDeals.map((deal, index) => (
              <div key={index}>
                <div className="text-center space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {deal.route}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {deal.dates}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {deal.type}
                  </p>
                  <p className="text-gray-800 dark:text-white font-semibold">
                    {deal.price}
                  </p>
                </div>
                
                {index < flightDeals.length - 1 && (
                  <div className="mt-6 border-b-2 border-dashed border-blue-300 dark:border-blue-600" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              所有机票价格以实时为准
            </p>
          </div>
        </div>
      </div>

      {/* Current Affairs Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 text-center mb-8">
          时事热点
        </h2>

        {/* Search Bar */}
        {/* <div className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="输入关键词"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
              搜索
            </button>
          </div>
        </div> */}

        {/* Posts List */}
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
                        {post.content && post.content.length > 0 ? (
                            <div className="prose prose-lg max-w-none">
                                <PortableText value={post.content} components={components} />
                            </div>
                            ) : (
                            <p className="text-gray-600 dark:text-g-400">No content available.</p>
                        )}
                    </div>
                    
                    
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}