import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { app, nav, site } from "../content/site";
import { img } from "../utils/img";

/** Floating dark pill. Fixed at the top, never hides on scroll. */
export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="nav">
      <div className={`nav__pill${open ? " is-open" : ""}`}>
        <div className="nav__row">
          <Link to="/" className="nav__logo" aria-label={`${site.brand} home`}>
            <img src={img("/images/app-icon.png")} alt="" width={32} height={32} />
            <span>{site.brand}</span>
          </Link>
          <nav className="nav__links" aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `nav__link${isActive ? " is-active" : ""}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <a className="nav__cta" href={app.url} target="_blank" rel="noopener noreferrer">Get the app</a>
          <button
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
        <div id="nav-menu" className="nav__menu" hidden={!open}>
          <Link to="/" className="nav__mlink">Home</Link>
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="nav__mlink">{n.label}</Link>
          ))}
          <a className="nav__cta nav__cta--wide" href={app.url} target="_blank" rel="noopener noreferrer">Get the app</a>
        </div>
      </div>
    </header>
  );
}
