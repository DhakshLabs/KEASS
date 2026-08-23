import { Container, Reveal } from "@/components/ui";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="process-heading"
      className="bg-paper"
    >
      <Container className="py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <h2
            id="process-heading"
            className="display text-4xl text-ink sm:text-5xl md:text-6xl"
          >
            Simple. Transparent.
            <br />
            Effective.
          </h2>
        </Reveal>

        <div className="relative mt-16 lg:mt-24">
          <div className="absolute top-3 right-0 left-0 hidden h-px bg-keaas lg:block" />

          <ol className="grid gap-0 lg:grid-cols-5">
            {process.map((step, i) => (
              <Reveal key={step.id} delay={i * 0.08}>
                <li className="relative border-l border-keaas py-8 pl-7 lg:border-l-0 lg:border-t-0 lg:px-5 lg:pt-12 lg:pb-0">
                  <span className="absolute top-8 left-0 h-3 w-3 -translate-x-1.5 rounded-full bg-keaas lg:top-0 lg:left-5 lg:translate-x-0 lg:-translate-y-1.5" />
                  <p className="text-[0.68rem] tracking-[0.2em] text-keaas">
                    {step.id} {step.title}
                  </p>
                  <p className="mt-5 max-w-[16rem] text-sm leading-6 text-muted">
                    {step.copy}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-8 hidden text-7xl font-light tracking-tight text-ink/[0.05] lg:block"
                  >
                    {step.id}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
