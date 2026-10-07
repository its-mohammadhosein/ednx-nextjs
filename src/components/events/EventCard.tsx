import Link from "next/link";
import Image from "next/image";
import type { Event } from "@/data/events";
import FlipText from "@/components/ui/FlipText";

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="tj-event-item">
      <div className="tj-event-img">
        <Link href={`/events/${event.slug}`}>
          <Image src={event.image} alt="" width={420} height={260} />
        </Link>
      </div>
      <div className="tj-event-content">
        <div className="tj-categories">
          <Link className="tj-cat-2" href={`/events/${event.slug}`}>{event.category}</Link>
        </div>
        <h3 className="title"><Link href={`/events/${event.slug}`}>{event.title}</Link></h3>
        <p className="desc">{event.desc}</p>
        <div className="course-meta">
          <span><i className="tji-location" />{event.location}</span>
          <span><i className="tji-clock" />{event.time}</span>
        </div>
      </div>
      <div className="tj-event-book">
        <div className="tj-book-meta">
          <span className="month">{event.month}</span>
          <span className="date">{event.date}</span>
        </div>
        <div>
          <Link className="tj-btn-primary flip-text-wrap" href={`/events/${event.slug}`}>
            <FlipText>Book seat now</FlipText>
            <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
