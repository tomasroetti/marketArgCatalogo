import { useState } from "react";

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0);

  return (
    <div className="gallery">
      <div className="detail-image">
        <img src={images[active]} alt={name} />
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`gallery-thumb${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Ver foto ${i + 1} de ${images.length}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
