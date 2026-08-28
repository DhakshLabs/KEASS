import Image from "next/image";
import { Button, Container, Eyebrow, Reveal } from "@/components/ui";
import { aboutIntro, aboutStats } from "@/lib/data";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-paper">
      <Container className="py-20 md:py-24 lg:py-32">
        <div className="grid items-end gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
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
              <p className="mt-8 max-w-xl text-base leading-8 text-muted">
                {aboutIntro}
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                KEAAS provides specialist SAP talent and complete delivery teams
                to System Integrators. We integrate with your teams to
                accelerate delivery, reduce risk and maximise value.
              </p>
              <div className="mt-10">
                <Button href="/about">Discover KEAAS</Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <figure>
                <div className="img-reveal relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src="/images/about-office.jpg"
                    alt="Indian professionals reviewing SAP delivery work in a premium enterprise office"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:mt-24 lg:grid-cols-5">
          {aboutStats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 0.05}>
              <article className="flex h-full flex-col bg-paper px-6 py-8">
                <p className="display text-4xl text-keaas sm:text-5xl">{stat.value}</p>
                <h3 className="mt-4 text-sm font-medium leading-6 tracking-tight text-ink">
                  {stat.title}
                </h3>
                {"subtitle" in stat && stat.subtitle ? (
                  <p className="mt-1 text-sm leading-6 text-ink-2">{stat.subtitle}</p>
                ) : null}
                {"items" in stat && stat.items ? (
                  <ul className="mt-4 space-y-1.5">
                    {stat.items.map((item) => (
                      <li key={item} className="text-xs leading-5 text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <p className="mt-auto pt-6 text-[0.65rem] tracking-[0.16em] text-keaas uppercase">
                  {stat.tagline}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
