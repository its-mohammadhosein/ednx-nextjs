import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import FlipText from "@/components/ui/FlipText";
import BlogCard from "@/components/blog/BlogCard";

export default function BlogPreview() {
  return (
    <section className="tj-blog-section section-gap fix">
      <div className="container">
        <div className="sec-heading">
          <span className="sec-subtitle"><i className="tji-subtitle" />Explore Blogs</span>
          <div className="sec-heading-inner">
            <h2 className="sec-title">Explore Latest Blog and Insights.</h2>
            <Link className="tj-btn-primary flip-text-wrap" href="/blog">
              <FlipText>See more blogs</FlipText>
              <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
            </Link>
          </div>
        </div>

        <div className="tj-blog-wrap">
          {blogPosts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
