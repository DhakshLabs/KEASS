import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, PageIntro, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "About KEAAS",
  description:
    "KEAAS is an Experts-as-a-Service partner delivering on-demand functional and technical expertise to System Integrators.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About KEAAS" title="Knowledge & Expertise as a Service">
        A premium B2B technology expertise partner that becomes an extension of
        System Integrators’ delivery teams.
      </PageIntro>

      <Container className="grid gap-14 py-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image
              src="/images/about-office.jpg"
              alt="KEAAS delivery room"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="text-lg leading-8 text-ink-2">
            KEAAS exists for a precise reason: System Integrators are asked to
            deliver more specialised work, on tighter plans, with benches that
            cannot hold every scarce skill permanently.
          </p>
          <p className="mt-6 text-base leading-8 text-muted">
            We are not a staffing firm. We do not send generalists into live
            programmes and hope they learn the landscape. We place curated
            functional and technical experts who have already delivered inside
            enterprise ecosystems — and we hold ourselves to the same operating
            discipline as the SI partner they join.
          </p>
          <p className="mt-6 text-base leading-8 text-muted">
            The result is quiet: workstreams move, risk reduces, and the client
            never feels the seam between your team and ours.
          </p>
          <div className="mt-10">
            <Button href="/contact">Talk to us</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
