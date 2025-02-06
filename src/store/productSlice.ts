import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  category: string;
  rating: number;
}

interface ProductState {
  items: Product[];
  status: "idle" | "loading" | "failed";
  categories: string[];
  selectedCategory: string;
}

const initialState: ProductState = {
  items: [],
  status: "idle",
  categories: [],
  selectedCategory: "all",
};

// export const fetchCategories = createAsyncThunk(
//     "products/fetchCategories",
//     async () => {
//       const res = await fetch("https://dummyjson.com/products/categories");
//       const data: { slug: string; name: string; url: string }[] = await res.json();
//       console.log()
//       return data.map((category) => category.slug);
//     }
//   );

// Fetch products from dummy JSON API
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data.products;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
        setCategory: (state, action) => {
          state.selectedCategory = action.payload;
        },
    },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.categories = action.payload;
//       });
  },
});
export const { setCategory } = productSlice.actions;
export default productSlice.reducer;


