import type { Metadata } from "next";
import { Button, Container, PageIntro, Reveal } from "@/components/ui";
import { experts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Experts",
};

export default function ExpertsPage() {
  return (
    <>
      <PageIntro eyebrow="Our Experts" title="Experienced. Verified. Reliable.">
        Functional and technical disciplines System Integrators draw from.
        Every expert is screened for skill, enterprise exposure and cultural
        fit.
      </PageIntro>
      <Container className="py-20">
        <ol className="divide-y divide-line border-y border-line">
          {experts.map((expert, i) => (
            <Reveal key={expert.slug} delay={i * 0.04}>
              <li className="grid gap-4 py-10 md:grid-cols-12 md:items-baseline">
                <p className="w-10 text-sm tracking-[0.18em] text-keaas tabular-nums md:col-span-2">
                  0{i + 1}
                </p>
                <div className="md:col-span-4">
                  <h2 className="text-2xl tracking-tight text-ink">{expert.role}</h2>
                  <p className="mt-2 text-sm text-muted">{expert.experience}</p>
                </div>
                <div className="md:col-span-6">
                  <p className="text-sm tracking-[0.08em] text-ink-2 uppercase">
                    {expert.specialization}
                  </p>
                  <p className="mt-3 text-base leading-7 text-muted">
                    {expert.summary}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
      <Container className="pb-24">
        <Button href="/contact">Request an expert</Button>
      </Container>
    </>
  );
}
