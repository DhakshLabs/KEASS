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
      width={compact ? 56 : 68}
      height={compact ? 67 : 82}
      className={`h-auto w-[56px] object-contain sm:w-[68px] ${invert ? "brightness-0 invert" : ""}`}
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
