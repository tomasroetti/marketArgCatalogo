import { useCallback, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { useCatalogFilters } from "../hooks/useCatalogFilters";
import { PRODUCTS } from "../data/products";
import { matchesPrice, sortProducts } from "../data/filters";

const PAGE_SIZE = 12;

// Compara sin tildes ni mayúsculas: "camion" encuentra "Camión"
const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

export default function Catalog() {
  const { filters, clearFilters, hasActiveFilters } = useCatalogFilters();
  const { search, category, price, sort } = filters;
  const [pagination, setPagination] = useState({ key: "", count: PAGE_SIZE });

  const filteredProducts = useMemo(() => {
    const term = normalize(search.trim());
    const filtered = PRODUCTS.filter((p) => {
      const matchesCategory = category === "Todos" || p.category === category;
      const matchesSearch =
        !term || normalize(`${p.name} ${p.description} ${p.category}`).includes(term);
      return matchesCategory && matchesSearch && matchesPrice(price, p.price);
    });
    return sortProducts(filtered, sort);
  }, [search, category, price, sort]);

  // La paginación se reinicia sola cuando cambia algún filtro (la clave deja de coincidir)
  const filterKey = `${search}|${category}|${price}|${sort}`;
  const visibleCount = pagination.key === filterKey ? pagination.count : PAGE_SIZE;

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const loadMore = useCallback(() => {
    setPagination((prev) => {
      const current = prev.key === filterKey ? prev.count : PAGE_SIZE;
      return { key: filterKey, count: Math.min(current + PAGE_SIZE, filteredProducts.length) };
    });
  }, [filterKey, filteredProducts.length]);

  const sentinelRef = useInfiniteScroll(loadMore, { enabled: hasMore });
  const total = filteredProducts.length;

  return (
    <main className="container">
      <div className="results-row">
        <p className="results-info">
          {total} producto{total !== 1 ? "s" : ""} encontrado{total !== 1 ? "s" : ""}
        </p>
        {hasActiveFilters && (
          <button type="button" className="clear-btn" onClick={clearFilters}>
            Limpiar filtros
          </button>
        )}
      </div>

      {visibleProducts.length > 0 ? (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="no-results">No se encontraron productos con esos filtros.</p>
      )}

      {hasMore && (
        <>
          <div className="loader">Cargando más productos...</div>
          <div ref={sentinelRef} className="scroll-sentinel" />
        </>
      )}
    </main>
  );
}
