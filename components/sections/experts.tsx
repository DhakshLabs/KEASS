import { Button, Container, Eyebrow, Reveal } from "@/components/ui";
import { experts } from "@/lib/data";

export function Experts() {
  return (
    <section
      id="experts"
      aria-labelledby="experts-heading"
      className="bg-mist"
    >
      <Container className="py-20 md:py-24 lg:py-32">
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

        <ol className="mt-16 divide-y divide-line border-y border-line">
          {experts.map((expert, i) => (
            <Reveal key={expert.slug} delay={i * 0.04}>
              <li className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline">
                <p className="min-w-0 text-xs tracking-[0.18em] text-keaas md:col-span-2">
                  0{i + 1}
                </p>
                <h3 className="min-w-0 break-words text-xl tracking-tight text-ink md:col-span-3">
                  {expert.role}
                </h3>
                <p className="min-w-0 break-words text-sm text-muted md:col-span-4">
                  {expert.specialization}
                </p>
                <p className="min-w-0 break-words text-sm text-muted md:col-span-3 lg:text-right">
                  {expert.experience}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-10">
          <Button href="/experts">View all experts</Button>
        </div>
      </Container>
    </section>
  );
}
