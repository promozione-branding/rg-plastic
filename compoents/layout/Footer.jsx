"use client";

import {
  FiPhone,
  FiMapPin,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiTwitter,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#100906] text-white">
      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 0.7px, transparent 0.7px)",
          backgroundSize: "5px 5px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* =================================================
              BRAND
          ================================================== */}
          <div className="lg:col-span-4 lg:pr-10">
            <a href="#" className="group inline-flex flex-col">
              <span className="text-[29px] font-extrabold leading-none tracking-[-0.05em] text-white transition-colors duration-300 group-hover:text-[#78d5ca]">
                TEXMO
              </span>

              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-[#78d5ca]">
                Precision Machinery
              </span>
            </a>

            <p className="mt-6 max-w-[295px] text-[12px] leading-5 text-white/55">
              Engineering high-performance plastic moulding machinery with
              precision, efficiency and reliability for modern industrial
              production.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-2.5">
              <SocialIcon icon={<FiFacebook />} />
              <SocialIcon icon={<FiInstagram />} />
              <SocialIcon icon={<FiLinkedin />} />
              <SocialIcon icon={<FiYoutube />} />
              <SocialIcon icon={<FiTwitter />} />
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}
          <div className="lg:col-span-2">
            <h3 className="text-[16px] font-semibold text-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {[
                ["Home", "#"],
                ["About Us", "#about"],
                ["Products", "#products"],
                ["Blogs", "#blog"],
                ["Contact Us", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-1 text-[12px] text-white/65 transition-colors duration-300 hover:text-[#78d5ca]"
                >
                  <span>{label}</span>

                  <FiArrowUpRight className="text-[11px] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          {/* =================================================
              WORKING HOURS
          ================================================== */}
          <div className="lg:col-span-3">
            <h3 className="text-[16px] font-semibold text-white">
              Working Hours
            </h3>

            <div className="mt-5 overflow-hidden rounded-lg border border-[#e5e7eb] bg-white text-[#252b29] shadow-lg">
              {/* Monday - Friday */}
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                <span className="text-[12px] font-bold">Mon–Fri:</span>

                <span className="text-[12px]">8:00 AM – 6:00 PM</span>
              </div>

              {/* Saturday */}
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                <span className="text-[12px] font-bold">Sat:</span>

                <span className="text-[12px]">9:00 AM – 3:00 PM</span>
              </div>

              {/* Sunday */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[12px] font-bold">Sun:</span>

                <span className="text-[12px]">Closed</span>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}
          <div className="lg:col-span-3">
            <h3 className="text-[16px] font-semibold text-white">Contact Us</h3>

            <div className="mt-5 space-y-4">
              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="group flex items-start gap-3 text-white/65 transition-colors hover:text-[#78d5ca]"
              >
                <FiPhone className="mt-0.5 shrink-0 text-[15px]" />

                <span className="text-[12px]">+91 98765 43210</span>
              </a>

              {/* Location */}
              <a
                href="#"
                className="group flex items-start gap-3 text-white/65 transition-colors hover:text-[#78d5ca]"
              >
                <FiMapPin className="mt-0.5 shrink-0 text-[15px]" />

                <span className="text-[12px] leading-5">
                  Texmo Precision Machinery
                  <br />
                  India
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:sales@texmoprecision.com"
                className="group flex items-start gap-3 text-white/65 transition-colors hover:text-[#78d5ca]"
              >
                <FiMail className="mt-0.5 shrink-0 text-[15px]" />

                <span className="break-all text-[12px]">
                  sales@texmoprecision.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM LINE
        ====================================================== */}
        <div className="mt-10 border-t border-white/[0.09] pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] text-white/40 sm:text-[11px]">
              © {new Date().getFullYear()} Texmo Precision Machinery. All Rights
              Reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-[10px] text-white/45 transition-colors hover:text-[#78d5ca]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[10px] text-white/45 transition-colors hover:text-[#78d5ca]"
              >
                Terms & Conditions
              </a>

              <span className="hidden h-3 w-px bg-white/10 sm:block" />

              <span className="text-[10px] text-white/40">
                Powered by{" "}
                <span className="font-semibold text-[#78d5ca]">
                  Your Company
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   SOCIAL ICON
========================================================= */

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#17110f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#78d5ca] hover:text-[#0d1816]"
    >
      <span className="text-[13px]">{icon}</span>
    </a>
  );
}
