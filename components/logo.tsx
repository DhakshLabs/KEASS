"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  compact?: boolean;
};

export function Logo({ href = "/", compact = false }: LogoProps) {
  const content = (
    <Image
      src="/logo.png"
      alt="KEAAS Global"
      width={compact ? 72 : 88}
      height={compact ? 72 : 88}
      className={`h-auto object-contain ${compact ? "w-[56px] sm:w-[64px]" : "w-[68px] sm:w-[80px]"}`}
      priority
    />
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="KEAAS Global home" className="inline-flex items-center">
      {content}
    </Link>
  );
}
