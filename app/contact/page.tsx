"use client";

import { useState } from "react";
import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import favicon_letters from "../assets/favicon_letters.png";
import cch_location from "../assets/cch_location.jpg"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "咨询业务（必填）",
    wechat: "",
    message: "",
    smsConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "咨询业务（必填）",
          wechat: "",
          message: "",
          smsConsent: false
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            联系我们
          </h1>

          <p className="text-zinc-100 text-base sm:text-lg">
            7X24小时服务！
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="p-4 sm:p-8 md:p-10">
        <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden bg-white dark:bg-blue-700">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-12">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-700 dark:text-white mb-4">
                CONTACT US
              </h2>
              <p className="text-gray-700 dark:text-gray-200 mb-8">
                通过填写表格我们提供联系信息，我们会及时和您联系！
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="名字"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-white dark:bg-blue-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="邮箱"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-white dark:bg-blue-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="手机号码"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-white dark:bg-blue-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-white dark:bg-blue-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>咨询业务（必填）</option>
                  <option>无争议离婚</option>
                  <option>签证咨询</option>
                  <option>旅行团咨询</option>
                  <option>保险咨询</option>
                  <option>海牙认证</option>
                  <option>其他</option>
                </select>

                <input
                  type="text"
                  name="wechat"
                  value={formData.wechat}
                  onChange={handleChange}
                  placeholder="微信（选填）"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-white dark:bg-blue-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="bg-gray-50 dark:bg-blue-900 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-200">
                  <p className="font-semibold mb-2">SMS Terms & Conditions</p>
                  <p className="mb-2">
                    By subscribing, you consent to receive product updates as SMS or MMS messages from Acme Corp. To opt-out of our text messaging program, send the word STOP to 718-353-2188 at any time. Text HELP for help. View our{" "}
                    <a href="/terms_and_conditions" className="text-blue-600 dark:text-blue-300 underline cursor-pointer">Terms of Service</a> and{" "}
                    <a href="/privacy_policy" className="text-blue-600 dark:text-blue-300 underline cursor-pointer">Privacy Policy</a>.
                  </p>
                  <p>Msg & Data rates may apply. Message frequency varies.</p>
                </div>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsConsent"
                    checked={formData.smsConsent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    Yes, I'd like to receive updates via text
                  </span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="信息"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-white dark:bg-blue-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "提交中..." : "提交"}
                </button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                    感谢您的留言！我们会尽快与您联系。
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                    提交失败，请稍后重试或直接联系我们。
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-blue-700 dark:text-white mb-4">
                联系细节
              </h2>

              <p className="text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                您可以通过下面方式联系我们，也可通过下面的表格填写正确的信息和我们取得联系我们会在尽可能快的时间及时回复！请关注我们的小红书和抖音获得最新的价格优惠和资讯，彩虹之旅期待和您相遇！
              </p>

              <div className="space-y-4 text-gray-700 dark:text-gray-200">
                <div>
                  <p className="font-semibold">地址：</p>
                  <p>41-25 Kissena Blvd #110，Flushing NY 11355 百利大厦2楼119室</p>
                </div>

                <div>
                  <p className="font-semibold">美国电话：</p>
                  <p>718-353-2188</p>
                </div>

                <div>
                  <p className="font-semibold">中国电话：</p>
                  <p>400-000-8218</p>
                </div>

                <div>
                  <p className="font-semibold">Email:</p>
                  <p>inv@cchtrip.com</p>
                </div>

                <div>
                  <p className="font-semibold">微信：</p>
                  <p>CCH_402</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="bg-blue-700 dark:bg-blue-900 p-4 rounded-xl shadow-lg">
                  <div className="aspect-video bg-blue-500 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <Image 
                    src={cch_location}
                    className="object-contain rounded-lg" 
                    alt='Image of CCH Office'
                    />
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8">
                <div className="bg-white dark:bg-blue-900 p-4 rounded-xl shadow-lg">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1896649886556!2d-73.82888268459467!3d40.76020797932661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2601e3c8a7c8b%3A0x7f3b0d0e8e8e8e8e!2s41-25%20Kissena%20Blvd%2C%20Flushing%2C%20NY%2011355!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
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