import { Link } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={img("/images/app-icon.png")} alt="" width={36} height={36} />
            <span>{site.brand}</span>
          </Link>
          <p>Messages to someone in a correctional facility, from your iPhone.</p>
          <a className="footer__mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div className="footer__cols">
          <div>
            <h2>Product</h2>
            <ul>
              <li><Link to="/app">App</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
            </ul>
          </div>
          <div>
            <h2>Help</h2>
            <ul>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container footer__copy">
        <p>© {site.year} {site.operator} · {site.location}</p>
        <p className="footer__legal">{site.disclaimer}</p>
      </div>
    </footer>
  );
}
