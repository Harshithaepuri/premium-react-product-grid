import React from "react";
import { motion } from "framer-motion";
import {product} from "./data/products";

// ---------- Reusable Components ----------
const StarRating = ({ value }) => (
  <div className="flex">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < Math.round(value) ? "text-indigo-500" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.68a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.681c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.783 2.718c-.784.57-1.84-.197-1.54-1.118l1.2-3.68a1 1 0 00-.364-1.118L2.386 9.107c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.68z" />
      </svg>
    ))}
  </div>
);

const ProductCard = ({ product }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl border border-transparent hover:border-gray-100 flex flex-col cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    whileHover={{ scale: 1.03 }}
  >
    <div
      className="h-52 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${product.image})` }}
    >
      {product.badge && (
        <span className="absolute top-3 left-3 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}
    </div>
    <div className="p-5 flex flex-col gap-2 flex-1">
      <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <div className="flex justify-between items-center mt-auto">
        <div>
          <StarRating value={product.rating} />
          <p className="text-xs text-gray-500">{product.reviews} reviews</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-gray-900">${product.price}</p>
        </div>
      </div>
      <button className="mt-3 w-full py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
        Add to Cart
      </button>
    </div>
  </motion.div>
);

export default function PremiumProductGrid({ products = product }) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
          Featured Products
        </h2>
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
