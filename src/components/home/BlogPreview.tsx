import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPreview() {
  return (
    <section className="tj-blog-section section-gap fix">
      <div className="container">
        <div className="sec-heading">
          <span className="sec-subtitle"><i className="tji-subtitle" />Explore Blogs</span>
          <div className="sec-heading-inner">
            <h2 className="sec-title">Explore Latest Blog and Insights.</h2>
            <Link className="tj-btn-primary flip-text-wrap" href="/blog">
              <span className="btn-text">See more blogs</span>
              <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
            </Link>
          </div>
        </div>

        <div className="tj-blog-wrap">
          {blogPosts.map((post) => (
            <article className="blog-item" key={post.slug}>
              <div className="blog-thumb">
                <Link href={`/blog/${post.slug}`}>
                  <Image src={post.image} alt="" width={400} height={260} />
                </Link>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <div className="tj-categories">
                    <Link className="blog-category" href={`/blog/${post.slug}`}>{post.category}</Link>
                  </div>
                  <div className="blog-meta-item date">
                    <i className="tji-calendar" /><span>{post.date}</span>
                  </div>
                </div>
                <h3 className="blog-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <div className="blog-btn">
                  <Link className="tj-text-btn flip-text-wrap" href={`/blog/${post.slug}`}>
                    <span className="btn-text">Read more</span>
                    <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
