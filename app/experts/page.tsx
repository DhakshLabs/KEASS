import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, PageIntro, Reveal } from "@/components/ui";
import { experts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Experts",
};

export default function ExpertsPage() {
  return (
    <>
      <PageIntro eyebrow="Our Experts" title="Experienced. Verified. Reliable.">
        A sample of the functional and technical bench System Integrators draw
        from. Every expert is screened for skill, enterprise exposure and
        cultural fit.
      </PageIntro>
      <Container className="grid gap-x-10 gap-y-16 py-20 md:grid-cols-2 lg:grid-cols-3">
        {experts.map((expert, i) => (
          <Reveal key={expert.slug} delay={i * 0.05}>
            <article>
              <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                <Image
                  src={expert.image}
                  alt={`${expert.name}, ${expert.role}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 50vw"
                />
              </div>
              <p className="mt-5 text-[0.68rem] tracking-[0.16em] text-keaas uppercase">
                {expert.role} · {expert.experience}
              </p>
              <h2 className="mt-2 text-2xl tracking-tight text-ink">
                {expert.name}
              </h2>
              <p className="mt-2 text-sm text-muted">{expert.specialization}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{expert.summary}</p>
              <p className="mt-3 text-xs tracking-[0.12em] text-muted uppercase">
                {expert.location}
              </p>
            </article>
          </Reveal>
        ))}
      </Container>
      <Container className="pb-24">
        <Button href="/contact">Request an expert</Button>
      </Container>
    </>
  );
}
