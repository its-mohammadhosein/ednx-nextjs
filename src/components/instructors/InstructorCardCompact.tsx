import Link from "next/link";
import Image from "next/image";
import type { Coach } from "@/data/coaches";

/**
 * Distinct card design from the home page's InstructorCard/tj-instructor-item
 * (Swiper slide) — this is the template's tj-instructor-item-2 grid variant,
 * used on the About page. Different data shape too (price/hour, session
 * count) rather than course/student counts.
 */
export default function InstructorCardCompact({ coach }: { coach: Coach }) {
  return (
    <div className="tj-instructor-item tj-instructor-item-2">
      <div className="tj-instructor-img">
        <Link href={`/instructors/${coach.slug}`}>
          <Image src={coach.image} alt={coach.name} width={280} height={320} />
        </Link>
        <div className="single-rating">
          <i className="tji-star" />
          <span className="label">{coach.rating}</span>
        </div>
      </div>
      <div className="tj-instructor-content">
        <div className="name-area">
          <h3 className="name tj-fs-h5"><Link href={`/instructors/${coach.slug}`}>{coach.name}</Link></h3>
          <span className="designation">{coach.designation}</span>
        </div>
        <div className="tj-instructor-info">
          <div className="course-meta">
            <span><i className="tji-book" />{coach.sessions} sessions</span>
          </div>
          <div className="course-price tj-fs-h5">{coach.pricePerHour}/h</div>
        </div>
        <div className="btn-area">
          <Link className="tj-btn-primary-2 tj-btn-primary-3 tj-btn-full" href={`/instructors/${coach.slug}`}>
            <span className="btn-inner">
              <span className="btn-text"><span>Book session</span></span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
