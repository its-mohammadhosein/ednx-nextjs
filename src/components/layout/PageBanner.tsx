import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

/**
 * The template's page-header/breadcrumb banner (Phase 0: used on 25 of 29
 * pages), built here in its "rich" form (tj-page-header-2: subtitle, desc,
 * buttons, decorative dots) since that's what about.html — the first page
 * using it — needs. Most other pages use a plainer tj-page-header variant
 * (just a title + breadcrumb + a static decorative shape image); that gets
 * added to this component when the first page needing it is ported, rather
 * than guessed at now.
 */
export default function PageBanner({
  crumbs,
  subtitle,
  title,
  description,
  children,
}: {
  crumbs: Crumb[];
  subtitle: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="tj-page-header tj-page-header-2">
      <div className="container">
        <div className="tj-page-header-content">
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
