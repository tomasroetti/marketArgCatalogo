// Opciones de filtro por precio y de orden del catálogo.
// Rangos: se incluye el máximo y se excluye el mínimo ("Hasta" incluye desde $0).
export const PRICE_RANGES = [
  { id: "todos", label: "Todos los precios" },
  { id: "hasta-15000", label: "Hasta $15.000", min: 0, max: 15000 },
  { id: "15000-30000", label: "$15.000 a $30.000", min: 15000, max: 30000 },
  { id: "30000-50000", label: "$30.000 a $50.000", min: 30000, max: 50000 },
  { id: "mas-50000", label: "Más de $50.000", min: 50000, max: Infinity },
];

export const SORT_OPTIONS = [
  { id: "relevancia", label: "Destacados" },
  { id: "az", label: "Nombre: A a Z" },
  { id: "za", label: "Nombre: Z a A" },
  { id: "precio-asc", label: "Precio: menor a mayor" },
  { id: "precio-desc", label: "Precio: mayor a menor" },
];

export function matchesPrice(rangeId, price) {
  const range = PRICE_RANGES.find((r) => r.id === rangeId);
  if (!range || range.min === undefined) return true;
  return (price > range.min || range.min === 0) && price <= range.max;
}

const collator = new Intl.Collator("es", { sensitivity: "base", numeric: true });

export function sortProducts(products, sortId) {
  const list = [...products];
  switch (sortId) {
    case "az":
      return list.sort((a, b) => collator.compare(a.name, b.name));
    case "za":
      return list.sort((a, b) => collator.compare(b.name, a.name));
    case "precio-asc":
      return list.sort((a, b) => a.price - b.price || collator.compare(a.name, b.name));
    case "precio-desc":
      return list.sort((a, b) => b.price - a.price || collator.compare(a.name, b.name));
    default:
      return list;
  }
}
