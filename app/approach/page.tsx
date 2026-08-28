import type { Metadata } from "next";
import { Button, Container, PageIntro } from "@/components/ui";
import { Process } from "@/components/sections/process";

export const metadata: Metadata = {
  title: "Approach",
};

export default function ApproachPage() {
  return (
    <>
      <PageIntro eyebrow="Approach" title="More than resources. A true extension.">
        Eight stages from requirement gathering to weekly quality governance —
        designed for the way System Integrators actually run programmes.
      </PageIntro>
      <Process hideTitle />
      <Container className="pb-24">
        <Button href="/contact">Start a conversation</Button>
      </Container>
    </>
  );
}
