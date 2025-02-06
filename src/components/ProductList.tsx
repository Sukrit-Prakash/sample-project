// src/components/ProductList.tsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { RootState } from "../store/store";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status,selectedCategory  } = useSelector((state: RootState) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);
useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;

  const filteredProducts =
    selectedCategory === "all" ? items : items.filter((p) => p.category === selectedCategory);

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
