import { events } from "@/data/events";
import EventCard from "@/components/events/EventCard";

export default function Events() {
  return (
    <div className="tj-event-section section-gap fix">
      <div className="bg-noise" />
      <div className="container">
        <div className="sec-heading sec-heading-center">
          <span className="sec-subtitle"><i className="tji-subtitle" /> Live & Upcoming</span>
          <h2 className="sec-title tj-text-light-1">Upcoming Events For Career Growth.</h2>
        </div>

        <div className="tj-event-wrapper">
          {events.map((event) => (
            <EventCard event={event} key={event.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
