import { img } from "../utils/img";

/**
 * iPhone frame around a clean app screen exported from Figma.
 * The ASO screens have no status bar, so the frame draws one above the image.
 */
export default function Phone({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__body">
        <div className="phone__screen">
          <div className="phone__bar" aria-hidden="true">
            <span className="phone__time">9:41</span>
            <span className="phone__island" />
            <span className="phone__icons">
              <svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" /><rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
              <svg viewBox="0 0 26 12"><rect x="0.5" y="0.5" width="22" height="11" rx="3.5" fill="none" stroke="currentColor" opacity=".4" /><rect x="2" y="2" width="19" height="8" rx="2" /><rect x="24" y="4" width="2" height="4" rx="1" opacity=".4" /></svg>
            </span>
          </div>
          <img src={img(src)} alt={alt} width={829} height={1800} loading={eager ? "eager" : "lazy"} />
        </div>
      </div>
    </div>
  );
}
