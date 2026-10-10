import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

const categories = [
  { label: "Power", count: 3 },
  { label: "Connect", count: 2 },
  { label: "Smart", count: 3 },
  { label: "Charge", count: 6 },
  { label: "Stream", count: 4 },
];

const tags = ["Powerful", "Portable", "Reliable", "Fast", "Compact", "Durable", "Bag"];

// Price-range slider dropped for the same reason as InstructorsFilterSidebar
// — its visuals come entirely from jQuery UI's own CSS, never imported.
// "Latest products" reuses the last 3 catalog entries, matching the source.
export default function ShopSidebar() {
  return (
    <div className="tj-shop-sidebar">
      <div className="product-widget widget_price_filter">
        <h5 className="product-widget-title">Price range</h5>
        <div className="price_label">
          <span className="from">$75</span> &mdash; <span className="to">$300</span>
        </div>
      </div>

      <div className="product-widget widget_product_categories">
        <h5 className="product-widget-title">Categories</h5>
        <ul className="product-categories">
          {categories.map((cat) => (
            <li key={cat.label}>
              <Link href="/shop">{cat.label}</Link> <span className="count">({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="product-widget widget_products">
        <h5 className="product-widget-title">Latest products</h5>
        <ul className="product_list_widget">
          {products.slice(-3).map((product) => (
            <li className="tj-recent-product-list sidebar-recent-post" key={product.slug}>
              <div className="single-post flex items-center">
                <div className="post-image">
                  <Link href={`/shop/${product.slug}`}>
                    <Image src={product.image} alt={product.title} width={80} height={80} />
                  </Link>
                </div>
                <div className="post-header">
                  <h5 className="tj-product-title">
                    <Link href={`/shop/${product.slug}`}>{product.title}</Link>
                  </h5>
                  <div className="tj-product-sidebar-rating-price tj-product-price">
                    {product.originalPrice && <del><span><span>$</span>{product.originalPrice.toFixed(2)}</span></del>}
                    <ins><span><span>$</span>{product.price.toFixed(2)}</span></ins>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="product-widget widget_product_tag_cloud">
        <h5 className="product-widget-title">Tags</h5>
        <div className="tagcloud">
          {tags.map((tag) => (
            <Link href="/shop" className="tag-cloud-link" key={tag}>{tag}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
