/** Logo mark: two overlapping speech bubbles, the same idea as the app icon. */
export default function Mark({ size = 32 }: { size?: number }) {
  return (
    <svg className="mark" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0C2C56" />
      <rect x="10" y="13" width="30" height="22" rx="8" fill="#C9D2FF" />
      <rect x="24" y="29" width="30" height="22" rx="8" fill="#F4F5F8" />
    </svg>
  );
}
