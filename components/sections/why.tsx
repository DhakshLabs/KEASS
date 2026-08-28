import Image from "next/image";
import { Button, Container, Eyebrow, Reveal } from "@/components/ui";
import { testimonials, whyOutcomes } from "@/lib/data";

export function Why() {
  return (
    <section id="why-keaas" aria-labelledby="why-heading" className="bg-paper">
      <Container className="py-20 md:py-24 lg:py-32">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Why KEAAS</Eyebrow>
            <h2
              id="why-heading"
              className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl"
            >
              How we improve
              <br />
              client outcomes.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <p className="max-w-md text-base leading-8 text-muted">
              Measured SAP operating improvement — cost, productivity and time
              to value — delivered by experts who already know the landscape.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 divide-y divide-line border-y border-line">
          {whyOutcomes.map((item, i) => (
            <Reveal key={item.stat} delay={i * 0.06}>
              <p className="flex flex-wrap items-baseline gap-x-3 gap-y-2 py-8 text-lg leading-8 text-ink-2 sm:text-xl sm:leading-9 md:py-10 md:text-2xl">
                {item.lead ? (
                  <strong className="font-semibold text-ink">{item.lead}</strong>
                ) : null}
                <span>{item.rest}</span>
                {item.emphasis ? (
                  <strong className="font-semibold text-ink">{item.emphasis}</strong>
                ) : null}
                {item.mid ? <span>{item.mid}</span> : null}
                <span className="display text-5xl text-keaas sm:text-6xl md:text-7xl">
                  {item.stat}
                </span>
                <span>{item.trail}</span>
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid items-start gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-mist sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/images/indian-professional.jpg"
                alt="Indian SAP delivery professional in an enterprise office"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="text-[0.7rem] tracking-[0.2em] text-keaas uppercase">
                From the programmes we join
              </h3>
            </Reveal>
            <div className="mt-8 space-y-8">
              {testimonials.map((item, i) => (
                <Reveal key={`${item.company}-${i}`} delay={i * 0.05}>
                  <blockquote className="border-t border-line pt-8">
                    <p className="text-base leading-7 text-ink-2">“{item.quote}”</p>
                    <footer className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p className="text-[0.68rem] tracking-[0.16em] text-keaas uppercase">
                        {item.company}
                      </p>
                      <p className="text-sm text-muted">{item.role}</p>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
            <div className="mt-10">
              <Button href="/why-keaas">Why KEAAS</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
