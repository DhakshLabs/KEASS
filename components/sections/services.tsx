import Link from "next/link";
import { ArrowRight, Network, User, Users } from "lucide-react";
import { Button, Container, Eyebrow, Reveal } from "@/components/ui";
import { services } from "@/lib/data";

const marks = [
  <User key="solo" strokeWidth={1.5} className="h-8 w-8" aria-hidden="true" />,
  <Users key="pod" strokeWidth={1.5} className="h-8 w-8" aria-hidden="true" />,
  <Network key="swat" strokeWidth={1.5} className="h-8 w-8" aria-hidden="true" />,
];

const skins = [
  "bg-paper text-ink border-line hover:border-keaas",
  "bg-ink text-white border-ink hover:bg-[#1a1a1a]",
  "bg-keaas text-white border-keaas hover:bg-keaas-deep",
] as const;

const muted = ["text-muted", "text-white/70", "text-white/80"] as const;
const accent = ["text-keaas", "text-white/55", "text-white/70"] as const;
const iconWrap = [
  "border-line text-keaas",
  "border-white/20 text-white",
  "border-white/25 text-white",
] as const;
const rule = ["border-keaas/35", "border-white/20", "border-white/25"] as const;

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-mist">
      <Container className="py-20 md:py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <Eyebrow>Delivery types</Eyebrow>
          <h2
            id="services-heading"
            className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl"
          >
            Access the right
            <br />
            expertise.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            KEAAS staffs System Integrator programmes with individual SAP
            specialists, compact client pods, or a senior task force — the
            capability you need, without a permanent bench.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08} className="h-full">
              <article
                className={`relative flex h-full flex-col overflow-hidden border p-8 transition-colors duration-300 lg:min-h-[520px] lg:p-10 ${skins[i]} ${
                  i === 1 ? "lg:-translate-y-3 lg:shadow-[0_24px_60px_rgba(0,0,0,0.12)]" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-6 right-4 display text-[7.5rem] leading-none ${accent[i]} opacity-30`}
                >
                  0{i + 1}
                </span>
                <div
                  className={`relative flex h-16 w-16 items-center justify-center border ${iconWrap[i]}`}
                >
                  {marks[i]}
                </div>
                <p className={`relative mt-10 text-[0.68rem] tracking-[0.2em] uppercase ${accent[i]}`}>
                  {service.hook}
                </p>
                <h3 className="relative mt-3 text-2xl tracking-tight">
                  {service.title}
                </h3>
                <ul className="relative mt-8 flex-1 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className={`border-l pl-4 text-sm leading-6 ${rule[i]} ${muted[i]}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative mt-10 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.16em] uppercase ${
                    i === 0 ? "text-ink hover:text-keaas" : "text-white"
                  }`}
                >
                  Staff this way
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/contact">Request experts</Button>
        </div>
      </Container>
    </section>
  );
}
