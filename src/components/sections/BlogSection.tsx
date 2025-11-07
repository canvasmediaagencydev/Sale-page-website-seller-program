import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import type { BlogPostMetadata } from "@/types/blog";

interface BlogSectionProps {
  posts: BlogPostMetadata[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4  text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            บทความและเคล็ดลับ
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
            เรียนรู้เทคนิคการขายทัวร์ เทรนด์การท่องเที่ยว
            และวิธีเพิ่มรายได้จากผู้เชี่ยวชาญ
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:mx-20 mx-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>ดูบทความทั้งหมด</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
