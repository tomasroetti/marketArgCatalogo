// ============================================================
// CATÁLOGO DE PRODUCTOS
// Generado desde "CATALOGO JUGUETES.xlsx".
// Cada producto: id, name, category, price, description, image.
// Las fotos están en /public/products/ y se asignan por slug en PRODUCT_IMAGES
// (la primera es la principal; el resto forma la galería del detalle).
// Los productos sin fotos usan el placeholder.
// ============================================================

export const PLACEHOLDER_IMAGE = "/placeholder.svg";

const PRODUCT_IMAGES = {
  "maquina-retroexcavadora-a-control-remoto": ["/products/maquina-retroexcavadora-a-control-remoto-1.webp", "/products/maquina-retroexcavadora-a-control-remoto-2.webp"],
  "camioneta-a-control-remoto": ["/products/camioneta-a-control-remoto-1.webp"],
  "set-de-camionetas-monstruo": ["/products/set-de-camionetas-monstruo-1.webp"],
  "hot-wheels-shark-catapult": ["/products/hot-wheels-shark-catapult-1.webp"],
  "camion-de-juguete": ["/products/camion-de-juguete-1.webp"],
  "casco-de-moto-coleccionable": ["/products/casco-de-moto-coleccionable-1.webp"],
  "pista-hot-wheels-modelo-lobo": ["/products/pista-hot-wheels-modelo-lobo-1.webp", "/products/pista-hot-wheels-modelo-lobo-2.webp"],
  "pista-hot-wheels-modelo-tiburon": ["/products/pista-hot-wheels-modelo-tiburon-1.webp"],
  "pista-hot-wheels-modelo-tigre": ["/products/pista-hot-wheels-modelo-tigre-1.webp"],
  "pista-de-autos-modelo-super-mario-galaxy": ["/products/pista-de-autos-modelo-super-mario-galaxy-1.webp", "/products/pista-de-autos-modelo-super-mario-galaxy-2.webp"],
  "pista-de-autos-modelo-toy-story-5": ["/products/pista-de-autos-modelo-toy-story-5-1.webp"],
  "tower-bridge": ["/products/tower-bridge-1.webp", "/products/tower-bridge-2.webp"],
  "ciruelo-japones": ["/products/ciruelo-japones-1.webp", "/products/ciruelo-japones-2.webp", "/products/ciruelo-japones-3.webp"],
  "rosa-en-maceta": ["/products/rosa-en-maceta-1.webp", "/products/rosa-en-maceta-2.webp", "/products/rosa-en-maceta-3.webp"],
  "girasol": ["/products/girasol-1.webp", "/products/girasol-2.webp", "/products/girasol-3.webp"],
  "orquidea": ["/products/orquidea-1.webp", "/products/orquidea-2.webp", "/products/orquidea-3.webp"],
  "piramide-de-guiza": ["/products/piramide-de-guiza-1.webp"],
  "torre-de-pisa": ["/products/torre-de-pisa-1.webp", "/products/torre-de-pisa-2.webp"],
  "titanic": ["/products/titanic-1.webp", "/products/titanic-2.webp"],
  "torre-eiffel": ["/products/torre-eiffel-1.webp", "/products/torre-eiffel-2.webp", "/products/torre-eiffel-3.webp"],
  "auto-azul": ["/products/auto-azul-1.webp"],
  "casa-del-arbol-femenina": ["/products/casa-del-arbol-femenina-1.webp", "/products/casa-del-arbol-femenina-2.webp", "/products/casa-del-arbol-femenina-3.webp"],
  "auto-rosa": ["/products/auto-rosa-1.webp", "/products/auto-rosa-2.webp"],
  "set-bloques-magneticos-caja-metalica": ["/products/set-bloques-magneticos-caja-metalica-1.webp"],
  "set-bloques-magneticos-48-piezas": ["/products/set-bloques-magneticos-48-piezas-1.webp", "/products/set-bloques-magneticos-48-piezas-2.webp"],
  "set-bloques-magneticos-tematica-espacial": ["/products/set-bloques-magneticos-tematica-espacial-1.webp"],
  "cubo-bloques-magneticos-minecraft": ["/products/cubo-bloques-magneticos-minecraft-1.webp", "/products/cubo-bloques-magneticos-minecraft-2.webp"],
  "bloques-magneticos-minecraft": ["/products/bloques-magneticos-minecraft-1.webp"],
  "caja-tnt-bloques-magneticos-minecraft": ["/products/caja-tnt-bloques-magneticos-minecraft-1.webp", "/products/caja-tnt-bloques-magneticos-minecraft-2.webp", "/products/caja-tnt-bloques-magneticos-minecraft-3.webp"],
  "carpa-celeste-rosa": ["/products/carpa-celeste-rosa-1.webp", "/products/carpa-celeste-rosa-2.webp", "/products/carpa-celeste-rosa-3.webp"],
  "carpa-candy-shop": ["/products/carpa-candy-shop-1.webp", "/products/carpa-candy-shop-2.webp", "/products/carpa-candy-shop-3.webp", "/products/carpa-candy-shop-4.webp"],
  "basta": ["/products/basta-1.webp"],
  "tablero-futbol": ["/products/tablero-futbol-1.webp"],
  "jiugongge": ["/products/jiugongge-1.webp"],
  "face-change-rubik-cube": ["/products/face-change-rubik-cube-1.webp"],
  "cubo-para-ninos": ["/products/cubo-para-ninos-1.webp"],
  "lol-surprise-limited-edition": ["/products/lol-surprise-limited-edition-1.webp", "/products/lol-surprise-limited-edition-2.webp", "/products/lol-surprise-limited-edition-3.webp"],
  "helado-lol-beautiful": ["/products/helado-lol-beautiful-1.webp"],
  "cry-babies": ["/products/cry-babies-1.webp", "/products/cry-babies-2.webp"],
  "juego-de-encastre-gallina-y-huevos": ["/products/juego-de-encastre-gallina-y-huevos-1.webp"],
  "mini-heladera-viral": ["/products/mini-heladera-viral-1.webp", "/products/mini-heladera-viral-2.webp", "/products/mini-heladera-viral-3.webp"],
  "casa-peppa-pig": ["/products/casa-peppa-pig-1.webp"],
  "set-peppa-pig": ["/products/set-peppa-pig-1.webp"],
  "set-de-cocina-rosa": ["/products/set-de-cocina-rosa-1.webp"],
  "lamparas": ["/products/lamparas-1.webp", "/products/lamparas-2.webp"],
  "auricular-haylou-s30-pro": ["/products/auricular-haylou-s30-pro-1.webp", "/products/auricular-haylou-s30-pro-2.webp"],
  "drone": ["/products/drone-1.webp"],
  "mario-bros": ["/products/mario-bros-1.webp", "/products/mario-bros-2.webp"],
  "dinosaurio-yoshi-mario-bros": ["/products/dinosaurio-yoshi-mario-bros-1.webp"],
  "figura-de-accion-toy-story": ["/products/figura-de-accion-toy-story-1.webp"],
  "set-4-marios": ["/products/set-4-marios-1.webp"],
  "set-mario-bros": ["/products/set-mario-bros-1.webp"],
  "set-mario-bros-2": ["/products/set-mario-bros-2-1.webp"],
  "microscopio": ["/products/microscopio-1.webp", "/products/microscopio-2.webp"],
  "set-stitch": ["/products/set-stitch-1.webp"],
  "squishy-barra-manteca": ["/products/squishy-barra-manteca-1.webp"],
  "ametralladora-hidrogel": ["/products/ametralladora-hidrogel-1.webp"],
  "repuesto-hidrogel": ["/products/repuesto-hidrogel-1.webp"]
};

