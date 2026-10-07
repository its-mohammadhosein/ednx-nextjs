import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";
import StarRating from "@/components/ui/StarRating";

export default function TestimonialCard({
  testimonial,
  hiredAt,
  variantClassName = "",
}: {
  testimonial: Testimonial;
  /** About page's variant adds a "Hired at X" badge — home page's doesn't. */
  hiredAt?: string;
  variantClassName?: string;
}) {
  return (
    <div className={`tj-testimonial-item ${testimonial.themeClass} ${variantClassName}`}>
      <div className="tj-testimonial-top">
        <div className="tj-quote"><i className="tji-quote" /></div>
        <StarRating rating={testimonial.rating} />
      </div>
      <div className="desc"><p>“{testimonial.quote}”</p></div>
      <div className="tj-testimonial-bottom">
        <div className="author-wrap">
          <div className="author-avatar">
            <Image src={testimonial.authorImage} alt="" width={48} height={48} />
          </div>
          <div className="author-info">
            <h3 className="name tj-fs-h6">{testimonial.authorName}</h3>
            <span className="designation">{testimonial.designation}</span>
          </div>
        </div>
        {hiredAt && <div className="hired"><span><i className="tji-check" /></span>Hired at {hiredAt}</div>}
      </div>
    </div>
  );
}
