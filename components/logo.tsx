import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  invert?: boolean;
  href?: string;
  compact?: boolean;
};

export function Logo({ invert = false, href = "/", compact = false }: LogoProps) {
  const content = (
    <Image
      src="/logo.png"
      alt="KEAAS Global"
      width={compact ? 72 : 92}
      height={compact ? 86 : 110}
      className={`h-auto object-contain ${
        compact ? "w-[64px] sm:w-[72px]" : "w-[76px] sm:w-[92px]"
      } ${invert ? "brightness-0 invert" : ""}`}
      priority
    />
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} aria-label="KEAAS Global home" className="inline-flex items-center">
      {content}
    </Link>
  );
}
