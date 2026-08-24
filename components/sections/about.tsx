import Image from "next/image";
import { Button, Container, Eyebrow, Reveal } from "@/components/ui";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-paper"
    >
      <Container className="grid items-end gap-14 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5 lg:pb-8">
          <Reveal>
            <Eyebrow>About KEAAS</Eyebrow>
            <h2
              id="about-heading"
              className="display mt-5 text-4xl text-ink sm:text-5xl md:text-[3.4rem]"
            >
              Knowledge &amp; Expertise
              <br />
              as a Service
            </h2>
            <p className="mt-8 max-w-md text-base leading-8 text-muted">
              KEAAS (Knowledge &amp; Expertise as a Service) is an
              Experts-as-a-Service company delivering on-demand functional and
              technical expertise to System Integrators.
            </p>
            <p className="mt-5 max-w-md text-base leading-8 text-muted">
              We integrate seamlessly with your teams to accelerate delivery,
              reduce risk and maximize value.
            </p>
            <div className="mt-10">
              <Button href="/about">Discover KEAAS</Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <figure>
              <div className="img-reveal relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src="/images/about-office.jpg"
                  alt="KEAAS delivery room in a premium enterprise office"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
              <figcaption className="mt-5 border-t border-line pt-5">
                <p className="max-w-xl text-sm leading-6 text-ink-2">
                  System Integrators do not need more résumés. They need
                  expertise that can sit inside a live programme and move it.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
