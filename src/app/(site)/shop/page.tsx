import type { Metadata } from "next";
import "./shop.css";
import PageBanner from "@/components/layout/PageBanner";
import ProductCard from "@/components/shop/ProductCard";
import ShopSidebar from "@/components/shop/ShopSidebar";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Product - Edunex",
  description: "Education LMS and Online course template",
};

const mainProducts = products.slice(0, 6);

export default function ShopPage() {
  return (
    <>
      <PageBanner crumbs={[{ label: "Product" }]} title="Our Product" />
      <div className="tj-product-area section-gap-bottom">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
                <p className="tj-shop-list-title">
                  Showing <strong>1–6</strong> of <strong>{products.length}</strong> results
                </p>
                <div className="tj-shop-from">
                  <div className="select-label">Sort by</div>
                  <div className="tj-select">
                    <select defaultValue="date" aria-label="Shop order">
                      <option value="popularity">Most Popular</option>
                      <option value="rating">Average rating</option>
                      <option value="date">Latest</option>
                      <option value="price">Low to high</option>
                      <option value="price-desc">High to low</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="tj-shop-item-wrapper">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mainProducts.map((product) => (
                    <ProductCard product={product} key={product.slug} />
                  ))}
                </div>
                <div className="basic-pagination">
                  <div className="tj-pagination shop">
                    <span aria-current="page" className="page-numbers current">1</span>
                    <a className="page-numbers" href="#">2</a>
                    <a className="page-numbers" href="#">3</a>
                    <a className="next page-numbers" href="#"><i className="tji-arrow-right-3" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <ShopSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
