import type { Metadata } from "next";
import Image from "next/image";
import { Container, PageIntro, Reveal } from "@/components/ui";
import { leaders } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leadership",
};

export default function LeadershipPage() {
  return (
    <>
      <PageIntro eyebrow="Leadership" title="Vision. Experience. Commitment.">
        Our leadership team brings decades of experience in technology,
        consulting and enterprise delivery.
      </PageIntro>
      <Container className="py-20">
        <ul className="space-y-16">
          {leaders.map((leader, i) => (
            <Reveal key={leader.slug} delay={i * 0.04}>
              <li className="grid items-center gap-8 border-b border-line pb-16 last:border-0 md:grid-cols-12">
                <div className="relative aspect-[3/4] overflow-hidden bg-mist md:col-span-3">
                  <Image
                    src={leader.image}
                    alt={`${leader.name}, ${leader.role}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 22vw, 100vw"
                  />
                </div>
                <div className="md:col-span-8 md:col-start-5">
                  <p className="text-[0.68rem] tracking-[0.18em] text-keaas uppercase">
                    {leader.role}
                  </p>
                  <h2 className="mt-3 text-3xl tracking-tight text-ink">
                    {leader.name}
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                    “{leader.statement}”
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </>
  );
}
