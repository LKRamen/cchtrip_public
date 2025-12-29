"use client";

import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import favicon_letters from "../assets/favicon_letters.png";

export default function DocumentsPage() {
  const documents = [
    { title: "在境外居住人员领取养老金资格审核表", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f132c27345022635fc2ee8_%E5%9C%A8%E5%A2%83%E5%A4%96%E5%B1%85%E4%BD%8F%E4%BA%BA%E5%91%98%E9%A2%86%E5%8F%96%E5%85%BB%E8%80%81%E9%87%91%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%E8%A1%A8%EF%BC%882015-08-08%EF%BC%89.doc.pdf" },
    { title: "查养儿童委托书", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133494574a214186fa750_%E5%AF%84%E5%85%BB%E5%84%BF%E7%AB%A5%E5%A7%94%E6%89%98%E4%B9%A6.pdf" },
    { title: "国籍国籍状况声明书", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f5295fa1162ad984cd_%E5%9B%BD%E7%B1%8D%E7%8A%B6%E5%86%B5%E5%A3%B0%E6%98%8E%E4%B9%A6%EF%BC%882020-10-19%EF%BC%89.pdf" },
    { title: "签名采集表", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f4b7b092a6029a3b36_%E7%AD%BE%E5%90%8D%E9%87%87%E9%9B%86%E8%A1%A8%EF%BC%882020-10-26%EF%BC%89.pdf" },
    { title: "首次申请护照情况说明表", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f4ca91e9baa044532e_%E9%A6%96%E6%AC%A1%E7%94%B3%E8%AF%B7%E4%B8%AD%E5%9B%BD%E6%8A%A4%E7%85%A7%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E%E8%A1%A8%EF%BC%882021-06-07%EF%BC%89.pdf" },
    { title: "护照申请旅行证申请表", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f4f4eb67355d07d01b_%E6%8C%81%E6%8A%A4%E7%85%A7%E7%94%B3%E8%AF%B7%E6%97%85%E8%A1%8C%E8%AF%81%E5%A3%B0%E6%98%8E%EF%BC%882021-03-30%EF%BC%89.pdf" },
    { title: "同意为未成年人办理证照声明", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f45cac0a1d5d8ce2da_%E5%90%8C%E6%84%8F%E4%B8%BA%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E5%8A%9E%E7%90%86%E8%AF%81%E7%85%A7%E5%A3%B0%E6%98%8E%EF%BC%882020-10-19%EF%BC%89.pdf" },
    { title: "办理夫成年人旅行证补充说明", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f47eb622ee03df5910_%E5%8A%9E%E7%90%86%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E6%97%85%E8%A1%8C%E8%AF%81%E8%A1%A5%E5%85%85%E5%A3%B0%E6%98%8E%EF%BC%882020-10-19%EF%BC%89.pdf" },
    { title: "护照/旅行证/回国证明申请表", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133f47971dbaa419f1a64_%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%8A%A4%E7%85%A7_%E6%97%85%E8%A1%8C%E8%AF%81_%E5%9B%9E%E5%9B%BD%E8%AF%81%E6%98%8E%E7%94%B3%E8%AF%B7%E8%A1%A8%EF%BC%882020-10-19%EF%BC%89.pdf" },
    { title: "查养儿童委托书", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f133494574a214186fa750_%E5%AF%84%E5%85%BB%E5%84%BF%E7%AB%A5%E5%A7%94%E6%89%98%E4%B9%A6.pdf" },
    { title: "澳门签证申请表", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f136b0d09b136e96982ea7_%E6%BE%B3%E9%97%A8%E7%AD%BE%E8%AF%81%E7%94%B3%E8%AF%B7%E8%A1%A8%EF%BC%882012-01-17%EF%BC%89.pdf" },
    { title: "单身声明书（未婚者用于婚姻目的）", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1391aedb209fd3c02e223_%E5%8D%95%E8%BA%AB%E5%A3%B0%E6%98%8E%E4%B9%A6%EF%BC%88%E6%9C%AA%E5%A9%9A%E8%80%85%E7%94%A8%E4%BA%8E%E5%A9%9A%E5%A7%BB%E7%9B%AE%E7%9A%84%EF%BC%89.doc.pdf" },
    { title: "单身声明书（未婚者用于非婚姻目的）", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1391ad64065d447d548b4_%E5%8D%95%E8%BA%AB%E5%A3%B0%E6%98%8E%E4%B9%A6%EF%BC%88%E6%9C%AA%E5%A9%9A%E8%80%85%E7%94%A8%E4%BA%8E%E9%9D%9E%E5%A9%9A%E5%A7%BB%E7%9B%AE%E7%9A%84%EF%BC%89.doc.pdf" },
    { title: "单身声明书（离婚者用于婚姻目的）", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1391abc47b27048eed062_%E5%8D%95%E8%BA%AB%E5%A3%B0%E6%98%8E%E4%B9%A6%EF%BC%88%E7%A6%BB%E5%A9%9A%E8%80%85%E7%94%A8%E4%BA%8E%E5%A9%9A%E5%A7%BB%E7%9B%AE%E7%9A%84%EF%BC%89.doc.pdf" },
    { title: "单身声明书（离婚者用于非婚姻目的）", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1391b1cef28d14b3e5fa7_%E5%8D%95%E8%BA%AB%E5%A3%B0%E6%98%8E%E4%B9%A6%EF%BC%88%E7%A6%BB%E5%A9%9A%E8%80%85%E7%94%A8%E4%BA%8E%E9%9D%9E%E5%A9%9A%E5%A7%BB%E7%9B%AE%E7%9A%84%EF%BC%89.doc.pdf" },
    { title: "房产事务公证送达笔录", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f13954bf33035fd8bbf709_%E6%88%BF%E4%BA%A7%E4%BA%8B%E5%8A%A1%E5%85%AC%E8%AF%81%E6%8E%A5%E8%B0%88%E7%AC%94%E5%BD%95.docx.pdf" },
    { title: "售房委托书参考模板（简单版）", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1511bb7b092327e9ba379_%E5%94%AE%E6%88%BF%E5%A7%94%E6%89%98%E4%B9%A6%E5%8F%82%E8%80%83%E6%A8%A1%E6%9D%BF%EF%BC%88%E7%AE%80%E5%8D%95%E7%89%88%EF%BC%89.pdf" },
    { title: "售房委托书参考模板（详细版）", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1511b8c77f56cb4fd1df1_%E5%94%AE%E6%88%BF%E5%A7%94%E6%89%98%E4%B9%A6%E5%8F%82%E8%80%83%E6%A8%A1%E6%9D%BF%EF%BC%88%E8%AF%A6%E7%BB%86%E7%89%88%EF%BC%89.pdf" },
    { title: "放弃继承权声明书", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1511b63e220e4c451f0c6_%E6%94%BE%E5%BC%83%E7%BB%A7%E6%89%BF%E6%9D%83%E5%A3%B0%E6%98%8E%E4%B9%A6%E5%8F%82%E8%80%83%E6%A8%A1%E6%9D%BF.doc.pdf" },
    { title: "有无犯罪记录证明委托书", link: "https://cdn.prod.website-files.com/62ba09d7604a596a625aa92b/62f1511c3d1ceab33936a76d_%E6%9C%89%E6%97%A0%E7%8A%AF%E7%BD%AA%E8%AE%B0%E5%BD%95%E8%AF%81%E6%98%8E%E5%A7%94%E6%89%98%E4%B9%A6%E5%8F%82%E8%80%83%E6%A8%A1%E6%9D%BF.doc.pdf" },
    // { title: "结婚公证", link: "" },
    // { title: "离婚公证", link: "" },
    // { title: "出生公证", link: "" },
    // { title: "死亡认证", link: "" }
  ];

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
            委托书
          </h1>

          <p className="text-zinc-100 text-base sm:text-lg">
            提供各类委托书资源或提供参考，如需办理委托书请联系7X24小时在线专业客服
          </p>
        </div>
      </div>

      {/* Document Links Section */}
      <div className="p-4 sm:p-8 md:p-10">
        <div className="relative max-w-5xl mx-auto rounded-3xl p-6 md:p-12 overflow-hidden bg-white dark:bg-blue-700">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />

          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (doc.link) {
                      window.location.href = doc.link;
                    }
                  }}
                  className="text-left px-6 py-4 bg-blue-50 dark:bg-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-colors duration-200 text-blue-700 dark:text-blue-100 font-medium border border-blue-200 dark:border-blue-600"
                >
                  {doc.title}
                </button>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-300 dark:border-gray-500 text-center">
              <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg">
                如需帮助或咨询，请联系我们的 7×24 小时服务热线
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}