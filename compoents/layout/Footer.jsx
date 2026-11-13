"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { products } from "@/data/data";
import {
  FiPhone,
  FiMapPin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return null;
  }

  return (
    <footer className="relative isolate overflow-hidden bg-[#061A2A] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 0.7px, transparent 0.7px)",
          backgroundSize: "6px 6px",
        }}
      />
      <div className="pointer-events-none absolute -right-40 -top-48 h-[440px] w-[440px] rounded-full bg-[#0d2461]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[420px] w-[420px] rounded-full bg-[#087e9d]/15 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#55B8F2]/70 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-11 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1.1fr_1fr] lg:gap-x-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="RG Plastic home"
              className="inline-flex rounded-xl bg-white p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Image
                src="/dharam.webp"
                alt="RG Plastic - Plastic Processing and Recycling Machines"
                width={190}
                height={70}
                className="h-auto w-[155px] object-contain"
              />
            </Link>
            <p className="mt-5 max-w-[330px] text-[14px] leading-6 text-white/65">
              Delivering reliable and high-performance plastic processing
              machinery with precision, efficiency and engineering excellence
              for modern industrial production.
            </p>
            <Link
              href="/contact"
              className="group text-[13px] mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[11px] font-semibold text-white transition-all duration-300 hover:border-[#55B8F2]/60 hover:bg-[#55B8F2]/10"
            >
              Talk to our team
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <FooterColumn title="Quick Links">
            <nav className="flex flex-col gap-3">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Contact Us", "/contact"],
                ["Sitemap", "/sitemap"],
                ["Blogs", "/blogs"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex w-fit items-center gap-1.5 text-[14px] text-white/60 transition-colors duration-300 hover:text-[#55B8F2]"
                >
                  <span>{label}</span>
                  <FiArrowUpRight className="text-[14px] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </FooterColumn>

          <FooterColumn title="Products">
            <nav className="flex flex-col gap-3">
              {products.slice(0, 5).map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="w-fit max-w-full text-[14px] leading-5 text-white/60 transition-colors duration-300 hover:text-[#55B8F2]"
                >
                  {product.name}
                </Link>
              ))}
              <Link
                href="/products"
                className="group mt-1 inline-flex w-fit items-center gap-1.5 text-[12px] font-semibold text-[#55B8F2] transition-colors hover:text-white"
              >
                More Products
                <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </nav>
          </FooterColumn>

          <FooterColumn title="Contact Us">
            <div className="flex flex-col gap-3">
              <ContactLink
                href="tel:+919891468647"
                icon={<FiPhone />}
                label="+91 98914 68647"
              />
              <ContactLink
                href="https://maps.app.goo.gl/q27RdELNotqVzsgb9"
                icon={<FiMapPin />}
                label={
                  <>
                    Dharam Engg Work
                    <br />
                    Plot No. 19, Pocket G,
                    <br />
                    DSIIDC Sector-5, Bawana Industrial Area,
                    <br />
                    North West Delhi, India
                  </>
                }
                external
              />
              <ContactLink
                href="mailto:info@rgplastic.com"
                icon={<FiMail />}
                label="info@dharamenggwork.com"
              />
            </div>
          </FooterColumn>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-white/45">
              © {new Date().getFullYear()} RG Plastic. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="#"
                className="text-[13px] text-white/45 transition-colors hover:text-[#55B8F2]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[13px] text-white/45 transition-colors hover:text-[#55B8F2]"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <section>
      <h3 className="mb-5 flex items-center gap-2.5 text-[14px] font-bold uppercase tracking-[0.16em] text-white">
        <span className="h-1.5 w-1.5 rounded-full bg-[#55B8F2]" />
        {title}
      </h3>
      {children}
    </section>
  );
}

function ContactLink({ href, icon, label, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-3 text-white/60 transition-colors duration-300 hover:text-white"
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-[14px] text-[#55B8F2] transition-all duration-300 group-hover:border-[#55B8F2]/40 group-hover:bg-[#55B8F2]/10">
        {icon}
      </span>
      <span className="pt-1 text-[14px] leading-5">{label}</span>
    </a>
  );
}
