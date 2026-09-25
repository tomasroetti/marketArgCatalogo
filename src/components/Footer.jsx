import { SITE } from "../data/config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <h2 className="footer-logo">
          {SITE.brandName}
          <span>{SITE.brandNameAccent}</span>
        </h2>
        <div className="footer-contact">
          <a href={`mailto:${SITE.email}`} className="footer-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18v12H3V6z" stroke="currentColor" strokeWidth="2" />
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" />
            </svg>
            {SITE.email}
          </a>
          <a href={`tel:+${SITE.whatsappNumber}`} className="footer-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            {SITE.phoneDisplay}
          </a>
          <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
            {SITE.instagramHandle}
          </a>
        </div>
      </div>
    </footer>
  );
}
