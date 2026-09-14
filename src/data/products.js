// ============================================================
// DATOS DE PRODUCTOS (DEMO)
// Reemplazá este archivo por tu catálogo real. Cada producto
// necesita: id, name, category, price, description, image.
// "image" puede ser una URL externa o un import local
// (ej: import foto1 from "../assets/foto1.jpg").
// ============================================================

export const CATEGORIES = [
  "Indumentaria",
  "Calzado",
  "Accesorios",
  "Hogar",
  "Tecnología",
];

const PLACEHOLDER_NAMES = [
  "Remera básica", "Buzo canguro", "Campera inflable", "Zapatillas urbanas",
  "Botas de cuero", "Gorra clásica", "Mochila de viaje", "Cinturón cuero",
  "Lámpara de escritorio", "Set de tazas", "Auriculares bluetooth",
  "Parlante portátil", "Reloj digital", "Billetera slim", "Anteojos de sol",
  "Pantalón cargo", "Short deportivo", "Medias pack x3", "Bufanda tejida",
  "Guantes térmicos",
];

// Generador de productos de ejemplo. Borrá esta función y el
// export de abajo cuando cargues tu catálogo real, y reemplazalo
// por un array simple:
//
// export const PRODUCTS = [
//   { id: 1, name: "...", category: "...", price: 12000, description: "...", image: "..." },
//   ...
// ];
function generatePlaceholderProducts(count) {
  return Array.from({ length: count }, (_, i) => {
    const name = PLACEHOLDER_NAMES[i % PLACEHOLDER_NAMES.length];
    const category = CATEGORIES[i % CATEGORIES.length];
    const price = 4000 + ((i * 733) % 46000);
    return {
      id: i + 1,
      name: `${name} #${i + 1}`,
      category,
      price,
      description:
        "Descripción de ejemplo del producto. Acá va el detalle: materiales, talles disponibles, colores, etc. Este texto se reemplaza por la descripción real de cada producto.",
      image: `https://picsum.photos/seed/marketarg${i + 1}/600/600`,
    };
  });
}

export const PRODUCTS = generatePlaceholderProducts(68);
