import { useCallback, useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { CATEGORIES, PRODUCTS } from "../data/products";

const PAGE_SIZE = 12;

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Filtra por búsqueda + categoría
  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCategory = category === "Todos" || p.category === category;
      const matchesSearch = !term || p.name.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  // Reinicia la paginación cada vez que cambia el filtro/búsqueda
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, category]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredProducts.length));
  }, [filteredProducts.length]);

  const sentinelRef = useInfiniteScroll(loadMore, { enabled: hasMore });

  return (
    <>
      <Header
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        categories={CATEGORIES}
      />

      <main className="container">
        <p className="results-info">
          {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""} encontrado
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>

        {visibleProducts.length > 0 ? (
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="no-results">No se encontraron productos.</p>
        )}

        {hasMore && (
          <>
            <div className="loader">Cargando más productos...</div>
            <div ref={sentinelRef} className="scroll-sentinel" />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
