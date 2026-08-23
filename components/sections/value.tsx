import { Container, Reveal } from "@/components/ui";
import { propositions } from "@/lib/data";

const marks = [
  <svg key="agile" viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
    <path d="M6 16h20M21 10l5 6-5 6" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>,
  <svg key="int" viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
    <circle cx="10" cy="16" r="3.2" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="22" cy="16" r="3.2" fill="none" stroke="currentColor" strokeWidth="1" />
    <path d="M13.2 16h5.6" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>,
  <svg key="glob" viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
    <circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
    <path d="M8 16h16M16 8c3 3 3 13 0 16M16 8c-3 3-3 13 0 16" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>,
  <svg key="trust" viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
    <path d="M16 6 26 10v7c0 6.2-4.4 9.6-10 11-5.6-1.4-10-4.8-10-11v-7L16 6Z" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>,
  <svg key="res" viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
    <path d="M7 22 13 14l5 5 7-11" fill="none" stroke="currentColor" strokeWidth="1" />
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
              <div className="flex items-start justify-between">
                <span className="text-[0.68rem] tracking-[0.2em] text-white/55">
                  {item.id}
                </span>
                <span className="text-white/80">{marks[i]}</span>
              </div>
              <h3 className="mt-8 text-sm font-medium tracking-[0.18em] uppercase">
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
