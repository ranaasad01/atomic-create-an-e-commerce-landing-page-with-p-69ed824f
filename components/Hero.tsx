import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-400 opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              Summer Sale — Up to 40% Off
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Discover Products
              <br />
              <span className="text-orange-500">You&apos;ll Love</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              Shop thousands of curated products across electronics, fashion, home goods, and more — all with fast shipping and easy returns.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#best-sellers"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                View Deals
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "50K+", label: "Products" },
                { value: "200K+", label: "Happy Customers" },
                { value: "4.9★", label: "Avg. Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1218132428394098"
                alt="Shop our latest collection"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 font-bold text-lg">
                🔥
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Today&apos;s Deal</div>
                <div className="text-sm font-bold text-gray-900">Up to 40% Off</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
