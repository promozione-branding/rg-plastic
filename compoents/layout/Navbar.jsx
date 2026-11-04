
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  FiPhoneCall,
  FiFileText,
  FiArrowRight,
  FiChevronDown,
} from "react-icons/fi";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

import MachineMarquee from "../MachineMarquee";
import PopupForm from "../PopupForm";
import { products } from "@/data/data";

/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products", dropdown: true },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

function isNavItemActive(pathname, href) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return null;
  }

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  };

  const openQuotePopup = () => {
    setIsPopupOpen(true);
    closeMobileMenu();
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">

        {/* MACHINE MARQUEE */}
        <MachineMarquee />

        {/* MAIN NAVBAR */}
        <div className="mx-auto max-w-full">

          <div className="relative border border-white/70 bg-white/95 shadow-[0_10px_40px_rgba(6,43,77,0.10)] backdrop-blur-xl">

            {/* NAVBAR INNER */}
            <div className="flex h-[70px] items-center justify-between px-4 sm:px-6 lg:h-[89px]">

              {/* LOGO */}
              <Link
                href="/"
                className="my-2 flex shrink-0 items-center"
              >
                <Image
                  src="/dharam.webp"
                  alt="Dharam Engg Work - Plastic Recycling Machines"
                  width={190}
                  height={70}
                  priority
                  className="h-auto w-[150px] object-contain sm:w-[155px]"
                />
              </Link>

              {/* DESKTOP NAVIGATION */}
              <nav className="hidden items-center gap-1 lg:flex">

                {navItems.map((item) => {
                  const active = isNavItemActive(
                    pathname,
                    item.href
                  );

                  const linkClassName = `
                    group relative flex items-center gap-1
                    rounded-xl px-4 py-3
                    text-[15px] font-semibold
                    transition-all duration-300
                    xl:px-5
                    ${
                      active
                        ? "bg-[#EAF5FC] text-[#0070FF]"
                        : "text-[#0070FF] hover:bg-[#F3F8FC] hover:text-[#175a50]"
                    }
                  `;

                  /* PRODUCTS DROPDOWN */
                  if (item.dropdown) {
                    return (
                      <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                        onFocus={() => setProductsOpen(true)}
                        onBlur={(event) => {
                          if (
                            !event.currentTarget.contains(
                              event.relatedTarget
                            )
                          ) {
                            setProductsOpen(false);
                          }
                        }}
                      >

                        {/* DROPDOWN TRIGGER */}
                        <Link
                          href={item.href}
                          onClick={() => setProductsOpen(false)}
                          aria-current={
                            active ? "page" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={productsOpen}
                          className={linkClassName}
                        >
                          <span>{item.label}</span>

                          <FiChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${
                              productsOpen
                                ? "rotate-180 text-[#19c5b5]"
                                : ""
                            }`}
                          />
                        </Link>

                        {/* DROPDOWN PANEL */}
                        <div
                          className={`absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-4 transition-all duration-300 ${
                            productsOpen
                              ? "visible translate-y-0 opacity-100"
                              : "invisible translate-y-3 opacity-0"
                          }`}
                        >

                          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.16)]">

                            {/* TOP ACCENT */}
                            <div className="h-[3px] bg-[#0F52BA]" />

                            {/* HEADER */}

                            

                            {/* PRODUCT LIST */}
                            <div className="p-3">

                              <div className="mb-2 flex items-center justify-between px-3 pt-1">

                                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                  Our Machinery
                                </span>

                                <span className="text-[10px] font-medium text-slate-400">
                                  01 —{" "}
                                  {String(
                                    Math.min(products.length, 6)
                                  ).padStart(2, "0")}
                                </span>

                              </div>

                              <div className="space-y-1">

                                {products.slice(0, 6).map(
                                  (product, index) => (
                                    <Link
                                      key={product.slug}
                                      href={`/products/${product.slug}`}
                                      onClick={() =>
                                        setProductsOpen(false)
                                      }
                                      className="group/item flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-[#0F52BA]"
                                    >

                                      {/* NUMBER */}
                                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[10px] font-bold text-slate-500 transition-all duration-300 group-hover/item:bg-[#0F52BA] group-hover:border-2 group-hover:border-amber-50 group-hover/item:text-white">
                                        {String(index + 1).padStart(
                                          2,
                                          "0"
                                        )}
                                      </span>

                                      {/* PRODUCT NAME */}
                                      <span className="min-w-0 flex-1 text-[13px] font-semibold text-[#000] transition-colors group-hover/item:text-[#fff]">
                                        {product.name}
                                      </span>

                                      {/* ARROW */}
                                      <FiArrowRight
                                        size={15}
                                        className="shrink-0 text-slate-300 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-[#0F52BA]"
                                      />

                                    </Link>
                                  )
                                )}

                              </div>

                              {/* VIEW ALL PRODUCTS */}
                              <Link
                                href="/products"
                                onClick={() =>
                                  setProductsOpen(false)
                                }
                                className="group mt-3 flex items-center justify-between rounded-xl bg-[#101d1b] px-5 py-4 transition-all duration-300 hover:bg-[#0F52BA]"
                              >

                                <div>

                                  <span className="block text-[12px] font-bold text-white">
                                    View All Products
                                  </span>

                                  <span className="mt-1 block text-[10px] text-white/50">
                                    Explore our complete machinery range
                                  </span>

                                </div>

                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-300 group-hover:translate-x-1">
                                  <FiArrowRight size={17} />
                                </span>

                              </Link>

                            </div>

                          </div>

                        </div>

                      </div>
                    );
                  }

                  /* NORMAL NAVIGATION LINKS */
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={
                        active ? "page" : undefined
                      }
                      className={linkClassName}
                    >
                      {item.label}
                    </Link>
                  );
                })}

              </nav>

              {/* RIGHT SIDE CTA */}
              <div className="hidden items-center gap-3 lg:flex">

                {/* TALK TO EXPERT */}
                <Link
                  href="tel:+919891468647"
                  className="group flex items-center justify-center gap-3 rounded-xl border border-[#D9E5EF] bg-[#F7FAFC] px-3 py-2 text-sm font-semibold text-[#092F4F] transition-all duration-300 hover:border-[#0070FF] hover:text-[#0070FF]"
                >

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF5FC] text-[#0070FF] transition-all duration-300 group-hover:bg-[#0070FF] group-hover:text-white">

                    <FiPhoneCall
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-12"
                    />

                  </span>

                  <span className="flex flex-col items-start leading-none">

                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400">
                      Call Us
                    </span>

                    <span className="mt-1 font-bold text-[#092F4F] group-hover:text-[#0070FF]">
                      +91 98914 68647
                    </span>

                  </span>

                </Link>

                {/* GET A QUOTE */}
                <button
                  onClick={openQuotePopup}
                  className="group relative flex h-11 items-center gap-2 overflow-hidden rounded-xl bg-[#0F52BA] px-5 text-[13px] font-semibold text-white shadow-[0_6px_18px_rgba(7,91,150,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4289f5] hover:shadow-[0_9px_24px_rgba(7,91,150,0.28)]"
                >

                  <FiFileText
                    size={16}
                    className="relative z-10"
                  />

                  <span className="relative z-10 whitespace-nowrap">
                    Get a Quote
                  </span>

                  <FiArrowRight
                    size={15}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {/* SHINE EFFECT */}
                  <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/15 transition-all duration-700 group-hover:left-[130%]" />

                </button>

              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                aria-label={
                  mobileOpen
                    ? "Close navigation"
                    : "Open navigation"
                }
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-[#092F4F] transition-all duration-300 hover:border-[#075B96]/30 hover:bg-[#EAF5FC] lg:hidden"
              >

                <span
                  className={`absolute transition-all duration-300 ${
                    mobileOpen
                      ? "scale-75 rotate-90 opacity-0"
                      : "scale-100 rotate-0 opacity-100"
                  }`}
                >
                  <HiOutlineMenuAlt3 className="text-[24px]" />
                </span>

                <span
                  className={`absolute transition-all duration-300 ${
                    mobileOpen
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-75 -rotate-90 opacity-0"
                  }`}
                >
                  <IoCloseOutline className="text-[27px]" />
                </span>

              </button>

            </div>

            {/* =====================================================
                MOBILE MENU
            ====================================================== */}

            <div
              className={`grid overflow-hidden rounded-b-2xl border-t border-gray-100 transition-all duration-500 lg:hidden ${
                mobileOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >

              <div className="min-h-0 overflow-hidden">

                <div className="px-4 pb-5 pt-2 sm:px-6">

                  <nav className="flex flex-col">

                    {navItems.map((item, index) => {
                      const active = isNavItemActive(
                        pathname,
                        item.href
                      );

                      /* MOBILE PRODUCTS DROPDOWN */
                      if (item.dropdown) {
                        return (
                          <div
                            key={item.label}
                            className="border-b border-gray-100"
                          >

                            <div className="flex items-center justify-between">

                              <Link
                                href={item.href}
                                onClick={closeMobileMenu}
                                className={`flex-1 rounded-lg px-3 py-4 text-sm font-semibold transition-colors ${
                                  active
                                    ? "text-[#075B96]"
                                    : "text-[#475663]"
                                }`}
                              >
                                Products
                              </Link>

                              <button
                                type="button"
                                aria-label="Toggle products submenu"
                                aria-expanded={mobileProductsOpen}
                                onClick={() =>
                                  setMobileProductsOpen(
                                    !mobileProductsOpen
                                  )
                                }
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-[#475663] transition-colors hover:bg-[#EAF5FC] hover:text-[#008f82]"
                              >
                                <FiChevronDown
                                  size={18}
                                  className={`transition-transform duration-300 ${
                                    mobileProductsOpen
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>

                            </div>

                            {/* MOBILE PRODUCT LIST */}
                            <div
                              className={`grid transition-all duration-300 ${
                                mobileProductsOpen
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >

                              <div className="min-h-0 overflow-hidden">

                                <div className="mb-3 ml-3 space-y-1 border-l-2 border-[#19c5b5]/40 pl-3">

                                  {products.slice(0, 6).map(
                                    (product, index) => (
                                      <Link
                                        key={product.slug}
                                        href={`/products/${product.slug}`}
                                        onClick={closeMobileMenu}
                                        className="group flex items-center justify-between rounded-lg px-3 py-3 text-[13px] font-medium text-[#475663] transition-all hover:bg-[#eff9f8] hover:text-[#008f82]"
                                      >

                                        <span className="flex items-center gap-3">

                                          <span className="text-[10px] font-bold text-[#008f82]/60">
                                            {String(index + 1).padStart(
                                              2,
                                              "0"
                                            )}
                                          </span>

                                          {product.name}

                                        </span>

                                        <FiArrowRight
                                          size={14}
                                          className="text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-[#008f82]"
                                        />

                                      </Link>
                                    )
                                  )}

                                  <Link
                                    href="/products"
                                    onClick={closeMobileMenu}
                                    className="flex items-center justify-between rounded-lg bg-[#101d1b] px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#0F52BA]"
                                  >
                                    View All Products
                                    <FiArrowRight size={15} />
                                  </Link>

                                </div>

                              </div>

                            </div>

                          </div>
                        );
                      }

                      /* NORMAL MOBILE LINKS */
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMobileMenu}
                          aria-current={
                            active ? "page" : undefined
                          }
                          className={`flex items-center justify-between rounded-lg border-b border-gray-100 px-3 py-4 text-sm font-semibold transition-all duration-300 ${
                            active
                              ? "bg-[#EAF5FC] text-[#075B96]"
                              : "text-[#475663] hover:pl-4 hover:text-[#075B96]"
                          }`}
                          style={{
                            transitionDelay: mobileOpen
                              ? `${index * 45}ms`
                              : "0ms",
                          }}
                        >

                          <span>{item.label}</span>

                          <FiArrowRight
                            size={16}
                            className={
                              active
                                ? "text-[#075B96]"
                                : "text-gray-300"
                            }
                          />

                        </Link>
                      );
                    })}

                  </nav>

                  {/* MOBILE CTA */}
                  <div className="mt-5">

                    <button
                      onClick={openQuotePopup}
                      className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#075B96] px-2 text-sm font-semibold text-white shadow-lg shadow-[#075B96]/15 transition-all duration-300 hover:bg-[#0F52BA]"
                    >

                      <FiFileText size={17} />

                      <span>Get a Quote</span>

                      <FiArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />

                    </button>

                  </div>

                  {/* MOBILE CONTACT */}
                  <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">

                    <FiPhoneCall size={13} />

                    <span>Call us</span>

                    <a
                      href="tel:+919891468647"
                      className="font-semibold text-[#075B96]"
                    >
                      +91 98914 68647
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* QUOTE POPUP */}
        <PopupForm
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />

      </header>
    </>
  );
}
