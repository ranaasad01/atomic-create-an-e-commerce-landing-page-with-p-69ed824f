"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function Navbar({ searchQuery, onSearchChange }: NavbarProps) {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Datics<span className="text-orange-500"> ai</span>
            </span>
          </Link>

          {/* Search Bar desktop */}
          <div className="hidden sm:flex flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
              aria-label="Search products"
            />
          </div>

          {/* Nav links desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link href="#products" className="hover:text-orange-500 transition-colors">Products</Link>
            <Link href="#best-sellers" className="hover:text-orange-500 transition-colors">Deals</Link>
          </nav>

          {/* Cart + Mobile menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-orange-50 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <span
                  key={totalItems}
                  className="badge-pop absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="sm:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
              aria-label="Search products mobile"
            />
          </div>
        </div>
      </div>

      {/* Mobile nav menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-3 text-sm font-medium text-gray-700">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">Home</Link>
          <Link href="#products" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">Products</Link>
          <Link href="#best-sellers" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">Deals</Link>
        </div>
      )}
    </header>
  );
}