/**
 * Replicates the template's layered marked/unmarked star icons with a
 * per-star fill percentage, so e.g. a 4.6 rating partially fills the 5th
 * star rather than rounding to a whole star.
 */
export default function StarRating({ rating, label }: { rating: number; label?: string }) {
  const stars = [0, 1, 2, 3, 4].map((i) => {
    const fill = Math.max(0, Math.min(1, rating - i)) * 100;
    return fill;
  });

  return (
    <div className="tj-rating-wrapper rating" role="img" aria-label={`Rated ${rating} out of 5`}>
      {stars.map((fill, i) => (
        <div className="r-icon" key={i}>
          <div className="r-icon-wrapper r-icon-marked" style={{ "--r-rating-icon-marked-width": `${fill}%` } as React.CSSProperties}>
            <i aria-hidden="true" className="tji-star" />
          </div>
          <div className="r-icon-wrapper r-icon-unmarked">
            <i aria-hidden="true" className="tji-star" />
          </div>
        </div>
      ))}
      {label && <span className="label">{label}</span>}
    </div>
  );
}
