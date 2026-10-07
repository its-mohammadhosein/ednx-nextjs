import Link from "next/link";
import Image from "next/image";
import type { Instructor } from "@/data/instructors";
import FlipText from "@/components/ui/FlipText";
import SingleRating from "@/components/ui/SingleRating";

export default function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <div className={`tj-instructor-item ${instructor.themeClass}`}>
      <div className="tj-instructor-img">
        <Link href={`/instructors/${instructor.slug}`}>
          <Image src={instructor.image} alt={instructor.name} width={280} height={320} />
        </Link>
      </div>
      <div className="tj-instructor-content">
        <span className="tj-badge">Top rated</span>
        <div className="name-area">
          <h3 className="name"><Link href={`/instructors/${instructor.slug}`}>{instructor.name}</Link></h3>
          <span className="designation">{instructor.designation}</span>
        </div>
        <div className="tj-instructor-info tj-border-top">
          <div className="info-item">
            <span className="title">{instructor.courses}</span>
            <span className="text">Course</span>
          </div>
          <div className="info-item">
            <span className="title">{instructor.students}</span>
            <span className="text">Student</span>
          </div>
          <div className="info-item">
            <SingleRating rating={instructor.rating} />
            <span className="text">Rating</span>
          </div>
        </div>
        <div className="btn-area">
          <Link className="tj-btn-primary tj-btn-full flip-text-wrap" href={`/instructors/${instructor.slug}`}>
            <FlipText>See profile</FlipText>
            <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
