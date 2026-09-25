import { Link } from "react-router-dom";
import { SITE } from "../data/config";
import { CATEGORIES } from "../data/products";
import { PRICE_RANGES, SORT_OPTIONS } from "../data/filters";
import { useCatalogFilters } from "../hooks/useCatalogFilters";

export default function Header() {
  const { filters, setFilter } = useCatalogFilters();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <h1 className="brand-name">
            {SITE.brandName}
            <span>{SITE.brandNameAccent}</span>
          </h1>
          <p className="brand-subtitle">{SITE.subtitle}</p>
        </Link>
      </div>

      <div className="container toolbar">
        <div className="search-box">
          <svg className="icon-search" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            placeholder="Buscar productos..."
            autoComplete="off"
            aria-label="Buscar productos"
            value={filters.search}
            onChange={(e) => setFilter("search", e.target.value)}
          />
        </div>

        <select
          className="filter-select filter-category"
          aria-label="Categoría"
          value={filters.category}
          onChange={(e) => setFilter("category", e.target.value)}
        >
          <option value="Todos">Todas las categorías</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          aria-label="Filtrar por precio"
          value={filters.price}
          onChange={(e) => setFilter("price", e.target.value)}
        >
          {PRICE_RANGES.map((r) => (
            <option key={r.id} value={r.id}>
              {r.label}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          aria-label="Ordenar"
          value={filters.sort}
          onChange={(e) => setFilter("sort", e.target.value)}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
