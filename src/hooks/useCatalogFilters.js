import { useCallback } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const PARAM = { search: "q", category: "cat", price: "precio", sort: "orden" };
const DEFAULT = { search: "", category: "Todos", price: "todos", sort: "relevancia" };

/**
 * Los filtros viven en la URL (?q=&cat=&precio=&orden=), así funcionan desde
 * cualquier página (si estás en un producto te llevan al catálogo filtrado)
 * y se pueden compartir.
 */
export function useCatalogFilters() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const filters = {
    search: params.get(PARAM.search) || DEFAULT.search,
    category: params.get(PARAM.category) || DEFAULT.category,
    price: params.get(PARAM.price) || DEFAULT.price,
    sort: params.get(PARAM.sort) || DEFAULT.sort,
  };

  const go = useCallback(
    (next) => {
      const qs = next.toString();
      navigate({ pathname: "/", search: qs ? `?${qs}` : "" }, { replace: pathname === "/" });
    },
    [navigate, pathname]
  );

  const setFilter = useCallback(
    (key, value) => {
      const next = new URLSearchParams(pathname === "/" ? params : undefined);
      if (value === DEFAULT[key]) next.delete(PARAM[key]);
      else next.set(PARAM[key], value);
      go(next);
    },
    [params, pathname, go]
  );

  const clearFilters = useCallback(() => go(new URLSearchParams()), [go]);

  const hasActiveFilters = Object.keys(DEFAULT).some((k) => filters[k] !== DEFAULT[k]);

  return { filters, setFilter, clearFilters, hasActiveFilters };
}
