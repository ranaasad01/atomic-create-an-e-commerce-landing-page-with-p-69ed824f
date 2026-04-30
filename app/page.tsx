"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Hero />
      <BestSellers />

      {/* Products section */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">All Products</h2>
            <p className="text-gray-500 text-sm mt-1">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
              {searchQuery && (
                <span> for &ldquo;<span className="text-orange-500 font-medium">{searchQuery}</span>&rdquo;</span>
              )}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>

        <ProductGrid products={filteredProducts} searchQuery={searchQuery} />
      </section>

      {/* Promo banner */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Free Shipping on Orders Over $50
          </h2>
          <p className="text-orange-100 text-lg mb-6">
            Plus easy 30-day returns on everything you buy.
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-3.5 rounded-full hover:bg-orange-50 transition-colors shadow-lg"
          >
            Start Shopping
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
