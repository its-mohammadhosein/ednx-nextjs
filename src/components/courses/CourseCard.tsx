import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="tj-course-item">
      <div className="tj-course-img">
        <Link href={`/courses/${course.slug}`}>
          <Image src={course.image} alt={course.title} width={400} height={260} />
        </Link>
        <div className="tj-product-badge">
          <span>{course.badge}</span>
        </div>
        <div className="tj-wishlist-btn">
          <button aria-label="Add to wishlist"><i className="tji-heart" /></button>
        </div>
      </div>
      <div className="tj-course-content">
        <div className="tj-cat-level-wrap">
          <div className="tj-categories">
            <Link className="tj-cat" href={`/courses/${course.slug}`}>{course.category}</Link>
          </div>
          <div className="tj-level">
            <span>{course.level}</span>
          </div>
        </div>
        <h3 className="title tj-fs-h5">
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
        </h3>
        <span className="author">
          <Link href="/instructors">
            <Image src={course.authorImage} alt="" width={32} height={32} /> {course.authorName}
          </Link>
        </span>
        <div className="course-meta">
          <span><i className="tji-book" />{course.lessons}</span>
          <span><i className="tji-clock" />{course.duration}</span>
          <span><i className="tji-user-duo" />{course.students}</span>
        </div>
        <div className="tj-course-price-wrap">
          <div className="single-rating">
            <i className="tji-star" />
            <span className="label">{course.rating}<span>({course.ratingCount})</span></span>
          </div>
          <div className="course-price tj-fs-h6">
            {course.originalPrice && <del>{course.originalPrice}</del>} {course.price}
          </div>
        </div>
        <Link className="tj-btn-primary tj-btn-primary-md tj-btn-full flip-text-wrap" href={`/courses/${course.slug}`}>
          <span className="btn-text">Start learning</span>
          <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
        </Link>
      </div>
    </div>
  );
}
