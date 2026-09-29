"use client";

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="lg:col-span-7">

            {/* Logo */}
            <a href="#" className="inline-flex flex-col">
              <span className="text-[24px] font-extrabold tracking-tight text-[#162321]">
                TEXMO
              </span>

              <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.25em] text-gray-500">
                Precision Machinery
              </span>
            </a>

            {/* Navigation */}
            <nav className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#008f82]"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#008f82]"
              >
                About
              </a>

              <a
                href="#products"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#008f82]"
              >
                Products
              </a>

              <a
                href="#blog"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#008f82]"
              >
                Blog
              </a>

              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#008f82]"
              >
                Contact
              </a>
            </nav>

            {/* Contact */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#008f82]"
              >
                <FiPhone className="text-[#008f82]" />
                +91 98765 43210
              </a>

              <a
                href="mailto:sales@texmoprecision.com"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#008f82]"
              >
                <FiMail className="text-[#008f82]" />
                sales@texmoprecision.com
              </a>
            </div>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all hover:border-[#008f82] hover:bg-[#008f82] hover:text-white"
              >
                <FiFacebook size={15} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all hover:border-[#008f82] hover:bg-[#008f82] hover:text-white"
              >
                <FiInstagram size={15} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all hover:border-[#008f82] hover:bg-[#008f82] hover:text-white"
              >
                <FiLinkedin size={15} />
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE MAP
          ====================================================== */}
          <div className="lg:col-span-5">

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">

              <div className="relative h-[230px] w-full">

                {/* Replace with your actual Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i800!2i500!4f13.1!5e0!3m3!1m2!1s0x0%3A0x0!2sIndia!5e0!3m2!1sen!2sin!4v1"
                  className="h-full w-full border-0 grayscale"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Map label */}
                <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-[#008f82]" />

                    <div>
                      <p className="text-[11px] font-bold text-gray-800">
                        Texmo Precision Machinery
                      </p>

                      <p className="text-[9px] text-gray-500">
                        Manufacturing & Export
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT
      ====================================================== */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-4 text-[11px] text-gray-400 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

          <p>
            © {new Date().getFullYear()} Texmo Precision Machinery. All
            Rights Reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-[#008f82]">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#008f82]">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}