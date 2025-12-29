import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import favicon_letters from "../assets/favicon_letters.png";
import direct_travel_routes from "../assets/direct_travel_routes.png"

export default function ChinaUSFlightsPage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${globe_image.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative w-32 h-32 mx-auto mb-8 bg-white rounded-full p-4 shadow-lg flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image 
                src={favicon_letters} 
                fill
                className="object-contain"  
                alt='CCH Logo'
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            中美直飞航线统计
          </h1>

          <p className="text-zinc-100 text-base sm:text-lg">
            彩虹之旅 · 12/20/2024
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="p-4 sm:p-8 md:p-10">
        <div className="relative flex flex-col justify-center rounded-3xl p-6 md:p-12 overflow-hidden bg-white dark:bg-blue-700">
          
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
              经过对当前航线的整合，彩虹之旅为大家整理出以下直飞航班信息，大家可以随时咨询其中航线的价格
              <span className="font-bold text-blue-700 dark:text-white"> （718-353-2188，7x24小时服务热线）</span>
               欢迎大家的到来，希望大家旅途愉快！
            </p>
          </div>
        </div>

        {/* Flight Schedule Table */}
        <div className="relative my-5 md:my-10 py-10 md:py-16 rounded-3xl overflow-hidden">
        
        {/* Background image */}
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 dark:opacity-90"
            style={{ backgroundImage: `url(${globe_image.src})` }}
        />

        {/* Color overlay */}
        <div className="absolute inset-0 bg-blue-700/90 dark:bg-purple-700/90" />

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white">
            航班时刻表
            </h2>

            {/* Image under text */}
            <div className="w-full max-w-6xl mx-auto">
            <Image
                src={direct_travel_routes}
                alt="Direct Travel Routes US-China"
                className="w-full h-auto rounded-xl shadow-lg"
                priority
            />
            </div>
        </div>
        </div>


        {/* Contact CTA */}
        <div className="relative py-16 md:py-20 rounded-3xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              需要预订机票？
            </h2>
            <p className="text-xl text-zinc-100 mb-10">
              联系我们获取最优惠的价格和专业的服务
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:718-353-2188"
                className="px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                📞 立即致电：718-353-2188
              </a>
              <a 
                href="/"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg"
              >
                返回首页
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}