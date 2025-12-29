import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import favicon_letters from "../assets/favicon_letters.png";
import divorce_qr from "../assets/divorce_qr.jpg";

export default function UncontestedDivorceCNPage() {
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
          <div className="relative w-28 h-28 mx-auto mb-6 bg-white rounded-full p-4 shadow-lg flex items-center justify-center">
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
            无争议离婚
          </h1>

          <p className="text-zinc-100 text-base sm:text-lg">
            彩虹之旅 · 01/10/2025
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-4 sm:p-8 md:p-10">
        <div className="relative max-w-5xl mx-auto rounded-3xl p-6 md:p-12 overflow-hidden bg-white dark:bg-blue-700">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />

          <div className="relative z-10 space-y-8 text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-white">
              无争议离婚
            </h2>

            <p>
              无争议离婚也称非争议离婚或协议离婚。无争议离婚除了需要满足纽约州的两大基本要求（居住要求、离婚理由要求）外，
              还必须具备以下两个条件：
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>
                夫妻双方对子女的监护权、抚养权、夫妻赡养费、房产、资产及婚姻财产方面没有分歧；
              </li>
              <li>被告方同意并需要在离婚协议上签字。</li>
            </ol>

            <p>
              夫妻双方如果因为感情破裂超过六个月以上，并且没有修复的可能性，那么可以协议离婚，并向法院递交申请。
              首先，当事人双方需要满足纽约州法律规定的居住要求；
              其次，确实符合“感情破裂”的离婚理由。
            </p>

            <p>
              接着，离婚双方需要确认在子女、财产、赡养等问题上不存在任何争议。
              无争议离婚虽然流程相对简单，但仍然建议寻求专业律师的帮助，
              协助分析是否真正不存在争议，以避免后续法律风险。
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-white pt-6">
              无争议离婚需要准备什么材料？
            </h3>

            <ol className="list-decimal pl-6 space-y-2">
              <li>离婚双方的护照首页复印件或双方的身份证明；</li>
              <li>离婚双方的社会安全卡（社安卡）复印件；</li>
              <li>离婚双方其中一方的结婚证；</li>
              <li>
                如有子女，需要提供子女的出生证明以及双方去年的报税单；
              </li>
              <li>
                如有房产，需要提供房产的具体信息。
              </li>
            </ol>

            <p className="pt-4 font-semibold">
              如果您有任何关于无争议离婚的问题，可以随时拨打我们的 7×24 小时服务热线，
              或添加下方微信进行咨询，我们随时都会帮您解答您目前存在的问题。
            </p>

            {/* QR Code Section */}
            <div className="pt-10 border-t border-gray-300 dark:border-gray-500 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <Image
                    src={divorce_qr}
                    width={220}
                    height={220}
                    alt="无争议离婚 微信二维码"
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="mt-4 text-lg font-bold text-blue-700 dark:text-white">
                Nick 胡先生
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
