import type { ReactNode } from "react";
import { Link } from "react-router";
import { app } from "../content/site";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "blue" | "light" | "dark";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

/** Pill button. Internal links use the router, external ones open in a new tab. */
export default function Btn({ children, to, href, variant = "blue", className = "", type = "button", onClick }: Props) {
  const cls = `btn btn--${variant} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href)
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {children}
      </a>
    );
  return <button type={type} className={cls} onClick={onClick}>{children}</button>;
}

export const AppleLogo = () => (
  <svg className="apple" viewBox="0 0 384 512" aria-hidden="true">
    <path
      fill="currentColor"
      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
    />
  </svg>
);

/** App Store badge: Apple logo, two lines, blue fill. */
export function StoreBadge({ className = "" }: { className?: string }) {
  return (
    <a href={app.url} className={`badge ${className}`} target="_blank" rel="noopener noreferrer" aria-label="Download CorrLink on the App Store">
      <AppleLogo />
      <span className="badge__text">
        <small>Download on the</small>
        <b>App Store</b>
      </span>
    </a>
  );
}
