import { Container, Reveal } from "@/components/ui";
import { propositions } from "@/lib/data";

const marks = [
  <svg key="agile" viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
    <path d="M8 24h32M32 14l10 10-10 10" fill="none" stroke="currentColor" strokeWidth="2.2" />
  </svg>,
  <svg key="int" viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
    <circle cx="15" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="33" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="2.2" />
    <path d="M21 24h6" fill="none" stroke="currentColor" strokeWidth="2.2" />
  </svg>,
  <svg key="glob" viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
    <circle cx="24" cy="24" r="13" fill="none" stroke="currentColor" strokeWidth="2.2" />
    <path d="M11 24h26M24 11c5 5 5 21 0 26M24 11c-5 5-5 21 0 26" fill="none" stroke="currentColor" strokeWidth="2.2" />
  </svg>,
  <svg key="trust" viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
    <path d="M24 8 40 14v11c0 10-7 16-16 18-9-2-16-8-16-18V14L24 8Z" fill="none" stroke="currentColor" strokeWidth="2.2" />
  </svg>,
  <svg key="res" viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
    <path d="M10 34 20 20l8 8 10-18" fill="none" stroke="currentColor" strokeWidth="2.2" />
  </svg>,
];

export function Value() {
  return (
    <section
      id="value"
      aria-labelledby="value-heading"
      className="bg-keaas text-white"
    >
      <Container className="py-20 md:py-24">
        <Reveal>
          <h2
            id="value-heading"
            className="display max-w-4xl text-3xl sm:text-4xl md:text-5xl"
          >
            Built for the way expertise is delivered today.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-0 md:grid-cols-5">
          {propositions.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.06}
              className="border-white/20 py-8 md:border-l md:px-6 md:py-2 md:first:border-l-0 lg:px-8"
            >
              <div className="flex flex-col gap-6">
                <span className="text-white">{marks[i]}</span>
                <span className="text-[0.68rem] tracking-[0.2em] text-white/55">
                  {item.id}
                </span>
              </div>
              <h3 className="mt-6 text-sm font-medium tracking-[0.18em] uppercase">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[16rem] text-sm leading-6 text-white/75">
                {item.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
