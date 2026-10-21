
import React from "react";
import Link from "next/link";
import {
  FiHome,
  FiInfo,
  FiGrid,
  FiPhone,
  FiFileText,
  FiMap,
  FiArrowUpRight,
} from "react-icons/fi";
import { products } from "@/data/data";

export default function Sitemap() {
  const staticPages = [
    { name: "Home", path: "/", icon: FiHome },
    { name: "About Us", path: "/about", icon: FiInfo },
    { name: "Products", path: "/products", icon: FiGrid },
    { name: "Contact Us", path: "/contact", icon: FiPhone },
    { name: "Sitemap", path: "/sitemap", icon: FiMap },
  ];

  return (
    <main className="min-h-screen bg-white text-[#0B2233]">
      {/* Header */}
      <section className="bg-[#0B2233] px-5 mt-20 py-16 text-white sm:py-15">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#55B8F2]">
            Navigate Our Website
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Website <span className="text-[#55B8F2]">Sitemap</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Explore all pages and products available on Dharam
            Engg Work&apos;s website.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl space-y-8">

          {/* Box 1: All Static Pages */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0878D1]">
                <FiMap size={22} />
              </div>

              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  Website Pages
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Explore the main sections of our website
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {staticPages.map((page) => {
                const Icon = page.icon;

                return (
                  <Link
                    key={page.path}
                    href={page.path}
                    className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 transition duration-300 hover:border-[#55B8F2] hover:bg-blue-50 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#0878D1] shadow-sm transition group-hover:bg-[#0878D1] group-hover:text-white">
                        <Icon size={19} />
                      </div>

                      <span className="text-sm font-semibold text-gray-700 transition group-hover:text-[#0878D1]">
                        {page.name}
                      </span>
                    </div>

                    <FiArrowUpRight
                      size={18}
                      className="shrink-0 text-gray-400 transition group-hover:text-[#0878D1]"
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Box 2: All Products */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0878D1]">
                <FiGrid size={22} />
              </div>

              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  Our Products
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Browse our complete machinery range
                </p>
              </div>
            </div>

            {products?.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => {
                  const productName =
                    product.name ||
                    product.title ||
                    `Product ${index + 1}`;

                  const productPath =
                    product.path ||
                    (product.slug
                      ? `/products/${product.slug}`
                      : `/products/${product.id}`);

                  return (
                    <Link
                      key={product.id ?? product.slug ?? index}
                      href={productPath}
                      className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 transition duration-300 hover:border-[#55B8F2] hover:bg-blue-50 hover:shadow-md"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#0878D1] shadow-sm transition group-hover:bg-[#0878D1] group-hover:text-white">
                          <FiFileText size={19} />
                        </div>

                        <span className="text-sm font-semibold text-gray-700 transition group-hover:text-[#0878D1]">
                          {productName}
                        </span>
                      </div>

                      <FiArrowUpRight
                        size={18}
                        className="ml-2 shrink-0 text-gray-400 transition group-hover:text-[#0878D1]"
                      />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p className="rounded-xl bg-gray-50 p-5 text-sm text-gray-500">
                No products are currently available.
              </p>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
