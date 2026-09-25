import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Catalog />} />
        <Route path="/producto/:slug" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}
