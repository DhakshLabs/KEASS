import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, PageIntro, Reveal } from "@/components/ui";
import { aboutIntro, aboutStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About KEAAS",
  description:
    "KEAAS provides specialist SAP talent and complete delivery teams to System Integrators.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About KEAAS" title="Knowledge & Expertise as a Service">
        {aboutIntro}
      </PageIntro>

      <Container className="grid gap-14 py-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image
              src="/images/about-expertise.jpg"
              alt="SAP consultants collaborating around a table as a delivery team"
              fill
              className="object-cover object-[50%_30%]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="text-lg leading-8 text-ink-2">
            KEAAS exists for a precise reason: System Integrators are asked to
            deliver more specialised SAP work, on tighter plans, with benches
            that cannot hold every scarce skill permanently.
          </p>
          <p className="mt-6 text-base leading-8 text-muted">
            KEAAS staffs System Integrator programmes with curated SAP
            specialists — or complete teams — that have already delivered
            inside enterprise ecosystems. We hold ourselves to the same
            operating discipline as the SI partner they join.
          </p>
          <p className="mt-6 text-base leading-8 text-muted">
            Local presence, global expertise. The result is quiet: workstreams
            move, risk reduces, and the client never feels the seam between
            your team and ours.
          </p>
          <div className="mt-10">
            <Button href="/contact">Talk to us</Button>
          </div>
        </div>
      </Container>

      <section className="border-t border-line bg-mist">
        <Container className="py-20">
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {aboutStats.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 0.05}>
                <article className="flex h-full flex-col bg-paper px-6 py-8">
                  <p className="display text-4xl text-keaas sm:text-5xl">
                    {stat.value}
                  </p>
                  <h2 className="mt-4 text-sm font-medium leading-6 tracking-tight text-ink">
                    {stat.title}
                  </h2>
                  {"subtitle" in stat && stat.subtitle ? (
                    <p className="mt-1 text-sm leading-6 text-ink-2">
                      {stat.subtitle}
                    </p>
                  ) : null}
                  {"items" in stat && stat.items ? (
                    <ul className="mt-4 space-y-1.5">
                      {stat.items.map((item) => (
                        <li key={item} className="text-xs leading-5 text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <p className="mt-auto pt-6 text-[0.65rem] tracking-[0.16em] text-keaas uppercase">
                    {stat.tagline}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
