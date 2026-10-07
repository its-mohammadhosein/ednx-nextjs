import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog-posts";
import FlipText from "@/components/ui/FlipText";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-item">
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
            <FlipText>Read more</FlipText>
            <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
          </Link>
        </div>
      </div>
    </article>
  );
}
