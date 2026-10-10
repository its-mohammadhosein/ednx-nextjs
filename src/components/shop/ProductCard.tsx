"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

/**
 * Quick-view ("eye" icon) intentionally does nothing here — the original
 * opens an inline WooCommerce-style product modal (shared markup repeated
 * once per page, shop.html's "Product details modal Area"). Building that
 * modal's full content (image gallery, variant selectors, etc.) is real
 * scope on its own and wasn't asked for; deferred rather than wired to a
 * half-built popup. Wishlist toggle is local UI state only, no persistence.
 */
export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="tj-product">
      <div className="tj-product-item">
        <div className="tj-product-thumb">
          <Link href={`/shop/${product.slug}`}>
            <Image src={product.image} alt={product.title} width={400} height={400} />
          </Link>

          {product.originalPrice && (
            <div className="tj-product-badge product-on-sale">
              <span className="onsale">Sale</span>
            </div>
          )}

          <div className="tj-product-action">
            <div className="tj-product-action-item flex flex-col">
              <div className="tj-product-action-btn product-add-wishlist-btn">
                <button onClick={() => setIsWishlisted((v) => !v)} aria-pressed={isWishlisted}>
                  {isWishlisted ? "Wishlisted" : "Add to wishlist"}
                </button>
                <span className="tj-product-action-btn-tooltip">
                  {isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                </span>
              </div>
              <div className="tj-product-action-btn">
                <button type="button" aria-disabled="true" title="Quick view coming soon">
                  <i className="tji-eye" />
                </button>
                <span className="tj-product-action-btn-tooltip">Quick view</span>
              </div>
            </div>
          </div>

          <div className="tj-product-cart-btn">
            <Link href="/cart" className="cart-button button tj-cart-btn stock-available">
              <span className="btn-text"><span>Add to cart</span></span>
              <span className="btn-icon"><i className="tji-cart-bag" /><i className="tji-cart-bag" /></span>
            </Link>
          </div>
        </div>
        <div className="tj-product-content">
          <h3 className="tj-product-title">
            <Link href={`/shop/${product.slug}`}>{product.title}</Link>
          </h3>
          <div className="tj-product-price-wrapper">
            <span className="price">
              {product.originalPrice ? (
                <>
                  <del><span><bdi><span>$</span>{product.originalPrice.toFixed(2)}</bdi></span></del>
                  <ins><span><bdi><span>$</span>{product.price.toFixed(2)}</bdi></span></ins>
                </>
              ) : (
                <span><bdi><span>$</span>{product.price.toFixed(2)}</bdi></span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
