import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { company } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "KEAAS — Expertise Delivered.",
    template: "%s · KEAAS",
  },
  description: company.description,
  metadataBase: new URL("https://keaas.com"),
  openGraph: {
    title: "KEAAS — Expertise Delivered.",
    description: company.description,
    type: "website",
    locale: "en_GB",
    siteName: "KEAAS",
    images: [{ url: "/KEAAS-logo.png", alt: "KEAAS Global" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col overflow-x-clip font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
