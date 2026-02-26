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
    service: "Service Inquiry (Required)",
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
          service: "Service Inquiry (Required)",
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
      <div className="p-4 sm:p-8 md:p-10">
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
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-zinc-100">
              Available 24/7!
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Left Column - Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg p-6 md:p-10">
              <h2 className="text-2xl font-bold text-[#045eb8] dark:text-blue-400 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form below and we'll get back to you promptly!
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#045eb8]"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#045eb8]"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#045eb8]"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#045eb8]"
                >
                  <option>Service Inquiry (Required)</option>
                  <option>Uncontested Divorce</option>
                  <option>Visa Consultation</option>
                  <option>Tour Group Inquiry</option>
                  <option>Insurance Consultation</option>
                  <option>Hague Apostille</option>
                  <option>Other</option>
                </select>

                <input
                  type="text"
                  name="wechat"
                  value={formData.wechat}
                  onChange={handleChange}
                  placeholder="WeChat (Optional)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#045eb8]"
                />

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                  <p className="font-semibold mb-2 text-gray-800 dark:text-gray-100">SMS Terms & Conditions</p>
                  <p className="mb-2">
                    By subscribing, you consent to receive product updates as SMS or MMS messages from Acme Corp. To opt-out of our text messaging program, send the word STOP to 718-353-2188 at any time. Text HELP for help. View our{" "}
                    <a href="/terms_and_conditions" className="text-[#045eb8] dark:text-blue-400 underline cursor-pointer">Terms of Service</a> and{" "}
                    <a href="/privacy_policy" className="text-[#045eb8] dark:text-blue-400 underline cursor-pointer">Privacy Policy</a>.
                  </p>
                  <p>Msg & Data rates may apply. Message frequency varies.</p>
                </div>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsConsent"
                    checked={formData.smsConsent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#045eb8] border-gray-300 rounded focus:ring-[#045eb8]"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Yes, I'd like to receive updates via text
                  </span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#045eb8]"
                />

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#045eb8] hover:bg-[#004e9c] text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                    Thank you for your message! We will get back to you as soon as possible.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                    Submission failed. Please try again later or contact us directly.
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Contact Details */}
            <div className="flex flex-col gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg p-6 md:p-10">
                <h2 className="text-2xl font-bold text-[#045eb8] dark:text-blue-400 mb-2">
                  Contact Details
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Reach us through any of the methods below — we reply as quickly as possible! Follow us on Xiaohongshu for the latest deals and updates.
                </p>

                <div className="space-y-4">
                  {[
                    { label: "Address", value: "41-25 Kissena Blvd #110, Flushing NY 11355, Baili Plaza, 2nd Floor, Suite 119" },
                    { label: "US Phone", value: "718-353-2188" },
                    { label: "China Phone", value: "400-000-8218" },
                    { label: "Email", value: "inv@cchtrip.com" },
                    { label: "WeChat", value: "CCH_402" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex gap-3 items-start">
                      <span className="text-sm font-semibold text-[#045eb8] dark:text-blue-400 w-28 shrink-0 pt-0.5">{label}</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Photo */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={cch_location}
                  className="w-full object-cover"
                  alt="CCH Office"
                />
              </div>

              {/* Google Maps Embed */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video">
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
  );
}