import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

export default function ProductCard({ product }) {
  return (
    <Link to={`/producto/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
