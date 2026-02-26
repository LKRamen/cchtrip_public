import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import favicon_letters from "../assets/favicon_letters.png";
import divorce_qr from "../assets/divorce_qr.jpg";

export default function UncontestedDivorceCNPage() {
  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-8 md:p-10">

        {/* Hero Section */}
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
              Uncontested Divorce
            </h1>
            <p className="text-lg sm:text-xl text-zinc-100">
              Rainbow Travel · 01/10/2025
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Intro Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#045eb8] dark:text-blue-400 mb-5">
              What is an Uncontested Divorce?
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                An uncontested divorce — also known as a non-contested or agreed divorce — requires meeting New York State's two basic requirements (residency requirements and grounds for divorce), as well as the following two additional conditions:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Both spouses have no disputes regarding child custody, child support, spousal maintenance, real estate, assets, or marital property.</li>
                <li>The respondent agrees and must sign the divorce agreement.</li>
              </ol>
              <p>
                If a couple has experienced an irretrievable breakdown of their marriage for more than six months with no possibility of reconciliation, they may file for an agreed divorce and submit an application to the court. The parties must first satisfy New York State's residency requirements and genuinely qualify under the "irretrievable breakdown" grounds for divorce.
              </p>
              <p>
                The divorcing parties must also confirm there are no disputes regarding children, property, or maintenance. While the uncontested divorce process is relatively straightforward, it is still advisable to seek help from a qualified attorney to confirm that no genuine disputes exist and to avoid future legal complications.
              </p>
            </div>
          </div>

          {/* Requirements Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#045eb8] dark:text-blue-400 mb-5">
              What Documents Are Required?
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              <li>A copy of the first page of each party's passport, or other valid government-issued photo ID.</li>
              <li>A copy of each party's Social Security card.</li>
              <li>The marriage certificate from either party.</li>
              <li>If there are children, provide each child's birth certificate as well as both parties' tax returns from the prior year.</li>
              <li>If there is real estate involved, provide detailed information about the property.</li>
            </ol>
          </div>

          {/* Contact / QR Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">

              {/* Blue panel */}
              <div className="relative md:w-2/5 min-h-[180px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${globe_image.src})` }}
                />
                <div className="absolute inset-0 bg-[#045eb8]/90" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-white font-bold text-xl mb-2">Have Questions?</p>
                  <p className="text-zinc-100 text-sm leading-relaxed">
                    Reach us anytime via our 24/7 hotline or scan the WeChat QR code to connect directly.
                  </p>
                  <a
                    href="tel:718-353-2188"
                    className="mt-5 px-5 py-2.5 bg-white text-[#045eb8] font-semibold rounded-lg text-sm hover:bg-gray-100 transition-colors duration-200 shadow"
                  >
                    📞 718-353-2188
                  </a>
                </div>
              </div>

              {/* QR code panel */}
              <div className="md:w-3/5 p-8 flex flex-col items-center justify-center text-center">
                <div className="bg-white p-4 rounded-xl shadow-lg inline-block mb-4">
                  <Image
                    src={divorce_qr}
                    width={180}
                    height={180}
                    alt="WeChat QR Code – Uncontested Divorce"
                    className="object-contain"
                  />
                </div>
                <p className="text-lg font-bold text-[#045eb8] dark:text-blue-400">
                  Mr. Nick Hu
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Scan to connect on WeChat
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}