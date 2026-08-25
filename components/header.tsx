"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/data";

function isActive(pathname: string, href: string) {
  const current = pathname.replace(/\/+$/, "") || "/";
  const target = href.replace(/\/+$/, "") || "/";
  return current === target || current.startsWith(`${target}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const home = (pathname.replace(/\/+$/, "") || "/") === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !home || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-paper/95 shadow-[0_1px_0_#e6e6e6] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-6 sm:h-[90px] sm:px-8 lg:px-14">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.7rem] font-medium tracking-[0.16em] uppercase transition-colors hover:text-keaas ${
                isActive(pathname, item.href) ? "text-keaas" : "text-ink-2"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden border border-keaas bg-keaas px-4 py-2 text-[0.65rem] font-medium tracking-[0.18em] text-white uppercase transition-colors hover:bg-keaas-deep sm:inline-flex"
          >
            Talk to us
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="max-h-[calc(100dvh-84px)] overflow-y-auto border-t border-line bg-paper sm:max-h-[calc(100dvh-90px)] lg:hidden"
      >
        <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b border-line py-4 text-sm tracking-[0.14em] uppercase ${
                isActive(pathname, item.href) ? "text-keaas" : "text-ink"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-6 inline-flex justify-center bg-keaas px-4 py-3 text-[0.7rem] tracking-[0.18em] text-white uppercase"
            onClick={() => setOpen(false)}
          >
            Talk to us
          </Link>
        </nav>
      </div>
    </header>
  );
}
