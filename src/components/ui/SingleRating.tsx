export default function SingleRating({ rating, count }: { rating: number; count?: string }) {
  return (
    <div className="single-rating">
      <i className="tji-star" />
      <span className="label">
        {rating}
        {count && <span>({count})</span>}
      </span>
    </div>
  );
}
