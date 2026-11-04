import Link from "next/link";
import { CalendarDays, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { cache } from "react";
import sanitizeHtml from "sanitize-html";
import { connect } from "@/Database/db";
import Blog from "@/models/blog";

const getBlog = cache(async (slug) => {
  await connect();
  return Blog.findOne({ permalink: slug }).lean();
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return { title: "Article Not Found" };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || undefined,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const publishedDate = blog.date
    ? new Date(blog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date unavailable";
  const content = sanitizeHtml(blog.content || "", {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "img"],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title", "width", "height"],
    },
  });

  return (
    <main className="min-h-screen bg-white pb-16 pt-28 text-[#061A2A] sm:pb-24 sm:pt-36">
      <article className="mx-auto max-w-4xl px-5 sm:px-8">
        <Link
          href="/blogs"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#00356B] transition hover:text-[#061A2A]"
        >
          <ChevronLeft size={17} />
          All articles
        </Link>

        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#061A2A] sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
            <CalendarDays size={16} className="text-[#00356B]" />
            Published {publishedDate}
          </p>
        </header>

        {blog.image && (
          <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 sm:mb-10">
            <img
              src={blog.image}
              alt={blog.title}
              className="max-h-[560px] w-full object-cover"
              fetchPriority="high"
            />
          </div>
        )}

        <div
          className="blog-article-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </main>
  );
}
