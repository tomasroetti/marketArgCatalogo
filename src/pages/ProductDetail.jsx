import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CATEGORIES, PRODUCTS } from "../data/products";
import { SITE, WHATSAPP_MESSAGE_TEMPLATE } from "../data/config";
import { formatPrice } from "../utils/formatPrice";

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  // El header de esta página también permite buscar/filtrar,
  // pero simplemente vuelve al catálogo con el filtro aplicado
  // en próximas iteraciones; por ahora son controles neutros.
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const product = useMemo(() => PRODUCTS.find((p) => p.id === Number(id)), [id]);

  if (!product) {
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
          <p className="no-results">Producto no encontrado.</p>
          <Link to="/" className="back-link">
            ← Volver al catálogo
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const total = product.price * quantity;

  const whatsappMessage = WHATSAPP_MESSAGE_TEMPLATE.replace("{producto}", product.name)
    .replace("{cantidad}", quantity)
    .replace("{precioUnitario}", formatPrice(product.price))
    .replace("{precioTotal}", formatPrice(total));

  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => q + 1);

  return (
    <>
      <Header
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        categories={CATEGORIES}
      />

      <main className="container product-detail">
        <Link to="/" className="back-link">
          ← Volver al catálogo
        </Link>

        <div className="detail-layout">
          <div className="detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="detail-info">
            <span className="modal-category">{product.category}</span>
            <h1 className="detail-name">{product.name}</h1>
            <p className="detail-price">{formatPrice(product.price)}</p>
            <p className="detail-description">{product.description}</p>

            <div className="quantity-row">
              <label htmlFor="quantityInput">Cantidad</label>
              <div className="quantity-control">
                <button type="button" onClick={decreaseQty} aria-label="Restar">
                  −
                </button>
                <input
                  id="quantityInput"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                />
                <button type="button" onClick={increaseQty} aria-label="Sumar">
                  +
                </button>
              </div>
            </div>

            <p className="detail-total">Total: {formatPrice(total)}</p>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.386.696 4.611 1.897 6.484L4 29l7.72-1.867A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
