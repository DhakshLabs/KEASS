import { Container, Reveal } from "@/components/ui";
import { process } from "@/lib/data";

export function Process({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <section
      id="how-we-work"
      aria-labelledby={hideTitle ? undefined : "process-heading"}
      className="bg-paper"
    >
      <Container className={hideTitle ? "pb-8 lg:pb-12" : "py-24 lg:py-32"}>
        {hideTitle ? null : (
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
        )}

        <div className={`relative ${hideTitle ? "mt-4" : "mt-16 lg:mt-24"}`}>
          <div className="absolute top-3 right-0 left-0 hidden h-px bg-keaas lg:block" />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-0">
            {process.map((step, i) => (
              <Reveal key={step.id} delay={i * 0.08}>
                <li className="relative flex h-full flex-col border-l border-keaas py-2 pl-7 lg:border-l-0 lg:px-5 lg:pt-10">
                  <span className="absolute top-3 left-0 h-2.5 w-2.5 -translate-x-1.5 rounded-full bg-keaas lg:top-0 lg:left-5 lg:translate-x-0 lg:-translate-y-1.5" />
                  <p className="text-[2.4rem] leading-none font-light tracking-tight text-keaas">
                    {step.id}
                  </p>
                  <h3 className="mt-5 min-h-[2.5rem] text-[0.72rem] tracking-[0.18em] text-ink uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {step.copy}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
