import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import favicon_letters from "../assets/favicon_letters.png";
import wechat_qr from "../assets/wechat_qr.jpg";
import xiaohongshu_qr from "../assets/xiaohongshu_qr.png";


export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-10 md:py-16 overflow-hidden">
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            关于我们
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-100 max-w-3xl mx-auto leading-relaxed">
            所有旅行团都由20年经验导游合理设计精品旅游行程我们的服务涵盖旅行团，机票，邮轮，酒店，景区门票，以及包团定制旅游。
          </p>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="p-4 sm:p-8 md:p-10">
        <div className="relative flex flex-col justify-center rounded-3xl p-6 md:p-12 gap-6 overflow-hidden bg-white dark:bg-blue-700">
          
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-blue-700 dark:text-white text-center">
              彩虹之旅国际旅行社
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed max-w-5xl mx-auto">
              <p>
              作为北美一家声誉极高的旅行社，彩虹之旅成立于2000年，总部设在美国纽约，分部位于洛杉矶和中国上海、郑州等一线城市，是美国最具实力的旅游公司之一，同时也是一家全球性的旅游公司。我们与多家国际航空公司有着良好的合作关系和密切的业务往来，现已发展成为美国知名国际旅行社之一。
              </p>
              
              <p>
                公司专业经营全球各大航空公司国际、国内特价机票，豪华头等舱、精英商务舱、特价经济舱，为每位乘客精心设计合理的航线安排。接受多种付款方式。彩虹之旅秉承诚信经营的理念，竭诚为海内外游客提供最专业，最可靠，最迅捷，最优惠的咨询和服务。
              </p>

              <p>
                我们有专业的团队通过量身订制旅游线路，带你去体检色彩斑斓的世界，让您体验不一样的旅程，一起去体验美食，美景，让美好的瞬间成为永恒的记忆，让旅行丰富你的人生！
              </p>
              
              <p>
                为您提供最为舒心的旅游假期，我们将继续开拓崭新的旅游点和创意行程！为“旅客第一、服务第一、质量第一”的承诺，我们一直在努力!服务承诺：用我们的百分努力，换取您十分满意！
              </p>
              
              <div className="pt-6 border-t border-gray-300 dark:border-gray-500">
                <p className="text-xl font-bold text-blue-700 dark:text-white text-center">
                  服务承诺：用我们的百分努力，换取您十分满意！
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="relative my-5 md:my-10 py-10 md:py-16 rounded-3xl overflow-hidden">
          
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 dark:opacity-90"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />
          
          <div className="absolute inset-0 bg-blue-700/90 dark:bg-sky-400/90" />
          
          <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-white">
                关注我们
              </h2>
              
              <p className="text-base sm:text-lg text-zinc-100 text-center mb-12 leading-relaxed max-w-4xl mx-auto">
                您可以通过下面方式关注联系我们，我们会在尽可能快的时间及时回复！定期更新机票最新的价格优惠和资讯，火爆旅行团订购中，彩虹之旅期待和您相遇！
              </p>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    小红书
                  </h3>
                  
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-white rounded-xl shadow-lg">
                      <Image 
                        src={xiaohongshu_qr} 
                        width={192}
                        height={192}
                        className="object-contain" 
                        alt='WeChat QR Code'
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-zinc-100 text-base">
                      请搜索小红书号：
                    </p>
                    <p className="text-2xl font-bold text-white">
                      5241484275
                    </p>
                    <p className="text-zinc-200 text-sm">
                      或搜索：<span className="font-semibold">彩虹之旅签证服务</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    微信
                  </h3>
                  
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-white rounded-xl shadow-lg">
                      <Image 
                        src={wechat_qr} 
                        width={192}
                        height={192}
                        className="object-contain" 
                        alt='WeChat QR Code'
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-zinc-100 text-base">
                      请使用微信扫一扫
                    </p>
                    <p className="text-zinc-200 text-sm">
                      或搜索微信号：
                    </p>
                    <p className="text-2xl font-bold text-white">
                      CCH_402
                    </p>
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