"use client";

import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import favicon_letters from "../assets/favicon_letters.png";

export default function DocumentsPage() {
  const documents = [
    { title: "Pension Eligibility Review Form for Overseas Residents", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f132c27345022635fc2ee8_%E5%9C%A8%E5%A2%83%E5%A4%96%E5%B1%85%E4%BD%8F%E4%BA%BA%E5%91%98%E9%A2%86%E5%8F%96%E5%85%BB%E8%80%81%E9%87%91%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%E8%A1%A8%EF%BC%882015-08-08%EF%BC%89.doc.pdf" },
    { title: "Foster Child Power of Attorney", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133494574a214186fa750_%E5%AF%84%E5%85%BB%E5%84%BF%E7%AB%A5%E5%A7%94%E6%89%98%E4%B9%A6.pdf" },
    { title: "Nationality Status Declaration", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f5295fa1162ad984cd_%E5%9B%BD%E7%B1%8D%E7%8A%B6%E5%86%B5%E5%A3%B0%E6%98%8E%E4%B9%A6%EF%BC%882020-10-19%EF%BC%89.pdf" },
    { title: "Signature Collection Form", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f4b7b092a6029a3b36_%E7%AD%BE%E5%90%8D%E9%87%87%E9%9B%86%E8%A1%A8%EF%BC%882020-10-26%EF%BC%89.pdf" },
    { title: "First-Time Passport Application Statement", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f4ca91e9baa044532e_%E9%A6%96%E6%AC%A1%E7%94%B3%E8%AF%B7%E4%B8%AD%E5%9B%BD%E6%8A%A4%E7%85%A7%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E%E8%A1%A8%EF%BC%882021-06-07%EF%BC%89.pdf" },
    { title: "Passport / Travel Document Application Statement", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f4f4eb67355d07d01b_%E6%8C%81%E6%8A%A4%E7%85%A7%E7%94%B3%E8%AF%B7%E6%97%85%E8%A1%8C%E8%AF%81%E5%A3%B0%E6%98%8E%EF%BC%882021-03-30%EF%BC%89.pdf" },
    { title: "Consent to Process Documents for a Minor", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f45cac0a1d5d8ce2da_%E5%90%8C%E6%84%8F%E4%B8%BA%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E5%8A%9E%E7%90%86%E8%AF%81%E7%85%A7%E5%A3%B0%E6%98%8E%EF%BC%882020-10-19%EF%BC%89.pdf" },
    { title: "Supplementary Statement for Minor Travel Document", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f47eb622ee03df5910_%E5%8A%9E%E7%90%86%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E6%97%85%E8%A1%8C%E8%AF%81%E8%A1%A5%E5%85%85%E5%A3%B0%E6%98%8E%EF%BC%882020-10-19%EF%BC%89.pdf" },
    { title: "Passport / Travel Document / Return Certificate Application Form", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f47971dbaa419f1a64_%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%8A%A4%E7%85%A7_%E6%97%85%E8%A1%8C%E8%AF%81_%E5%9B%9E%E5%9B%BD%E8%AF%81%E6%98%8E%E7%94%B3%E8%AF%B7%E8%A1%A8%EF%BC%882020-10-19%EF%BC%89.pdf" },
    { title: "Foster Child Power of Attorney (Copy)", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133494574a214186fa750_%E5%AF%84%E5%85%BB%E5%84%BF%E7%AB%A5%E5%A7%94%E6%89%98%E4%B9%A6.pdf" },
    { title: "Macau Visa Application Form", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f136b0d09b136e96982ea7_%E6%BE%B3%E9%97%A8%E7%AD%BE%E8%AF%81%E7%94%B3%E8%AF%B7%E8%A1%A8%EF%BC%882012-01-17%EF%BC%89.pdf" },
    { title: "Single Status Declaration (Unmarried – for Marriage Purposes)", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1391aedb209fd3c02e223_%E5%8D%95%E8%BA%AB%E5%A3%B0%E6%98%8E%E4%B9%A6%EF%BC%88%E6%9C%AA%E5%A9%9A%E8%80%85%E7%94%A8%E4%BA%8E%E5%A9%9A%E5%A7%BB%E7%9B%AE%E7%9A%84%EF%BC%89.doc.pdf" },
    { title: "Single Status Declaration (Unmarried – for Non-Marriage Purposes)", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1391ad64065d447d548b4_%E5%8D%95%E8%BA%AB%E5%A3%B0%E6%98%8E%E4%B9%A6%EF%BC%88%E6%9C%AA%E5%A9%9A%E8%80%85%E7%94%A8%E4%BA%8E%E9%9D%9E%E5%A9%9A%E5%A7%BB%E7%9B%AE%E7%9A%84%EF%BC%89.doc.pdf" },
    { title: "Single Status Declaration (Divorced – for Marriage Purposes)", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1391abc47b27048eed062_%E5%8D%95%E8%BA%AB%E5%A3%B0%E6%98%8E%E4%B9%A6%EF%BC%88%E7%A6%BB%E5%A9%9A%E8%80%85%E7%94%A8%E4%BA%8E%E5%A9%9A%E5%A7%BB%E7%9B%AE%E7%9A%84%EF%BC%89.doc.pdf" },
    { title: "Single Status Declaration (Divorced – for Non-Marriage Purposes)", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1391b1cef28d14b3e5fa7_%E5%8D%95%E8%BA%AB%E5%A3%B0%E6%98%8E%E4%B9%A6%EF%BC%88%E7%A6%BB%E5%A9%9A%E8%80%85%E7%94%A8%E4%BA%8E%E9%9D%9E%E5%A9%9A%E5%A7%BB%E7%9B%AE%E7%9A%84%EF%BC%89.doc.pdf" },
    { title: "Property Notarization Interview Record", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f13954bf33035fd8bbf709_%E6%88%BF%E4%BA%A7%E4%BA%8B%E5%8A%A1%E5%85%AC%E8%AF%81%E6%8E%A5%E8%B0%88%E7%AC%94%E5%BD%95.docx.pdf" },
    { title: "Property Sale Power of Attorney – Simple Template", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1511bb7b092327e9ba379_%E5%94%AE%E6%88%BF%E5%A7%94%E6%89%98%E4%B9%A6%E5%8F%82%E8%80%83%E6%A8%A1%E6%9D%BF%EF%BC%88%E7%AE%80%E5%8D%95%E7%89%88%EF%BC%89.pdf" },
    { title: "Property Sale Power of Attorney – Detailed Template", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1511b8c77f56cb4fd1df1_%E5%94%AE%E6%88%BF%E5%A7%94%E6%89%98%E4%B9%A6%E5%8F%82%E8%80%83%E6%A8%A1%E6%9D%BF%EF%BC%88%E8%AF%A6%E7%BB%86%E7%89%88%EF%BC%89.pdf" },
    { title: "Waiver of Inheritance Rights Declaration", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1511b63e220e4c451f0c6_%E6%94%BE%E5%BC%83%E7%BB%A7%E6%89%BF%E6%9D%83%E5%A3%B0%E6%98%8E%E4%B9%A6%E5%8F%82%E8%80%83%E6%A8%A1%E6%9D%BF.doc.pdf" },
    { title: "Criminal Record Certificate Power of Attorney", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1511c3d1ceab33936a76d_%E6%9C%89%E6%97%A0%E7%8A%AF%E7%BD%AA%E8%AE%B0%E5%BD%95%E8%AF%81%E6%98%8E%E5%A7%94%E6%89%98%E4%B9%A6%E5%8F%82%E8%80%83%E6%A8%A1%E6%9D%BF.doc.pdf" },
  ];

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
              Document Templates
            </h1>
            <p className="text-lg sm:text-xl text-zinc-100 max-w-3xl mx-auto">
              Reference templates for various power of attorney and declaration documents. Contact our 24/7 support team to get started.
            </p>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <button
                key={index}
                onClick={() => {
                  if (doc.link) window.open(doc.link, "_blank");
                }}
                className="group text-left px-5 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-200 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md flex items-center justify-between gap-3"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium text-sm sm:text-base leading-snug">
                  {doc.title}
                </span>
                <svg
                  className="w-4 h-4 shrink-0 text-[#045eb8] dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 text-center border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              Need help or have questions? Contact our{" "}
              <span className="font-semibold text-[#045eb8] dark:text-blue-400">24/7 support hotline</span>
              {" "}at{" "}
              <a href="tel:718-353-2188" className="font-semibold text-[#045eb8] dark:text-blue-400 hover:underline">
                718-353-2188
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}