import { Button, Container } from "@/components/ui";
import { WorldMap } from "@/components/world-map";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-paper"
    >
      <Container className="grid min-h-[100svh] items-center gap-12 pt-28 pb-16 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-20">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="eyebrow text-keaas">Experts as a Service (EaaS)</p>
          <h1
            id="hero-heading"
            className="display mt-6 text-[4.1rem] text-ink sm:text-[5.6rem] lg:text-[6.6rem] xl:text-[7.2rem]"
          >
            Expertise
            <br />
            <span className="text-keaas">Delivered.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-8 text-muted">
            On-demand functional &amp; technical experts for System Integrators
            worldwide.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/approach">How KEAAS works</Button>
            <Button href="/contact" variant="secondary">
              Talk to us
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-7">
          <WorldMap />
        </div>
      </Container>
    </section>
  );
}
