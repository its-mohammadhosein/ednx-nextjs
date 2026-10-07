import Link from "next/link";
import FlipText from "@/components/ui/FlipText";
import InstructorCardCompact from "@/components/instructors/InstructorCardCompact";
import { coaches } from "@/data/coaches";

// About page shows only the first 4 of the 6 coaches the full /instructors
// listing has, matching the source markup.
const featuredCoaches = coaches.slice(0, 4);

export default function AboutInstructors() {
  return (
    <section className="tj-instructor-section section-gap fix">
      <div className="container">
        <div className="sec-heading">
          <span className="sec-subtitle"><i className="tji-subtitle" /> Featured Coaches</span>
          <div className="sec-heading-inner">
            <h2 className="sec-title">Learn From Our Expert on Instructors.</h2>
            <Link className="tj-btn-primary flip-text-wrap" href="/instructors">
              <FlipText>Find more coach</FlipText>
              <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCoaches.map((coach) => (
            <InstructorCardCompact coach={coach} key={coach.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
