/** Custom SVG icons not available in lucide-react */

interface IconProps {
  className?: string;
}

/** Dental braces — three teeth with brackets and wire */
export function BracesIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Left tooth */}
      <path d="M4.5 8.5C4.5 6.5 5.5 5.5 7 5.5C8.5 5.5 9.5 6.5 9.5 8.5L9 14C8.8 15.2 8.1 16 7 16C5.9 16 5.2 15.2 5 14Z" />
      {/* Middle tooth */}
      <path d="M10 7.5C10 5.8 10.9 5 12 5C13.1 5 14 5.8 14 7.5L13.5 14C13.3 15.3 12.8 16 12 16C11.2 16 10.7 15.3 10.5 14Z" />
      {/* Right tooth */}
      <path d="M14.5 8.5C14.5 6.5 15.5 5.5 17 5.5C18.5 5.5 19.5 6.5 19.5 8.5L19 14C18.8 15.2 18.1 16 17 16C15.9 16 15.2 15.2 15 14Z" />
      {/* Wire running through all brackets */}
      <line x1="3" y1="10.5" x2="21" y2="10.5" strokeWidth="1.2" />
      {/* Left bracket (filled rect crossing the wire) */}
      <rect x="5.5" y="9.2" width="3" height="2.6" rx="0.4" fill="currentColor" stroke="none" />
      {/* Middle bracket */}
      <rect x="10.5" y="9.2" width="3" height="2.6" rx="0.4" fill="currentColor" stroke="none" />
      {/* Right bracket */}
      <rect x="15.5" y="9.2" width="3" height="2.6" rx="0.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Rock / stone — smooth organic boulder matching user sketch */
export function RockIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Smooth organic boulder outline */}
      <path d="M5 15.5C3.8 13 4 9.5 6 7.5C8 5.5 11 4.5 14 5.5C17 6.5 20 9 20 12C20 15 18 18 15.5 19C13 20 9.5 20 7.5 18.5C5.8 17.5 5.5 16.5 5 15.5Z" />
      {/* Small crack mark top-left */}
      <path d="M8.5 10.5C8.8 10 9.2 9.5 9.5 9.2" strokeWidth="1.2" strokeOpacity="0.6" />
      {/* Small crack mark bottom-right */}
      <path d="M13.5 14.5C14 14.2 14.6 14.2 15 14.5" strokeWidth="1.2" strokeOpacity="0.6" />
    </svg>
  );
}
