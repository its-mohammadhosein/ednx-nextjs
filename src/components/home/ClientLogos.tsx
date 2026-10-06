import Image from "next/image";
import Marquee from "@/components/ui/Marquee";

const clientLogos = Array.from({ length: 8 }, (_, i) => `/images/clients/client-img-${i + 1}.png`);

export default function ClientLogos() {
  return (
    <div id="scroll-target" className="tj-client-section section-gap">
      <div className="tj-client-heading tj-fs-h5">
        Trusted more than <span>2000+</span> companies and millions of learners.
      </div>
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
