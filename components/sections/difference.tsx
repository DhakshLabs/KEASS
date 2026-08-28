import { Container, Reveal } from "@/components/ui";
import { process } from "@/lib/data";

export function Difference() {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="bg-mist"
    >
      <Container className="py-20 md:py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <h2
            id="difference-heading"
            className="display text-4xl text-ink sm:text-5xl md:text-6xl"
          >
            More Than Resources.
            <br />
            A True Extension.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            Eight steps from the first requirement to weekly quality governance
            — the operating system System Integrators actually run.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.id} delay={(i % 4) * 0.06}>
              <li className="relative flex h-full flex-col border-t border-keaas pt-6">
                <p className="h-12 text-[2.4rem] leading-none font-light tracking-tight text-keaas tabular-nums">
                  {step.id}
                </p>
                <h3 className="mt-6 text-[0.72rem] leading-5 tracking-[0.14em] text-ink uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.copy}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
