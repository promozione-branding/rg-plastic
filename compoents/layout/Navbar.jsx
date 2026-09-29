"use client";

import { useState } from "react";
import {
  FiCheckCircle,
  FiGlobe,
  FiPhoneCall,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Blogs", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* =====================================================
          TOP INFORMATION BAR
      ====================================================== */}
      <div className="bg-[#14211f] text-white">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Left Information */}
          <div className="flex min-w-0 items-center gap-3 text-[10px] sm:gap-5 sm:text-[11px] md:text-xs">

            <div className="flex text-base items-center gap-1.5">
              <FiCheckCircle
                className="shrink-0 text-[14px] text-[#a9dfd1]"
              />

              <span className="whitespace-nowrap">
                ISO 9001:2015 & CE Certified
              </span>
            </div>

            <span className="hidden h-3.5 w-px bg-white/15 sm:block" />

            <div className="hidden text-base items-center text-base gap-1.5 sm:flex">
              <FiGlobe
                className="shrink-0 text-[14px] text-[#a9dfd1]"
              />

              <span className="whitespace-nowrap">
                Global Exports to 50+ Countries
              </span>
            </div>
          </div>

          {/* Sales Hotline */}
          <a
            href="tel:+919876543210"
            className="group ml-3 text-base flex shrink-0 items-center gap-1.5 text-[10px] sm:text-[11px] md:text-xs"
          >
            <FiPhoneCall
              className="shrink-0 text-[14px] text-[#a9dfd1] transition-transform duration-300 group-hover:rotate-12"
            />

            <span className="hidden text-base text-white/50 sm:inline">
              Connect
            </span>

            <span className="font-semibold text-base text-[#a9dfd1] transition-colors duration-300 group-hover:text-white">
              +91 98765 43210
            </span>
          </a>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}
      <div className="border-b border-black/[0.06] bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.045)] backdrop-blur-xl">

        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:h-[76px] lg:px-8">

          {/* =================================================
              LOGO
          ================================================= */}
          <a
            href="#"
            className="group flex shrink-0 items-center"
          >
            <div className="flex flex-col">
              <span className="text-[19px] font-extrabold leading-[0.9] tracking-[-0.04em] text-[#14211f] transition-colors duration-300 group-hover:text-[#008f82] sm:text-[21px]">
                TEXMO
              </span>

              <span className="mt-1 text-[7px] font-bold uppercase tracking-[0.24em] text-gray-500 sm:text-[8px]">
                Precision Machinery
              </span>
            </div>
          </a>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`group relative mx-1 px-3 py-6 text-[13px] font-medium transition-all duration-300 xl:px-3.5 xl:text-[14px] ${
                  item.active
                    ? "text-[#008f82]"
                    : "text-[#4b5755] hover:text-[#008f82]"
                }`}
              >
                <span className="relative text-base z-10">
                  {item.label}
                </span>

                {/* Active / Hover Line */}
                <span
                  className={`absolute bottom-[14px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#008f82] transition-all duration-300 ${
                    item.active
                      ? "w-[calc(100%-24px)] opacity-100"
                      : "w-0 opacity-0 group-hover:w-[calc(100%-24px)] group-hover:opacity-100"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================= */}
          <div className="hidden items-center gap-2 lg:flex">

            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="group flex h-10 items-center gap-2 rounded-lg border border-[#e5e9e8] bg-[#f7f9f8] px-3 text-[13px] font-medium text-[#34403e] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#008f82]/20 hover:bg-[#008f82]/5 hover:text-[#008f82]"
            >
              <FiPhoneCall
                className="text-[16px] transition-transform duration-300 group-hover:rotate-12"
              />

              <span className="hidden text-base xl:inline">
                Direct Dial
              </span>
            </a>

            {/* Get Quote */}
            <a
              href="#quote"
              className="group relative flex h-10 items-center gap-2 overflow-hidden rounded-lg bg-[#008f82] px-4 text-[13px] font-semibold text-white shadow-[0_4px_12px_rgba(0,143,130,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00796f] hover:shadow-[0_7px_18px_rgba(0,143,130,0.22)]"
            >
              <FiFileText className="relative z-10 text-[16px] transition-transform duration-300 group-hover:-rotate-6" />

              <span className="relative text-base z-10 whitespace-nowrap">
                Get a Quote
              </span>

              {/* Subtle Shine */}
              <span className="absolute inset-y-0 -left-[100%] w-1/2 -skew-x-12 bg-white/15 transition-all duration-700 group-hover:left-[130%]" />
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#e4e8e7] bg-[#f8faf9] text-[#263331] transition-all duration-300 hover:border-[#008f82]/30 hover:bg-[#008f82]/5 hover:text-[#008f82] lg:hidden"
          >
            <span
              className={`absolute transition-all duration-300 ${
                mobileOpen
                  ? "scale-90 rotate-0 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}
            >
              <HiOutlineMenuAlt3 className="text-[24px]" />
            </span>

            <span
              className={`absolute transition-all duration-300 ${
                mobileOpen
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-90 rotate-90 opacity-0"
              }`}
            >
              <IoCloseOutline className="text-[27px]" />
            </span>
          </button>
        </div>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}
        <div
          className={`grid overflow-hidden border-t border-black/[0.05] bg-white transition-[grid-template-rows,opacity] duration-400 ease-out lg:hidden ${
            mobileOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 pb-5 pt-2 sm:px-6">

              {/* Mobile Navigation */}
              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`group flex items-center justify-between border-b border-gray-100 py-3.5 text-[14px] font-medium transition-all duration-300 ${
                      item.active
                        ? "text-[#008f82]"
                        : "text-[#4a5553] hover:pl-1 hover:text-[#008f82]"
                    }`}
                    style={{
                      transitionDelay: mobileOpen
                        ? `${index * 45}ms`
                        : "0ms",
                    }}
                  >
                    <span>{item.label}</span>

                    <FiArrowRight
                      className={`text-[16px] transition-all duration-300 ${
                        item.active
                          ? "translate-x-0 opacity-100"
                          : "translate-x-0 opacity-30 group-hover:translate-x-1 group-hover:opacity-100"
                      }`}
                    />
                  </a>
                ))}
              </nav>

              {/* =================================================
                  MOBILE ACTIONS
              ================================================= */}
              <div className="mt-4 grid grid-cols-2 gap-2">

                <a
                  href="tel:+919876543210"
                  className="group flex h-11 items-center justify-center gap-2 rounded-lg border border-[#e4e8e7] bg-[#f8faf9] text-[13px] font-medium text-[#34403e] transition-all duration-300 hover:border-[#008f82]/25 hover:bg-[#008f82]/5 hover:text-[#008f82]"
                >
                  <FiPhoneCall className="text-[16px] transition-transform duration-300 group-hover:rotate-12" />
                  Call Now
                </a>

                <a
                  href="#quote"
                  onClick={() => setMobileOpen(false)}
                  className="group flex h-11 items-center justify-center gap-2 rounded-lg bg-[#008f82] text-[13px] font-semibold text-white shadow-[0_4px_12px_rgba(0,143,130,0.15)] transition-all duration-300 hover:bg-[#00796f]"
                >
                  <FiFileText className="text-[16px]" />
                  Get a Quote
                </a>
              </div>

              {/* Mobile Phone Info */}
              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-gray-400">
                <FiPhoneCall className="text-[13px]" />

                <span>Connect</span>

                <span className="text-gray-600">
                  +91 98765 43210
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}