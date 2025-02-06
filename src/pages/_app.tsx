// pages/_app.tsx
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "../styles/globals.css";  // Ensure Tailwind CSS is applied
import Navbar from "../components/Navbar";

import { Toaster } from "react-hot-toast";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <Navbar/>
        <Toaster position="top-right" />
      <Component {...pageProps} />
    </Provider>
  );
}
