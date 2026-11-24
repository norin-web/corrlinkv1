import type { ReactNode } from "react";
import { Link } from "react-router";
import { app } from "../content/site";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

/** Primary (navy) or ghost (outlined) button. Internal links use the router. */
export default function Btn({ children, to, href, variant = "primary", size = "md", className = "", type = "button", onClick }: Props) {
  const cls = `btn btn--${variant} btn--${size} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href)
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {children}
      </a>
    );
  return <button type={type} className={cls} onClick={onClick}>{children}</button>;
}

/** App Store button. Until the app is published it is a disabled "Coming soon" label. */
export function StoreButton({ size = "md" }: { size?: "sm" | "md" }) {
  if (app.url)
    return (
      <a href={app.url} className={`btn btn--primary btn--${size}`} target="_blank" rel="noopener noreferrer">
        Download on the App Store
      </a>
    );
  return (
    <span className={`btn btn--soon btn--${size}`} aria-disabled="true">
      Coming soon on the App Store
    </span>
  );
}
