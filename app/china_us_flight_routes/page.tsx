import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import favicon_letters from "../assets/favicon_letters.png";
import direct_travel_routes from "../assets/direct_travel_routes.png"

export default function ChinaUSFlightsPage() {

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
              China–US Direct Flight Routes
            </h1>
            <p className="text-lg sm:text-xl text-zinc-100">
              Rainbow Travel · 12/20/2024
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            After consolidating current routes, Rainbow Travel has compiled the following direct flight information for your reference. Feel free to inquire about pricing for any of these routes at any time —{" "}
            <span className="font-bold text-[#045eb8] dark:text-blue-400">
              call us at 718-353-2188, available 24/7.
            </span>{" "}
            We look forward to serving you and wish you a pleasant journey!
          </p>
        </div>

        {/* Flight Schedule */}
        <div className="relative rounded-3xl overflow-hidden mb-8 py-12 md:py-16">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />
          <div className="absolute inset-0 bg-[#1e4396]/90" />

          <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white">
              Flight Schedule
            </h2>
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
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* Blue accent panel */}
            <div className="relative md:w-1/3 min-h-[160px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${globe_image.src})` }}
              />
              <div className="absolute inset-0 bg-[#045eb8]/90" />
              <div className="relative z-10 h-full flex items-center justify-center p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center leading-snug">
                  Ready to Book Your Flight?
                </h2>
              </div>
            </div>

            {/* CTA content */}
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Contact us for the best prices and professional service. Our team is available around the clock to help you find the perfect flight.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:718-353-2188"
                  className="px-6 py-3 bg-[#045eb8] hover:bg-[#004e9c] text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center"
                >
                  📞 Call Now: 718-353-2188
                </a>
                <a
                  href="/"
                  className="px-6 py-3 border-2 border-[#045eb8] text-[#045eb8] dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-[#045eb8] hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-200 text-center"
                >
                  Return to Home
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}