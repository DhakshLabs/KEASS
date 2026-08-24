import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

type LogoProps = {
  variant?: "dark" | "light";
  href?: string;
  compact?: boolean;
};

export function Logo({ variant = "light", href = "/", compact = false }: LogoProps) {
  const content = (
    <BrandLogo
      variant={variant}
      compact={compact}
      className={`h-auto ${compact ? "w-[64px] sm:w-[72px]" : "w-[76px] sm:w-[92px]"}`}
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
