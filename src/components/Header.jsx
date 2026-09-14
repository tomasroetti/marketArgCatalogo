import { Link } from "react-router-dom";
import { SITE } from "../data/config";

export default function Header({ search, onSearchChange, category, onCategoryChange, categories }) {
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
            type="text"
            placeholder="Buscar productos..."
            autoComplete="off"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <select
          className="category-select"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="Todos">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
