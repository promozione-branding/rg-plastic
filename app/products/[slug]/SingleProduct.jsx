"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FileDown, Send } from "lucide-react";

/* Palette: ink #0B2233 · steel #EDF1F4 · paper #FFFFFF · brand #0878D1 · signal #F2A81D */

const sections = [
  ["overview", "Overview"],
  ["features", "Features"],
  ["specs", "Specifications"],
  ["applications", "Applications"],
  ["enquiry", "Get a quote"],
];

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878D1] focus-visible:ring-offset-2";

function Heading({ title, intro, light }) {
  return (
    <div className="max-w-2xl">
      <h2
        className={`text-4xl font-bold leading-none tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-[#0B2233]"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-[15px] leading-7 ${light ? "text-white/70" : "text-slate-600"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export default function SingleProduct({ product }) {
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);
  const current = product.images[active];

  return (
    <main className={"scroll-smooth mt-15 bg-white text-[#0B2233]"}>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-200 bg-[#EDF1F4] pt-10"
      >
        <ol className="mx-auto flex max-w-[1360px] flex-wrap items-center gap-2 px-5 py-3.5 text-[13px] text-slate-600 sm:px-8 lg:px-8">
  {[
    ["Home", "/"],
    ["Products", "/products"],
    [`${product.name}`, `/products/${product.slug}`],
  ].map(([label, href], index) => (
    <li key={href} className="flex items-center gap-2">
      {index > 0 && <span>/</span>}

      <Link
        href={href}
        className={`rounded hover:text-[#0878D1] ${focus}`}
      >
        {label}
      </Link>
    </li>
  ))}
</ol>
      </nav>

      {/* Hero */}
      {/* Hero */}
      <section className="bg-[#EDF1F4]">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-5 pb-14 pt-8 sm:px-8 lg:grid-cols-[1.1fr_.9fr] md:gap-16 md:px-8 md:pb-20 md:pt-5">
          {/* Gallery */}
          <div className="flex flex-col gap-3 lg:flex-row-reverse">
            <div className="relative h-100  flex-1 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <Image
                src={current.src}
                alt={`${product.name}: ${current.label}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain p-6 sm:p-7"
              />
              <span className="absolute bottom-4 left-4 rounded bg-[#0B2233] px-3 py-1.5 text-xs font-medium text-white">
                {current.label}
              </span>
            </div>

            <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
              {product.images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${img.label}`}
                  aria-pressed={active === i}
                  className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-white transition-colors ${focus} ${
                    active === i
                      ? "border-[#0878D1]"
                      : "border-transparent hover:border-slate-300"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-contain p-1.5"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            {/* <p className="text-sm font-semibold text-[#0878D1]">
              {product.category} · Model {product.model}
            </p> */}
            <h1
              className={`mt-3 text-5xl font-extrabold leading-[.95] tracking-tight sm:text-6xl `}
            >
              {product.name}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-700">
              {product.description}
            </p>

            {/* Rating plate: the one memorable element */}
            {/* <dl className="mt-8 grid grid-cols-2 overflow-hidden rounded-lg border-2 border-[#0B2233] bg-white sm:grid-cols-4">
              {product.highlights.map(([value, label], i) => (
                <div
                  key={label}
                  className={`px-2 py-3  text-center ${i > 0 ? "sm:border-l-2" : ""} ${
                    i % 2 ? "border-l-2" : ""
                  } ${i > 1 ? "border-t-2 sm:border-t-0" : ""} border-[#0B2233]`}
                >
                  <dd className={`text-[20px] font-bold leading-none`}>{value}</dd>
                  <dt className="mt-1.5 text-xs text-slate-600">{label}</dt>
                </div>
              ))}
            </dl> */}

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Link
                href="#enquiry"
                className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#0878D1] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0669B8] ${focus}`}
              >
                <Send size={15} />
                Get a quote
              </Link>

              <Link
                href="#enquiry"
                className={`inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0669B8] ${focus}`}
              >
                <FaWhatsapp size={15} />
                WhatsApp Now
              </Link>

              <button
                type="button"
                className={`inline-flex items-center justify-center gap-2 rounded-lg border border-[#0B2233] px-4 py-2.5 text-sm font-semibold text-[#0B2233] transition hover:bg-[#0B2233] hover:text-white ${focus}`}
              >
                <FileDown size={15} />
                Download brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section nav */}
      <div className="sticky top-25 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav
          aria-label="Product sections"
          className="mx-auto flex max-w-[1360px] gap-1 overflow-x-auto px-5 sm:px-8 lg:px-8"
        >
          {sections.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`shrink-0 border-b-2 border-transparent px-4 py-3.5 text-sm font-medium text-slate-600 transition hover:border-[#0878D1] hover:text-[#0B2233] ${focus}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Overview */}
      <section id="overview" className="scroll-mt-14">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-13 ">
          <Heading title="Reliable power for demanding sites" />
          <div className="space-y-4 text-[15px] leading-7 text-slate-700">
            <p>{product.overview}</p>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="scroll-mt-14 bg-[#EDF1F4]">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 py-16 sm:px-8 md:px-8 md:py-13 lg:grid-cols-[1.4fr_.6fr] lg:gap-10">
          {/* Specifications */}
          <div>
            <Heading title="Technical specifications" />

            <dl className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
              {/* Model Specifications Table */}
              {product.modelSpecifications?.length > 0 && (
                <div className="my-6 w-full overflow-x-auto">
                  <dl>
                    {/* Labels */}
                    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 px-5 py-3.5 text-sm font-semibold">
                      <dt>Model</dt>
                      <dt>Main Motor (HP)</dt>
                      <dt>Screw Diameter (mm)</dt>
                      <dt>Max Output (kg/hr)</dt>
                    </div>

                    {/* Model Data */}
                    {product.modelSpecifications.map((i, index) => (
                      <div
                        key={i.model}
                        className={`grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 px-5 py-3.5 text-sm ${
                          index % 2 ? "bg-slate-50" : ""
                        }`}
                      >
                        <dd className="text-slate-600">{i.model}</dd>
                        <dd className="font-semibold">{i.mainMotorHP}</dd>
                        <dd className="text-slate-600">{i.screwDiameterMM}</dd>
                        <dd className="font-semibold">{i.maxOutputKgHr}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </dl>
          </div>

          {/* Sticky Right Side */}
          <aside className="self-start md:sticky md:top-35 rounded-xl bg-white p-6">
            <h3 className="text-2xl font-bold">Need the full datasheet?</h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Download dimensions, fuel consumption at load and electrical
              details.
            </p>

            <button
              type="button"
              className={`mt-5 w-full rounded-lg bg-[#0B2233] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0878D1] ${focus}`}
            >
              Download brochure
            </button>

            <p className="mt-6 text-xs font-semibold text-slate-500">
              Certifications
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {["CE", "ISO", "CPCB"].map((c) => (
                <span
                  key={c}
                  className="rounded border border-slate-300 px-3 py-1.5 text-sm font-bold"
                >
                  {c}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-14 bg-[#0B2233]">
        <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 md:px-8 md:py-13">
          <Heading light title="Features" />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((item) => (
              <div key={item} className="border-t-2 border-[#F2A81D] pt-5">
                <h3 className={`text-2xl font-bold text-white`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}

      <section id="applications" className="scroll-mt-14">
        <div className="mx-auto max-w-[1360px] px-5 py-6 sm:px-8 md:px-8 md:py-13">
          <Heading
            title="Where it works"
            intro="From the factory floor to the server room, one generator size covers many jobs."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {product.applications.map((a, index) => (
              <div
                key={a.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0878D1] hover:shadow-lg"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B2233] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold text-[#0B2233]">{a.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {a.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="scroll-mt-14 bg-[#0878D1]">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.8fr_1.2fr] md:gap-16 md:px-8 md:py-13">
          <div className="text-white">
            <h2 className={`text-4xl font-bold leading-none sm:text-5xl`}>
              Tell us your power need.
              <br /> We will send a quote.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-white/85">
              Share your load and site details. Our team will confirm the right
              configuration, price and delivery time.
            </p>
            <ul className="mt-8 space-y-3 text-sm font-medium">
              {[
                "Help choosing the right size",
                "Custom canopy and panel options",
                "Installation and after-sales service",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F2A81D] text-xs font-bold text-[#0B2233]">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-xl bg-white p-6 text-[#0B2233] sm:p-8"
          >
            {sent ? (
              <div role="status" className="py-12 text-center">
                <div className={`text-3xl font-bold`}>Enquiry sent</div>
                <p className="mt-2 text-sm text-slate-600">
                  Our team will contact you shortly with your quote.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91"
                  />
                </div>
                <label className="mt-4 block text-sm font-medium">
                  Message
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Load, run hours, location, any special needs"
                    className={`mt-1.5 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 ${focus}`}
                  />
                </label>
                <button
                  type="submit"
                  className={`mt-5 w-full rounded-lg bg-[#0B2233] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0878D1] sm:w-auto ${focus}`}
                >
                  Send enquiry
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <label className="block text-sm font-medium">
      {label}
      {required && <span className="text-[#0878D1]"> *</span>}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 ${focus}`}
      />
    </label>
  );
}
