import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import EventCardCompact from "@/components/events/EventCardCompact";
import EventsSidebar from "@/components/events/EventsSidebar";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events - Edunex",
  description: "Education LMS and Online course template",
};

export default function EventsPage() {
  return (
    <>
      <PageBanner crumbs={[{ label: "Events" }]} title="Events grid" />
      <section className="tj-event-section-2 section-gap-bottom fix">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <EventCardCompact event={event} key={event.slug} />
                ))}
              </div>
              <div className="tj-pagination">
                <span aria-current="page" className="page-numbers current">1</span>
                <a className="page-numbers" href="#">2</a>
                <a className="page-numbers" href="#">3</a>
                <a className="next page-numbers" href="#"><i className="tji-arrow-right-3" /></a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <EventsSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
