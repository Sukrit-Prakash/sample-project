import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center -z-10">
      <Link href="/">
        {/* <h1 className="text-xl font-bold cursor-pointer">Shop</h1> */}
      </Link>
      <Link href="/cart">
        <div className="relative cursor-pointer">
          <ShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
