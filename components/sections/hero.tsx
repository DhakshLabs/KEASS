"use client";

import dynamic from "next/dynamic";
import { Button, Container } from "@/components/ui";

const EarthGlobe = dynamic(
  () => import("@/components/earth-globe").then((mod) => mod.EarthGlobe),
  {
    ssr: false,
    loading: () => <div className="h-full min-h-[420px] w-full bg-[#050505]" />,
  },
);

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(180,0,0,0.16),transparent_55%)]" />

      <Container className="relative grid min-h-[100svh] items-center gap-8 pt-28 pb-16 lg:grid-cols-12 lg:gap-6 lg:pt-24 lg:pb-12">
        <div className="relative z-10 lg:col-span-5 xl:col-span-5">
          <p className="eyebrow text-keaas">Experts as a Service (EaaS)</p>
          <h1
            id="hero-heading"
            className="display mt-6 text-[4.1rem] text-white sm:text-[5.6rem] lg:text-[6.6rem] xl:text-[7.2rem]"
          >
            Expertise
            <br />
            <span className="text-keaas">Delivered.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-8 text-white/60">
            On-demand functional &amp; technical experts for System Integrators
            worldwide.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/approach">How KEAAS works</Button>
            <Button href="/contact" variant="ghost">
              Talk to us
            </Button>
          </div>
        </div>

        <div className="relative h-[460px] sm:h-[520px] lg:col-span-7 lg:h-[min(78vh,760px)] xl:col-span-7">
          <EarthGlobe />
        </div>
      </Container>
    </section>
  );
}
