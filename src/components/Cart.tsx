import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removeFromCart } from "../store/cartSlice";
import { Trash ,ArrowLeft} from "lucide-react";
import { useRouter } from "next/router";
const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
           <button
        onClick={() => router.push("/")}
        className="absolute left-4 top-4 bg-gray-800 p-2 rounded-full"
      >
        <ArrowLeft size={24} color="white" />
      </button>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md">
              <img src={item.thumbnail} alt={item.title} className="h-16 w-16 object-cover rounded-md" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-400">${item.price} × {item.quantity}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:text-red-700"
              >
                <Trash size={20} />
              </button>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center text-xl font-bold">
            <span>Total:</span>
            <span className="text-yellow-400">
              $
              {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
