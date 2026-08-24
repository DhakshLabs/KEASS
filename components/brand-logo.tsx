import { useId } from "react";

type BrandLogoProps = {
  variant?: "dark" | "light";
  compact?: boolean;
  className?: string;
};

export function BrandLogo({
  variant = "light",
  compact = false,
  className = "",
}: BrandLogoProps) {
  const uid = useId().replace(/:/g, "");
  const maskId = `keaas-k-${uid}`;
  const keaas = variant === "dark" ? "#FFFFFF" : "#B40000";

  return (
    <svg
      viewBox="0 0 180 214"
      className={className}
      width={compact ? 72 : 92}
      height={compact ? 86 : 110}
      role="img"
      aria-label="KEAAS Global"
    >
      <title>KEAAS Global</title>
      <defs>
        <mask id={maskId}>
          <rect width="180" height="214" fill="white" />
          <g fill="black" transform="translate(18, 4)">
            <circle cx="58" cy="52" r="7.2" />
            <circle cx="86" cy="52" r="7.2" />
            <path d="M51 62c0 8 5 15 12 18 2.2 1.1 4 3.2 4 6.2V96H47c-3.2 0-5.5-2.6-5.5-5.8V78c0-9 4.8-16 12-16Z" />
            <path d="M93 62c0 8-5 15-12 18-2.2 1.1-4 3.2-4 6.2V96h20c3.2 0 5.5-2.6 5.5-5.8V78c0-9-4.8-16-12-16Z" />
            <path d="M66 78c3.2 5 12.8 5 16 0 1.6 7 .6 14-8 18-8.6-4-9.6-11-8-18Z" />
          </g>
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <path
          d="M40 12h30v108H40V12Zm30 49 58-49H86L64 56v20l22 44h22L70 67V61Z"
          fill="#B40000"
        />
      </g>
      <circle cx="92" cy="84" r="3.4" fill="#B40000" />
      <text
        x="90"
        y="152"
        textAnchor="middle"
        fill={keaas}
        fontFamily="Inter, Arial, Helvetica, sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="6"
      >
        KEAAS
      </text>
      <line x1="28" y1="176" x2="52" y2="176" stroke="#B40000" strokeWidth="2" />
      <text
        x="90"
        y="181"
        textAnchor="middle"
        fill="#B40000"
        fontFamily="Inter, Arial, Helvetica, sans-serif"
        fontSize="13"
        fontWeight="500"
        letterSpacing="8"
      >
        GLOBAL
      </text>
      <line x1="128" y1="176" x2="152" y2="176" stroke="#B40000" strokeWidth="2" />
    </svg>
  );
}
