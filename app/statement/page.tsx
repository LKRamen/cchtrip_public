import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import favicon_letters from "../assets/favicon_letters.png";


export default function Statement() {
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
            声明书
          </h1>
        </div>
      </div>

      {/* Statement */}
      <div className="p-4 sm:p-8 md:p-10">
        <div className="relative flex flex-col justify-center rounded-3xl p-6 md:p-12 gap-6 overflow-hidden bg-white dark:bg-blue-700">
          
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />
          
          <div className="relative z-10">
            
            <div className="space-y-6 text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed max-w-5xl mx-auto">
              <p>
              什么是声明书？ 声明书是声明人以书面形式所作出的公开意思的表达。 常见的声明书包含“同一个人声明书”: 在中国公民加入美国国籍后，无论是否更改名字，都可以通过一份个人签字后经过公证的声明书来达到使用目的。 还有一种常见的声明书“放弃继承权声明书”。 当申请人无法在短期内回国，为了能够完成某些特定事项，如果同意放弃房产的继承权时，可以通过声明书的形式来完成。 这种文件简称为“放弃继承权声明书”。 声明书是一种文件，内容应当由声明人根据个人的实际情况准备。为了确保文件内容的适用性，我们建议声明人在完成声明书的内容以后先发送到国内，待相关的使用机构确认可以接受以后再进行下一步的公证和认证。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}