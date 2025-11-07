import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug, formatDate, getAllPosts } from "@/lib/blog";
import ShareButtons from "@/components/ShareButtons";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "บทความไม่พบ | PayDee",
    };
  }

  return {
    title: `${post.title} | PayDee Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same tags, excluding current post)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== slug &&
        p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Cover Image */}
      <section className="relative h-[400px] w-full overflow-hidden bg-gray-900 md:h-[500px]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-12">
          <div className="container mx-auto max-w-4xl">
            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
              <span className="flex items-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(post.date)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          {/* Excerpt */}
          <p className="mb-8 text-xl text-gray-600 md:text-2xl">
            {post.excerpt}
          </p>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-3xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-2xl prose-p:mb-4 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-ul:my-4 prose-li:my-2 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <ShareButtons url={`/blog/${slug}`} title={post.title} />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8  text-3xl font-bold text-gray-900">
              บทความที่เกี่ยวข้อง
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="h-full overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 line-clamp-2 font-bold text-gray-900 group-hover:text-primary">
                        {relatedPost.title}
                      </h3>
                      <p className="line-clamp-2 text-sm text-gray-600">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4  text-3xl font-bold md:text-4xl">
            พร้อมเริ่มต้นเป็นนักขายทัวร์แล้วหรือยัง?
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/#register"
              className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl mt-10 hover:-translate-y-0.5"
            >
              ลงทะเบียนตอนนี้
            </a>
            <Link
              href="/blog"
              className="inline-block rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              อ่านบทความอื่นๆ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
