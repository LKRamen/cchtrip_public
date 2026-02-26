import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import favicon_letters from "../assets/favicon_letters.png";
import wechat_qr from "../assets/wechat_qr.jpg";
import xiaohongshu_qr from "../assets/xiaohongshu_qr.png";


export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="p-4 sm:p-8 md:p-10">
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />
          <div className="absolute inset-0 bg-[#1e4396]/90" />

          <div className="relative z-10 py-16 px-4 sm:px-6 md:px-8 text-center">
            <div className="relative w-28 h-28 mx-auto mb-8 bg-white rounded-full p-4 shadow-lg flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={favicon_letters}
                  fill
                  className="object-contain"
                  alt="CCH Logo"
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              About Us
            </h1>
          </div>
        </div>

        {/* Company Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <div className="mx-auto p-8 md:p-12 space-y-5 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#045eb8] dark:text-blue-400 text-center mb-6">
              Rainbow Travel International
            </h2>
            <p className="indent-[3rem]">
              As a highly reputable travel agency in North America, Rainbow Travel was founded in 2000 and is headquartered in New York City, with branches in Los Angeles and major cities in China including Shanghai and Zhengzhou. We are one of the most capable travel companies in the United States and a globally operating agency. We maintain strong partnerships with multiple international airlines and have grown into one of America's well-known international travel agencies.
            </p>
            <p className="indent-[3rem]">
              We specialize in discounted international and domestic airfare across major global airlines, including luxury first class, premium business class, and economy seats — with carefully designed routing for every passenger. We accept multiple payment methods. Rainbow Travel operates with a commitment to integrity, dedicated to providing the most professional, reliable, efficient, and cost-effective consultation and service to travelers at home and abroad. Our professional team crafts tailor-made travel itineraries to take you on a journey through a vibrant world. Experience unique adventures, savor local cuisine, and take in breathtaking scenery — let each beautiful moment become a lasting memory that enriches your life.
            </p>
            <p className="indent-[3rem]">
              We will continue to develop new destinations and creative itineraries to provide the most enjoyable travel experience possible. Our promise: Guests First, Service First, Quality First — and we never stop working toward it.
            </p>

            <div className="pt-5 border-t border-gray-200 dark:border-gray-600">
              <p className="text-lg font-bold text-[#045eb8] dark:text-blue-400 text-center">
                Our Commitment: 100% of Our Effort for 100% of Your Satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="relative rounded-3xl overflow-hidden py-12 md:py-16">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />
          <div className="absolute inset-0 bg-[#1e4396]/90" />

          <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-white">
                Follow Us
              </h2>

              <p className="text-base sm:text-lg text-zinc-100 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
                Follow and contact us through the channels below — we'll get back to you as quickly as possible! We regularly post the latest flight deals and travel news. Hot tour group bookings are open now. Rainbow Travel looks forward to meeting you!
              </p>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Xiaohongshu (RedNote)
                  </h3>

                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-white rounded-xl shadow-lg">
                      <Image
                        src={xiaohongshu_qr}
                        width={192}
                        height={192}
                        className="object-contain"
                        alt="Xiaohongshu QR Code"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-zinc-100 text-base">Search by ID:</p>
                    <p className="text-2xl font-bold text-white">5241484275</p>
                    <p className="text-zinc-200 text-sm">
                      Or search: <span className="font-semibold">彩虹之旅签证服务</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    WeChat
                  </h3>

                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-white rounded-xl shadow-lg">
                      <Image
                        src={wechat_qr}
                        width={192}
                        height={192}
                        className="object-contain"
                        alt="WeChat QR Code"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-zinc-100 text-base">Scan with WeChat</p>
                    <p className="text-zinc-200 text-sm">Or search WeChat ID:</p>
                    <p className="text-2xl font-bold text-white">CCH_402</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}