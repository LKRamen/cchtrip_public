import china_eastern from "../assets/china_eastern_logo.svg";
import carnival from "../assets/carnival_logo.png";
import jetblue from "../assets/jet_blue_logo.svg";
import disney_cruise from "../assets/disney_cruise_line_logo.svg";
import royal_caribbean from "../assets/royal_caribbean_logo.png";
import princess_cruises from "../assets/princess_cruises_logo.png";
import delta from "../assets/delta_logo.png";
import msc from "../assets/msc_logo.png";
import china_southern from "../assets/china_southern_logo.png";
import xiamen_airlines from "../assets/xiamen_airlines_logo.png";
import air_china from "../assets/air_china_logo.png";
import american_airlines from "../assets/american_airlines_logo.png";
import viking from "../assets/viking_river_cruises_logo.png";
import windstar from "../assets/windstar_cruises_logo.png";
import Image from "next/image";

export default function TravelPartners() {
  const partners = [
    { name: "China Eastern", logo: china_eastern },
    { name: "Carnival", logo: carnival },
    { name: "JetBlue", logo: jetblue },
    { name: "Disney Cruise Line", logo: disney_cruise },
    { name: "Royal Caribbean", logo: royal_caribbean },
    { name: "Princess Cruises", logo: princess_cruises },
    { name: "Delta", logo: delta },
    { name: "MSC Cruises", logo: msc },
    { name: "China Southern", logo: china_southern },
    { name: "Xiamen Airlines", logo: xiamen_airlines },
    { name: "Air China", logo: air_china },
    { name: "American Airlines", logo: american_airlines },
    { name: "Viking River Cruises", logo: viking },
    { name: "Windstar Cruises", logo: windstar },
  ];

  return (
    <div className="py-12 md:py-16 bg-white dark:bg-gray-800 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-950 dark:text-white">
          我们的合作伙伴
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 bg-sky-200 dark:bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="relative w-full h-20 sm:h-24 md:h-28">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain filter transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}