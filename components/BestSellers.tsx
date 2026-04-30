import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import { Star } from "lucide-react";

export default function BestSellers() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section id="best-sellers" className="bg-gradient-to-r from-orange-50 to-amber-50 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Top Picks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Best Sellers</h2>
            <p className="text-gray-500 mt-1 text-sm">Our most loved products this season</p>
          </div>
          <a
            href="#products"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
          >
            View all
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
