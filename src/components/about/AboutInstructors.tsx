import Link from "next/link";
import FlipText from "@/components/ui/FlipText";
import InstructorCardCompact, { type Coach } from "@/components/instructors/InstructorCardCompact";

const coaches: Coach[] = [
  { slug: "devoin-lanee", image: "/images/instructor/instructor-4.webp", name: "Devoin Lanee", designation: "Chief design director", rating: 4.9, sessions: "200", pricePerHour: "$20" },
  { slug: "dianne-russell", image: "/images/instructor/instructor-5.webp", name: "Dianne Russell", designation: "Chief design director", rating: 4.9, sessions: "210", pricePerHour: "$18" },
  { slug: "marvin-mckinney", image: "/images/instructor/instructor-6.webp", name: "Marvin McKinney", designation: "Chief design director", rating: 4.9, sessions: "180", pricePerHour: "$25" },
  { slug: "darrell-steward", image: "/images/instructor/instructor-7.webp", name: "Darrell Steward", designation: "Chief design director", rating: 4.9, sessions: "170", pricePerHour: "$15" },
];

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
          {coaches.map((coach) => (
            <InstructorCardCompact coach={coach} key={coach.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
