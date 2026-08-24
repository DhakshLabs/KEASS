import Image from "next/image";
import { Button, Container, Reveal } from "@/components/ui";
import { leaders } from "@/lib/data";

export function Leadership() {
  const [ceo, ...rest] = leaders;

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="bg-paper"
    >
      <Container className="grid items-start gap-14 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <Reveal>
            <h2
              id="leadership-heading"
              className="display text-4xl text-ink sm:text-5xl md:text-6xl"
            >
              Vision. Experience.
              <br />
              Commitment.
            </h2>
            <p className="mt-8 max-w-md text-base leading-8 text-muted">
              Our leadership team brings decades of experience in technology,
              consulting and enterprise delivery.
            </p>
            <div className="mt-10">
              <Button href="/leadership">Meet the leadership</Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <article className="group grid gap-6 border-b border-line pb-10 sm:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                <Image
                  src={ceo.image}
                  alt={`${ceo.name}, ${ceo.role}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 640px) 28vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-[0.68rem] tracking-[0.18em] text-keaas uppercase">
                  {ceo.role}
                </p>
                <h3 className="mt-3 text-3xl tracking-tight text-ink">
                  {ceo.name}
                </h3>
                <p className="mt-5 text-sm leading-7 text-muted">
                  “{ceo.statement}”
                </p>
              </div>
            </article>
          </Reveal>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {rest.map((leader, i) => (
              <Reveal key={leader.slug} delay={i * 0.06}>
                <li>
                  <article className="group flex gap-4">
                    <div className="relative h-28 w-20 shrink-0 overflow-hidden bg-mist">
                      <Image
                        src={leader.image}
                        alt={`${leader.name}, ${leader.role}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="80px"
                      />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg tracking-tight text-ink">
                        {leader.name}
                      </h3>
                      <p className="mt-1 text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                        {leader.role}
                      </p>
                    </div>
                  </article>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
