// src/components/CategoryFilter.tsx
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/productSlice";
import { RootState } from "../store/store";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state: RootState) => state.products);

  // Define your fixed category options here
  const categories = ["all", "beauty", "furniture", "fragrances", "groceries"];

  return (
    <div className="flex space-x-2 px-4 py-4 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => dispatch(setCategory(category))}
          className={`px-3 py-1 rounded-md whitespace-nowrap text-sm ${
            selectedCategory === category
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
