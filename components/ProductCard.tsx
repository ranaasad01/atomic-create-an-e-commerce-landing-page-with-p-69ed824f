"use client";

import { useState } from "react";
import { Star, ShoppingCart, Check } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={"Rating: " + rating + " out of 5"}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.floor(rating);
        const half = !filled && star - 0.5 <= rating;
        return (
          <Star
            key={star}
            className={
              filled
                ? "w-3.5 h-3.5 text-amber-400 fill-amber-400"
                : half
                ? "w-3.5 h-3.5 text-amber-400 fill-amber-200"
                : "w-3.5 h-3.5 text-gray-300 fill-gray-100"
            }
          />
        );
      })}
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const btnClass = added
    ? "w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 bg-emerald-500 text-white"
    : "w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md";

  return (
    <div className="card-hover group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {product.badge}
            </span>
          )}
          {product.isNew && (
            <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              NEW
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-gray-900 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              BEST SELLER
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1 leading-snug">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-baseline gap-2 mb-4 mt-auto">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={btnClass}
          aria-label={"Add " + product.name + " to cart"}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}