import Link from "next/link";

type LogoProps = {
  invert?: boolean;
  href?: string;
  compact?: boolean;
};

export function Logo({ invert = false, href = "/", compact = false }: LogoProps) {
  const mark = invert ? "#ffffff" : "#b40000";
  const word = invert ? "#ffffff" : "#111111";

  const content = (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={compact ? 22 : 26}
        height={compact ? 22 : 26}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M6 3.5h4.2v25H6V3.5Z" fill={mark} />
        <path d="M13.4 15.1 25.8 3.5h-5.4L12.2 12.4v5.2l8.2 8.9h5.4L13.4 16.9v-1.8Z" fill={mark} />
      </svg>
      <span
        className="font-medium tracking-[0.22em] text-[0.8rem]"
        style={{ color: word }}
      >
        KEAAS
      </span>
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} aria-label="KEAAS home" className="inline-flex items-center">
      {content}
    </Link>
  );
}
