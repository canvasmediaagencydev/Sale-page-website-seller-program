import BlogSection from "@/components/sections/BlogSection";
import { getAllPosts } from "@/lib/blog";
import ClientHomePage from "@/components/ClientHomePage";
export default function Home() {
  const blogPosts = getAllPosts().slice(0, 3); // Get latest 3 posts for home page

  return (
    <>
      <ClientHomePage />
      <BlogSection posts={blogPosts} />
    </>
  );
}