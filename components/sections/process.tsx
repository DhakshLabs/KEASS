import { Container, Reveal } from "@/components/ui";
import { process } from "@/lib/data";

export function Process({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <section
      id="how-we-work"
      aria-labelledby={hideTitle ? undefined : "process-heading"}
      className="bg-paper"
    >
      <Container className={hideTitle ? "pb-8 lg:pb-12" : "py-20 md:py-24 lg:py-32"}>
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

        <Reveal className={hideTitle ? "mt-4" : "mt-16 lg:mt-24"}>
          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {process.map((step) => (
              <li key={step.id} className="flex flex-col border-t border-keaas pt-6">
                <p className="h-12 text-[2.6rem] leading-none font-light tracking-tight text-keaas tabular-nums">
                  {step.id}
                </p>
                <h3 className="mt-6 text-[0.72rem] tracking-[0.18em] text-ink uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.copy}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
