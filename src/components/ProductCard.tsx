import Link from "next/link";
import Image from "next/image";
import { Star, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import toast from "react-hot-toast";
import {CartItem} from "../store/cartSlice"

interface Product {
  id: number;
  title: string;
  price: number;
  description: string; // ✅ Add missing properties
  category: string; // ✅ Add missing properties
  rating: number;
  thumbnail: string;
  quantity?: number;
}

interface ProductProps {
  product: Product;
}


const ProductCard = ({ product }: ProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-900 rounded-lg shadow overflow-hidden w-[143px] h-[213px] flex flex-col gap-1">
      {/* Image Container */}
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-[100px] overflow-hidden ">
          <Image
            src={product.thumbnail}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-2 flex flex-col flex-1">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-xs font-bold text-white mb-1 line-clamp-1">
            {product.title}
          </h2>
        </Link>

        <div className="flex items-center text-yellow-400 text-[10px] my-1">
          <Star size={16} className="mr-1" />
          <span>{product.rating}</span>
        </div>

        {/* Price and Add-to-Cart Button */}
        <div className="mt-auto flex justify-between items-center">
          <span className="text-xs font-bold text-white">${product.price}</span>
          <button
            onClick={() => {
              const cartItem: CartItem = { ...product, quantity: 1 }; // ✅ Explicitly create a CartItem
              dispatch(addToCart(cartItem));
              toast.success("Product added to cart");
            }}
            className="bg-yellow-500 p-2 rounded-lg transition-colors duration-200 hover:bg-yellow-400"
          >
            <Plus size={12} color="black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
