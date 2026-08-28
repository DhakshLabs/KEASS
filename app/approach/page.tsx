import type { Metadata } from "next";
import { Button, Container, PageIntro } from "@/components/ui";
import { Process } from "@/components/sections/process";

export const metadata: Metadata = {
  title: "Approach",
};

export default function ApproachPage() {
  return (
    <>
      <PageIntro eyebrow="Approach" title="More than resources. A true partner.">
        Partner in progress — eight stages from requirement gathering to weekly
        quality governance.
      </PageIntro>
      <Process hideTitle />
      <Container className="pb-24">
        <Button href="/contact">Start a conversation</Button>
      </Container>
    </>
  );
}
