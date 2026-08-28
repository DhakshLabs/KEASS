import type { Metadata } from "next";
import { Container, PageIntro, Reveal } from "@/components/ui";
import { testimonials, whyOutcomes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why KEAAS",
  description:
    "How KEAAS improves SAP operating costs, productivity and ROI for System Integrators and their clients.",
};

export default function WhyPage() {
  return (
    <>
      <PageIntro eyebrow="Why KEAAS" title="How we improve client outcomes.">
        Reduce SAP operating cost, free internal teams, and accelerate return
        on SAP investment — with experts who already know the work.
      </PageIntro>

      <Container className="py-20">
        <ol className="divide-y divide-line border-y border-line">
          {whyOutcomes.map((item, i) => (
            <Reveal key={item.stat} delay={i * 0.04}>
              <li className="py-10">
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-lg leading-8 text-ink-2 sm:text-xl md:text-2xl">
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
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>

      <section className="border-t border-line bg-mist">
        <Container className="py-20">
          <Reveal>
            <h2 className="display max-w-3xl text-3xl text-ink sm:text-4xl md:text-5xl">
              From the programmes we join.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {testimonials.map((item, i) => (
              <Reveal key={`${item.company}-${i}`} delay={i * 0.05}>
                <blockquote className="h-full border-t border-line pt-8">
                  <p className="text-base leading-8 text-ink-2">“{item.quote}”</p>
                  <footer className="mt-6">
                    <p className="text-[0.68rem] tracking-[0.16em] text-keaas uppercase">
                      {item.company}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.role}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
