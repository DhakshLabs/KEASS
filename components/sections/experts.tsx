import Image from "next/image";
import { Button, Container, Eyebrow, Reveal } from "@/components/ui";
import { experts } from "@/lib/data";

export function Experts() {
  const [featured, ...rest] = experts;

  return (
    <section
      id="experts"
      aria-labelledby="experts-heading"
      className="bg-mist"
    >
      <Container className="py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <Eyebrow>Our Experts</Eyebrow>
          <h2
            id="experts-heading"
            className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl"
          >
            Experienced. Verified.
            <br />
            Reliable.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <article className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-paper">
                <Image
                  src={featured.image}
                  alt={`${featured.name}, ${featured.role}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm tracking-[0.16em] text-keaas uppercase">
                    {featured.role}
                  </p>
                  <h3 className="mt-2 text-2xl tracking-tight text-ink">
                    {featured.name}
                  </h3>
                </div>
                <p className="text-sm text-muted">{featured.experience}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                {featured.specialization}
              </p>
            </article>
          </Reveal>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {rest.map((expert, i) => (
                <Reveal key={expert.slug} delay={i * 0.05}>
                  <li>
                    <article className="group grid grid-cols-[88px_1fr] items-center gap-5 py-6 md:grid-cols-[110px_1fr_auto]">
                      <div className="relative aspect-[3/4] overflow-hidden bg-paper">
                        <Image
                          src={expert.image}
                          alt={`${expert.name}, ${expert.role}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          sizes="110px"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg tracking-tight text-ink">
                          {expert.name}
                        </h3>
                        <p className="mt-1 text-[0.7rem] tracking-[0.16em] text-keaas uppercase">
                          {expert.role}
                        </p>
                        <p className="mt-2 text-sm text-muted">
                          {expert.specialization}
                        </p>
                      </div>
                      <p className="hidden text-sm text-muted md:block">
                        {expert.experience}
                      </p>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/experts">View all experts</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
