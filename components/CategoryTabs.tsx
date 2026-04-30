"use client";

import { categories } from "@/lib/products";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide" role="tablist" aria-label="Product categories">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={activeCategory === cat}
          onClick={() => onCategoryChange(cat)}
          className={
            activeCategory === cat
              ? "flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 bg-orange-500 text-white shadow-sm shadow-orange-200"
              : "flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500"
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
