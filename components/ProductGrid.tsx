"use client";

import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  searchQuery: string;
}

export default function ProductGrid({ products, searchQuery }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Search className="w-7 h-7 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">No products found</h3>
        <p className="text-gray-500 text-sm">
          {searchQuery
            ? "Try a different search term or browse all categories."
            : "No products in this category yet."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
