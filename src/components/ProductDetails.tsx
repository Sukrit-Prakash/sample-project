// src/components/ProductDetails.tsx
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { addToCart } from "../store/cartSlice";
import { useEffect, useState } from "react";
import { Star, Minus, Plus, ArrowLeft } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
}

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const product = useSelector((state: RootState) =>
    state.products.items.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute left-4 top-4 bg-gray-800 p-2 rounded-full"
      >
        <ArrowLeft size={24} color="white" />
      </button>

    
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-64  bg-gray-800 h-64 object-cover rounded-lg shadow-lg"
      />

      {/* Product Info */}
      <div className="mt-6 w-full max-w-md text-center">
        <div className="flex justify-center items-center gap-4">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <div className="flex justify-center items-center mt-2 text-yellow-400">
          <Star size={20} /> <span className="ml-1">{product.rating}</span>
        </div>
        </div>
        <p className="text-gray-400 mt-2 mb-4 ">{product.description}</p>

        {/* Quantity & Price */}
        <div className="flex justify-between items-center mt-4 text-lg font-bold">
          <div className="flex items-centerp-2 rounded-lg">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="p-2"
            >
              <Minus size={20} className="bg-yellow-500 rounded-full"/>
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="p-2"
            >
              <Plus size={20} className="bg-yellow-500 rounded-full" />
            </button>
          </div>
          <span>${(product.price * quantity).toFixed(2)}</span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => dispatch(addToCart({ ...product, quantity }))}
          className="mt-6 bg-yellow-500 text-black w-full py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
