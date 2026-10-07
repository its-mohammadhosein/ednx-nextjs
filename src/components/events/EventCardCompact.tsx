import Link from "next/link";
import Image from "next/image";
import type { Event } from "@/data/events";
import FlipText from "@/components/ui/FlipText";

/**
 * Distinct 2-column grid card (tj-event-item-2) from the home page's
 * horizontal list card (tj-event-item) — used on the dedicated events
 * listing page.
 */
export default function EventCardCompact({ event }: { event: Event }) {
  return (
    <div className="tj-event-item-2">
      <div className="tj-event-img">
        <Link href={`/events/${event.slug}`}>
          <Image src={event.image} alt="" width={400} height={260} />
        </Link>
        <div className="tj-book-meta">
          <span className="date">{event.date}</span>
          <span className="month">{event.month}</span>
        </div>
      </div>
      <div className="tj-event-content">
        <h3 className="title"><Link href={`/events/${event.slug}`}>{event.title}</Link></h3>
        <div className="course-meta">
          <span><i className="tji-location" />{event.location}</span>
          <span><i className="tji-clock" />{event.time}</span>
        </div>
        <Link className="tj-text-btn flip-text-wrap" href={`/events/${event.slug}`}>
          <FlipText>Book a seat</FlipText>
          <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
        </Link>
      </div>
    </div>
  );
}
