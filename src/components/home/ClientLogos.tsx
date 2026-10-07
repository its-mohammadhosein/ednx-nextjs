import type { ReactNode } from "react";
import Image from "next/image";
import Marquee from "@/components/ui/Marquee";

const clientLogos = Array.from({ length: 8 }, (_, i) => `/images/clients/client-img-${i + 1}.png`);

const defaultHeading = (
  <>Trusted more than <span>2000+</span> companies and millions of learners.</>
);

export default function ClientLogos({
  heading = defaultHeading,
  scrollAnchorId,
}: {
  heading?: ReactNode;
  /** Home page's Hero "Scroll Down" link targets this; other pages omit it. */
  scrollAnchorId?: string;
}) {
  return (
    <div id={scrollAnchorId} className="tj-client-section section-gap">
      <div className="tj-client-heading tj-fs-h5">{heading}</div>
      <div className="tj-client-marquee-wrapper">
        <Marquee>
          {clientLogos.map((src, i) => (
            <div className="tj-marquee-item tj-client-item" key={i}>
              <span><Image src={src} alt="Client" width={120} height={48} /></span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
