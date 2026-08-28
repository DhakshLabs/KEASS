import Link from "next/link";
import { Network, User, Users } from "lucide-react";
import { Button, Container, Eyebrow, Reveal } from "@/components/ui";
import { services } from "@/lib/data";

const marks = [
  <User key="solo" strokeWidth={1.5} className="h-7 w-7" aria-hidden="true" />,
  <Users key="pod" strokeWidth={1.5} className="h-7 w-7" aria-hidden="true" />,
  <Network key="swat" strokeWidth={1.5} className="h-7 w-7" aria-hidden="true" />,
];

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
            Expertise, shaped
            <br />
            to the work.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            Individual SAP experts, compact client pods, or a senior task force
            — each delivery type is built to sit inside a System Integrator
            programme, not beside it.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <article className="flex h-full flex-col border border-line bg-paper p-8 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center border border-line text-keaas">
                  {marks[i]}
                </div>
                <p className="mt-8 text-[0.68rem] tracking-[0.2em] text-keaas">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-xl tracking-tight text-ink">
                  {service.title}
                </h3>
                <ul className="mt-6 flex-1 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="border-l border-keaas/40 pl-4 text-sm leading-6 text-muted"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-8 inline-flex text-[0.7rem] tracking-[0.16em] text-ink uppercase transition-colors hover:text-keaas"
                >
                  View delivery type
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/contact">Request a delivery type</Button>
        </div>
      </Container>
    </section>
  );
}
