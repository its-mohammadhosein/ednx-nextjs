import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <div className="tj-page-link">
      <span><i className="tji-home" /></span>
      <span><Link href="/">Home</Link></span>
      {crumbs.map((crumb) => (
        <span key={crumb.label}>
          <span><i className="tji-arrow-right-4" /></span>
          <span>{crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}</span>
        </span>
      ))}
    </div>
  );
}

/**
 * The template's page-header/breadcrumb banner (Phase 0: used on 25 of 29
 * pages). Two variants in the source markup:
 *   - "simple" (plain tj-page-header): title + breadcrumb + a static
 *     decorative shape image — what most pages use. Default here.
 *   - "rich" (tj-page-header-2): subtitle, description, buttons, decorative
 *     dots — what about.html needed.
 */
export default function PageBanner(
  props:
    | { variant?: "simple"; crumbs: Crumb[]; title: ReactNode }
    | {
        variant: "rich";
        crumbs: Crumb[];
        subtitle: string;
        title: ReactNode;
        description?: string;
        children?: ReactNode;
      }
) {
  if (props.variant === "rich") {
    const { crumbs, subtitle, title, description, children } = props;
    return (
      <section className="tj-page-header tj-page-header-2">
        <div className="container">
          <div className="tj-page-header-content">
            <Breadcrumb crumbs={crumbs} />
            <div className="sec-heading sec-heading-center">
              <span className="sec-subtitle"><i className="tji-subtitle" /> {subtitle}</span>
              <h1 className="sec-title">{title}</h1>
              {description && <p className="desc">{description}</p>}
              {children && <div className="btn-area justify-center">{children}</div>}
            </div>
            <div className="about-banner-elements">
              <span className="banner-4-dot banner-4-dot-green" />
              <span className="banner-4-dot banner-4-dot-orange" />
              <span className="banner-4-dot banner-4-dot-red" />
              <span className="banner-4-spark banner-4-spark-1" />
              <span className="banner-4-spark banner-4-spark-2" />
              <span className="banner-4-spark banner-4-spark-3" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const { crumbs, title } = props;
  return (
    <section className="tj-page-header">
      <div className="container">
        <div className="tj-page-header-content">
          <h1 className="tj-page-title">{title}</h1>
          <Breadcrumb crumbs={crumbs} />
          <div className="shape"><Image src="/images/shapes/stars.png" alt="" width={120} height={120} /></div>
        </div>
      </div>
    </section>
  );
}
