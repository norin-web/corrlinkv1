import { Link } from "react-router";
import { site } from "../content/site";
import Mark from "./Mark";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="logo">
              <Mark />
              <span>{site.brand}</span>
            </Link>
            <p className="muted">Messaging for iPhone, for keeping in touch with someone in a correctional facility.</p>
            <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="footer__cols">
            <div>
              <h2 className="footer__h">Product</h2>
              <ul>
                <li><Link to="/app">App</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="footer__h">Help</h2>
              <ul>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          <span>© {site.year} {site.brand}</span>
        </div>
      </div>
    </footer>
  );
}
