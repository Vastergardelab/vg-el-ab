export default function BrandMark({ className = "" }: { className?: string }) {
  // Inline logo (ingen extern bildfil behövs)
  return (
    <svg
      viewBox="0 0 560 180"
      role="img"
      aria-label="Västergård El logotyp"
      className={className}
      style={{ display: "block" }}
    >
      {/* Titel */}
      <text
        x="280"
        y="70"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        fontWeight="800"
        fontSize="56"
        fill="#1e3a8a"
        letterSpacing="2"
      >
        VÄSTERGÅRD EL
      </text>

      {/* Rad 2 */}
      <text
        x="280"
        y="105"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        fontWeight="700"
        fontSize="24"
        fill="#1e3a8a"
      >
        Elinstallation
        <tspan fill="#f97316">  ⚡  </tspan>
        Elservice
        <tspan fill="#f97316">  ⚡  </tspan>
        Nätverk
      </text>

      {/* Linje + puls */}
      <path
        d="M60 128 C160 118, 240 118, 280 128 S400 138, 500 128"
        fill="none"
        stroke="#f97316"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M392 128 L404 128 L412 114 L420 150 L430 124 L438 128 L500 128"
        fill="none"
        stroke="#f97316"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tagline */}
      <text
        x="280"
        y="165"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        fontWeight="800"
        fontSize="34"
        fill="#f97316"
      >
        Din Elektriker!
      </text>
    </svg>
  );
}
