import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "บทความและเคล็ดลับ | PayDee - รวมความรู้สำหรับนักขายทัวร์",
  description:
    "รวมบทความเคล็ดลับการขายทัวร์ เทรนด์การท่องเที่ยว และวิธีเพิ่มรายได้จากค่าคอมมิชชั่น สำหรับนักขายทัวร์มือใหม่และมืออาชีพ",
  openGraph: {
    title: "บทความและเคล็ดลับ | PayDee",
    description:
      "รวมบทความเคล็ดลับการขายทัวร์ เทรนด์การท่องเที่ยว และวิธีเพิ่มรายได้จากค่าคอมมิชชั่น",
    images: [
      {
        url: "https://www.paydee.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "PayDee Blog",
      },
    ],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl my-30">
              บทความและเคล็ดลับ
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              รวมความรู้ เทคนิค และกลยุทธ์ที่จะช่วยให้คุณประสบความสำเร็จในการเป็นนักขายทัวร์
            </p>
          </div>
        </div>
      </section>

      {/* Tags Filter (Optional - for future enhancement) */}
      {tags.length > 0 && (
        <section className="border-b bg-white py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-gray-700">หมวดหมู่:</span>
              <button className="rounded-full bg-primary px-4 py-2 text-sm  text-white transition-colors hover:bg-primary/90">
                ทั้งหมด
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="rounded-full bg-gray-200 px-4 py-2 text-sm  text-gray-700 transition-colors hover:bg-gray-300"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 container mx-auto px-4 md:px-6">
        <div className="container mx-auto px-4 md:px-6">
          {posts.length === 0 ? (
            <div className="rounded-2xl bg-white p-12 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <svg
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                ยังไม่มีบทความ
              </h3>
              <p className="text-gray-600">
                เรากำลังเตรียมเนื้อหาที่น่าสนใจสำหรับคุณ กรุณากลับมาดูใหม่อีกครั้ง
              </p>
            </div>
          ) : (
            <>
              {/* Stats */}
              <div className="mb-8 flex items-center justify-between">
                <p className="text-gray-600">
                  ทั้งหมด <span className="font-semibold text-gray-900">{posts.length}</span>{" "}
                  บทความ
                </p>
              </div>

              {/* Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            พร้อมเริ่มต้นเป็นนักขายทัวร์แล้วหรือยัง?
          </h2>
          <a
            href="#register"
            className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5 mt-10"
          >
            ลงทะเบียนตอนนี้
          </a>
        </div>
      </section>
    </main>
  );
}