export const CATEGORIES = [
  "Autos",
  "Bloques estilo Lego",
  "Bloques magnéticos",
  "Carpas",
  "Juegos de mesa",
  "Juguetes niña",
  "Lámparas y auriculares",
  "Muñecos y figuras",
  "Hidrogel"
];

// Convierte el nombre en un texto apto para URL: "Torre Eiffel" -> "torre-eiffel"
function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const RAW_PRODUCTS = [
  {
    "id": 1,
    "name": "Máquina Retroexcavadora a Control Remoto",
    "category": "Autos",
    "price": 49500,
    "description": "A control remoto, movimiento de pala mecánica y rotación de la máquina"
  },
  {
    "id": 2,
    "name": "Camioneta a Control Remoto",
    "category": "Autos",
    "price": 15500,
    "description": "Cable cargador incluido"
  },
  {
    "id": 3,
    "name": "Set de Camionetas Monstruo",
    "category": "Autos",
    "price": 16500,
    "description": "3 camionetas y un trailer"
  },
  {
    "id": 4,
    "name": "Hot Wheels: Shark Catapult",
    "category": "Autos",
    "price": 36500,
    "description": "Incluye dos autos"
  },
  {
    "id": 5,
    "name": "Camión de Juguete",
    "category": "Autos",
    "price": 7500,
    "description": "Camión de metal, acoplado de plástico, 20 cm de largo"
  },
  {
    "id": 6,
    "name": "Casco de Moto Coleccionable",
    "category": "Autos",
    "price": 9500,
    "description": "Colores varios"
  },
  {
    "id": 7,
    "name": "Pista Hot Wheels Modelo Lobo",
    "category": "Autos",
    "price": 36500,
    "description": "41 piezas"
  },
  {
    "id": 8,
    "name": "Pista Hot Wheels Modelo Tiburón",
    "category": "Autos",
    "price": 36500,
    "description": "36 piezas"
  },
  {
    "id": 9,
    "name": "Pista Hot Wheels Modelo Tigre",
    "category": "Autos",
    "price": 36500,
    "description": "39 piezas"
  },
  {
    "id": 10,
    "name": "Pista de Autos Modelo Super Mario Galaxy",
    "category": "Autos",
    "price": 36500,
    "description": ""
  },
  {
    "id": 11,
    "name": "Pista de Autos Modelo Toy Story 5",
    "category": "Autos",
    "price": 36500,
    "description": "Incluye auto de Buzz y Woody"
  },
  {
    "id": 12,
    "name": "Tower Bridge",
    "category": "Bloques estilo Lego",
    "price": 26500,
    "description": "De plástico tipo ABS, 2300+ piezas, diseño arquitectónico detallado, coleccionable"
  },
  {
    "id": 13,
    "name": "Ciruelo Japonés",
    "category": "Bloques estilo Lego",
    "price": 37500,
    "description": "736 piezas, incluye maceta y base decorativa"
  },
  {
    "id": 14,
    "name": "Rosa en Maceta",
    "category": "Bloques estilo Lego",
    "price": 19500,
    "description": "Incluye maceta y arreglo floral, medida: 231mm x 130 mm x 113mm"
  },
  {
    "id": 15,
    "name": "Girasol",
    "category": "Bloques estilo Lego",
    "price": 19500,
    "description": "Aprox 24 cm de alto"
  },
  {
    "id": 16,
    "name": "Orquídea",
    "category": "Bloques estilo Lego",
    "price": 37500,
    "description": "Más de 779 piezas, 35cm x 30 cm x 14 cm"
  },
  {
    "id": 17,
    "name": "Pirámide de Guiza",
    "category": "Bloques estilo Lego",
    "price": 39500,
    "description": "Más de 1600 piezas, medida 16cm x 16cm x 7 cm"
  },
  {
    "id": 18,
    "name": "Torre de Pisa",
    "category": "Bloques estilo Lego",
    "price": 39500,
    "description": "Más de 2680 piezas"
  },
  {
    "id": 19,
    "name": "Titanic",
    "category": "Bloques estilo Lego",
    "price": 14500,
    "description": ""
  },
  {
    "id": 20,
    "name": "Torre Eiffel",
    "category": "Bloques estilo Lego",
    "price": 14500,
    "description": "16 cm x 16 cm x 33cm"
  },
  {
    "id": 21,
    "name": "Auto Rojo",
    "category": "Bloques estilo Lego",
    "price": 19500,
    "description": "Aprox 300 piezas"
  },
  {
    "id": 22,
    "name": "Auto Azul",
    "category": "Bloques estilo Lego",
    "price": 19500,
    "description": "Aprox 300 piezas"
  },
  {
    "id": 23,
    "name": "Casa del Árbol Femenina",
    "category": "Bloques estilo Lego",
    "price": 37500,
    "description": "504 piezas aprox, medidas 48cm x 7 cm x 30 cm"
  },
  {
    "id": 24,
    "name": "Auto Rosa",
    "category": "Bloques estilo Lego",
    "price": 39500,
    "description": "Más de 1037 piezas"
  },
  {
    "id": 25,
    "name": "Nave Espacial",
    "category": "Bloques estilo Lego",
    "price": 19500,
    "description": ""
  },
  {
    "id": 26,
    "name": "Set Bloques Magnéticos Caja Metálica",
    "category": "Bloques magnéticos",
    "price": 25000,
    "description": "90 piezas tamaño pequeñas"
  },
  {
    "id": 27,
    "name": "Set Bloques Magnéticos 48 Piezas",
    "category": "Bloques magnéticos",
    "price": 29500,
    "description": "48 piezas tamaño promedio"
  },
  {
    "id": 28,
    "name": "Set Bloques Magnéticos Temática Espacial",
    "category": "Bloques magnéticos",
    "price": 31900,
    "description": "68 piezas tamaño promedio"
  },
  {
    "id": 29,
    "name": "Cubo Bloques Magnéticos Minecraft",
    "category": "Bloques magnéticos",
    "price": 7500,
    "description": "27 piezas"
  },
  {
    "id": 30,
    "name": "Bloques Magnéticos Minecraft",
    "category": "Bloques magnéticos",
    "price": 29500,
    "description": "152 piezas"
  },
  {
    "id": 31,
    "name": "Caja TNT Bloques Magnéticos Minecraft",
    "category": "Bloques magnéticos",
    "price": 37500,
    "description": "80 piezas"
  },
  {
    "id": 32,
    "name": "Carpa Celeste/Rosa",
    "category": "Carpas",
    "price": 37000,
    "description": "104cm x 122cm x 135 cm"
  },
  {
    "id": 33,
    "name": "Carpa Candy Shop",
    "category": "Carpas",
    "price": 27000,
    "description": "Diseño candy shop medidas 93 x 70 x 103cm"
  },
  {
    "id": 34,
    "name": "Basta",
    "category": "Juegos de mesa",
    "price": 15000,
    "description": ""
  },
  {
    "id": 35,
    "name": "Tablero Fútbol",
    "category": "Juegos de mesa",
    "price": 15000,
    "description": ""
  },
  {
    "id": 36,
    "name": "Jiugongge",
    "category": "Juegos de mesa",
    "price": 15000,
    "description": ""
  },
  {
    "id": 37,
    "name": "Face Change Rubik Cube",
    "category": "Juegos de mesa",
    "price": 15000,
    "description": ""
  },
  {
    "id": 38,
    "name": "Cubo para Niños",
    "category": "Juguetes niña",
    "price": 12500,
    "description": ""
  },
  {
    "id": 39,
    "name": "LOL Surprise Limited Edition",
    "category": "Juguetes niña",
    "price": 15000,
    "description": "Contiene muñeca"
  },
  {
    "id": 40,
    "name": "Helado LOL Beautiful",
    "category": "Juguetes niña",
    "price": 4500,
    "description": "Contiene muñeca"
  },
  {
    "id": 41,
    "name": "Cry Babies",
    "category": "Juguetes niña",
    "price": 7500,
    "description": "Contiene bebé"
  },
  {
    "id": 42,
    "name": "Juego de Encastre: Gallina y Huevos",
    "category": "Juguetes niña",
    "price": 19500,
    "description": ""
  },
  {
    "id": 43,
    "name": "Mini Heladera Viral",
    "category": "Juguetes niña",
    "price": 54500,
    "description": ""
  },
  {
    "id": 44,
    "name": "Casa Peppa Pig",
    "category": "Juguetes niña",
    "price": 44500,
    "description": "25 piezas"
  },
  {
    "id": 45,
    "name": "Set Peppa Pig",
    "category": "Juguetes niña",
    "price": 22000,
    "description": "4 piezas"
  },
  {
    "id": 46,
    "name": "Set de Cocina Rosa",
    "category": "Juguetes niña",
    "price": 49000,
    "description": "Color rosa, contiene tostadora, cafetera, licuadora y mezcladora"
  },
  {
    "id": 47,
    "name": "Lámparas",
    "category": "Lámparas y auriculares",
    "price": 18500,
    "description": "Distintos motivos"
  },
  {
    "id": 48,
    "name": "Auricular Haylou S30 PRO",
    "category": "Lámparas y auriculares",
    "price": 79000,
    "description": "Negro o blanco"
  },
  {
    "id": 49,
    "name": "Drone",
    "category": "Lámparas y auriculares",
    "price": 29500,
    "description": ""
  },
  {
    "id": 50,
    "name": "Control PS5",
    "category": "Lámparas y auriculares",
    "price": 128000,
    "description": "Blanco"
  },
  {
    "id": 51,
    "name": "Mario Bros",
    "category": "Muñecos y figuras",
    "price": 13500,
    "description": "Dorado o plateado"
  },
  {
    "id": 52,
    "name": "Dinosaurio Yoshi Mario Bros",
    "category": "Muñecos y figuras",
    "price": 13500,
    "description": ""
  },
  {
    "id": 53,
    "name": "Figura de Acción Toy Story",
    "category": "Muñecos y figuras",
    "price": 16000,
    "description": "Modelos disponibles: Buzz Lightyear, Woody y Jessi"
  },
  {
    "id": 54,
    "name": "Set 4 Marios",
    "category": "Muñecos y figuras",
    "price": 19000,
    "description": "4 figuras de Mario bros sobre caja misteriosa"
  },
  {
    "id": 55,
    "name": "Set Mario Bros",
    "category": "Muñecos y figuras",
    "price": 26000,
    "description": "10 piezas"
  },
  {
    "id": 56,
    "name": "Set Mario Bros",
    "category": "Muñecos y figuras",
    "price": 23000,
    "description": "4 piezas, Mario, Wario, Yoshi y Donkey Kong"
  },
  {
    "id": 57,
    "name": "Microscopio",
    "category": "Muñecos y figuras",
    "price": 26500,
    "description": "Color celeste, posibilidad de hacer zoom a la muestra"
  },
  {
    "id": 58,
    "name": "Set Stitch",
    "category": "Muñecos y figuras",
    "price": 19500,
    "description": "4 piezas"
  },
  {
    "id": 59,
    "name": "Squishy Barra Manteca",
    "category": "Muñecos y figuras",
    "price": 15500,
    "description": ""
  },
  {
    "id": 60,
    "name": "Ametralladora Hidrogel",
    "category": "Hidrogel",
    "price": 26500,
    "description": "Eléctrica, automática"
  },
  {
    "id": 61,
    "name": "Repuesto Hidrogel",
    "category": "Hidrogel",
    "price": 4900,
    "description": ""
  }
];

// Agrega slug único (si el nombre se repite, suma -2, -3, ...) e imagen
const usedSlugs = new Map();
export const PRODUCTS = RAW_PRODUCTS.map((p) => {
  const base = slugify(p.name);
  const count = (usedSlugs.get(base) || 0) + 1;
  usedSlugs.set(base, count);
  const slug = count === 1 ? base : `${base}-${count}`;
  const images = PRODUCT_IMAGES[slug] || [PLACEHOLDER_IMAGE];
  return { ...p, slug, images, image: images[0] };
});
