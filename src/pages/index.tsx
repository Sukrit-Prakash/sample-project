import CategoryFilter from "@/components/CategoryFilter";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-2xl font-bold">Product List</h1>
      <CategoryFilter/>
      <ProductList />
    </div>
  );
}
