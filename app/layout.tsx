import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ShopWave — Modern E-Commerce",
  description: "Discover amazing products at unbeatable prices. Shop electronics, fashion, home goods, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
