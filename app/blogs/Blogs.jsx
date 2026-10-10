"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Factory,
  Menu,
  Search,
  Tag,
  X,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    title:
      "How to Choose the Right Plastic Recycling Machine for Your Business",
    excerpt:
      "Explore the key factors to consider when selecting plastic recycling equipment, from processing capacity and material compatibility to energy efficiency.",
    category: "Recycling Technology",
    date: "October 08, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
    slug: "choose-right-plastic-recycling-machine",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding the Plastic Granulation Process",
    excerpt:
      "Discover how plastic granulators transform scrap into reusable material and why particle consistency matters for downstream production.",
    category: "Processing Machinery",
    date: "October 02, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
    slug: "plastic-granulation-process",
  },
  {
    id: 3,
    title: "The Future of Sustainable Plastic Manufacturing",
    excerpt:
      "Learn how modern recycling systems and smarter manufacturing processes can reduce waste and support a more circular plastics industry.",
    category: "Sustainability",
    date: "September 25, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=85",
    slug: "sustainable-plastic-manufacturing",
  },
  {
    id: 4,
    title: "Plastic Washing Lines: Improving Material Quality",
    excerpt:
      "A practical look at washing line stages, contamination removal, drying systems, and the role of clean feedstock in recycling.",
    category: "Processing Machinery",
    date: "September 18, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85",
    slug: "plastic-washing-lines-material-quality",
  },
  {
    id: 5,
    title: "How Automation Is Transforming Industrial Production",
    excerpt:
      "Understand how automation, process monitoring, and intelligent controls help manufacturers improve consistency and production efficiency.",
    category: "Industry Insights",
    date: "September 10, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1000&q=85",
    slug: "automation-industrial-production",
  },
  {
    id: 6,
    title: "Reducing Production Waste Through Better Material Recovery",
    excerpt:
      "Explore practical strategies for recovering production scrap, improving material utilization, and building a more resource-efficient facility.",
    category: "Sustainability",
    date: "September 03, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1000&q=85",
    slug: "production-waste-material-recovery",
  },
];

const categories = [
  "All Articles",
  "Recycling Technology",
  "Processing Machinery",
  "Sustainability",
  "Industry Insights",
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-cyan-400" />
      <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-400">
        {children}
      </span>
    </div>
  );
}

function BlogCard({ blog, index }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-950/10">
      <Link
        href={`/blogs/${blog.slug}`}
        aria-label={`Read ${blog.title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-slate-200"
      >
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071318]/75 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-md border border-white/20 bg-[#071318]/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-sm">
          {blog.category}
        </span>

        <span className="absolute bottom-4 left-4 text-xs font-semibold text-white/90">
          ARTICLE / {String(index + 1).padStart(2, "0")}
        </span>

        <span className="absolute bottom-3 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition duration-300 group-hover:bg-cyan-400 group-hover:text-[#071318]">
          <ArrowUpRight size={17} />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} className="text-blue-600" />
            {blog.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock3 size={13} className="text-blue-600" />
            {blog.readTime}
          </span>
        </div>

        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="text-lg font-extrabold leading-snug tracking-tight text-[#10252e] transition-colors group-hover:text-blue-700 sm:text-xl">
            {blog.title}
          </h2>
        </Link>

        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
          {blog.excerpt}
        </p>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <Link
            href={`/blogs/${blog.slug}`}
            className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-blue-700 transition-colors hover:text-cyan-600"
          >
            Read Article
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredBlogs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All Articles" || blog.category === activeCategory;

      const matchesSearch =
        !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen overflow-hidden mt-10 bg-[#f4f7f7] text-[#10252e]">
      {/* Blog collection */}
      <section id="all-blogs" className="scroll-mt-8 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-8">
          <div className="mb-10 grid gap-7 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <SectionLabel>From the Industry Desk</SectionLabel>

              <h2 className="max-w-2xl text-3xl font-black uppercase leading-tight tracking-tight text-[#10252e] sm:text-4xl">
                Knowledge for
                <br />
                <span className="text-blue-700">Better Production.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                Stay informed with practical resources designed to help
                manufacturers make smarter equipment and production decisions.
              </p>
            </div>
          </div>

          {/* Result count */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              Showing{" "}
              <span className="font-extrabold text-[#10252e]">
                {filteredBlogs.length}
              </span>{" "}
              {filteredBlogs.length === 1 ? "article" : "articles"}
            </p>

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Industry / Knowledge / Solutions
            </span>
          </div>

          {/* Cards */}
          {filteredBlogs.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
              {filteredBlogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-white px-5 py-16 text-center">
              <Search className="mx-auto mb-4 text-blue-600" size={30} />
              <h3 className="text-xl font-extrabold text-[#10252e]">
                No articles found
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Try a different search term or select another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Articles");
                }}
                className="mt-5 rounded-md bg-blue-700 px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-800"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination placeholder */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-7 sm:flex-row">
            <p className="text-xs text-slate-500">
              Explore our latest industrial insights and resources.
            </p>
            <span className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-blue-700">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Updated Industry Insights
            </span>
          </div>
        </div>
      </section>

      {/* Industrial CTA */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-8">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-xl bg-blue-700">
          <div className="absolute -right-16 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-4 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-8 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14">
            <div>
              <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
                <CheckCircle2 size={15} />
                Your Next Project Starts Here
              </div>

              <h2 className="max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl">
                Ready to Upgrade Your Production?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100">
                Talk to our team about your processing requirements and discover
                machinery solutions designed around your business.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center gap-3 rounded-md bg-white px-6 py-4 text-[10px] font-extrabold uppercase tracking-wider text-blue-800 transition hover:bg-cyan-100"
            >
              Request a Consultation
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
