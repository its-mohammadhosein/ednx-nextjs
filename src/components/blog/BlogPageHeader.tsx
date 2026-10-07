import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";
import BlogCard from "./BlogCard";

// One-off layout (title+breadcrumb, then 3 featured post cards, inside the
// same page-header section) — not a fit for either PageBanner variant.
export default function BlogPageHeader() {
  return (
    <section className="tj-page-header">
      <div className="container">
        <div className="tj-page-header-content">
          <h1 className="tj-page-title">Latest Blogs</h1>
          <div className="tj-page-link">
            <span><i className="tji-home" /></span>
            <span><Link href="/">Home</Link></span>
            <span><i className="tji-arrow-right-4" /></span>
            <span><span>Blog</span></span>
          </div>
          <div className="shape"><Image src="/images/shapes/stars.png" alt="" width={120} height={120} /></div>
        </div>
        <div className="inner-gap-top">
          <div className="tj-blog-wrap">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
