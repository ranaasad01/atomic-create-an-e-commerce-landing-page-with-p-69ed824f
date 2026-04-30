"use client";

import { Minus, Plus, Trash2, ArrowRight, Lock } from "lucide-react";
import { CartItem } from "@/lib/types";
import { useCart } from "@/context/CartContext";

export function OrderSummary() {
  const { totalPrice, totalItems, clearCart } = useCart();
  const tax = totalPrice * 0.08;
  const shipping = totalPrice > 50 ? 0 : 5.99;
  const total = totalPrice + tax + shipping;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>
      <div className="space-y-3 text-sm mb-5">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})</span>
          <span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className={shipping === 0 ? "text-emerald-600 font-medium" : "font-medium text-gray-900"}>
            {shipping === 0 ? "FREE" : "$" + shipping.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Estimated Tax (8%)</span>
          <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
        </div>
        {shipping > 0 && (
          <p className="text-xs text-orange-500 bg-orange-50 rounded-lg px-3 py-2">
            Add ${(50 - totalPrice).toFixed(2)} more for free shipping!
          </p>
        )}
      </div>
      <div className="border-t border-gray-100 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-900">Total</span>
          <span className="text-xl font-extrabold text-gray-900">${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md mb-3">
        Checkout <ArrowRight className="w-4 h-4" />
      </button>
      <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
        <Lock className="w-3 h-3" /> Secure checkout — SSL encrypted
      </div>
      <button onClick={clearCart} className="w-full mt-4 text-xs text-gray-400 hover:text-red-500 transition-colors py-1">
        Clear cart
      </button>
    </div>
  );
}

interface CartItemRowProps {
  item: CartItem;
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-5 border-b border-gray-100 last:border-0">
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-0.5">
          {item.product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1 line-clamp-2">
          {item.product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">
            ${item.product.price.toFixed(2)}
          </span>
          {item.product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ${item.product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end justify-between gap-2">
        <button
          onClick={() => removeItem(item.product.id)}
          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          aria-label={"Remove " + item.product.name + " from cart"}
        >
          <Trash2 className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-1 py-1">
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white transition-colors text-gray-600"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-6 text-center text-sm font-semibold text-gray-900">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white transition-colors text-gray-600"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <span className="text-sm font-bold text-gray-900">
          ${(item.product.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
