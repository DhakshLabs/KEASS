import type { Metadata } from "next";
import { Container, PageIntro, Reveal } from "@/components/ui";
import { differences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why KEAAS",
};

export default function WhyPage() {
  return (
    <>
      <PageIntro eyebrow="Why KEAAS" title="More than resources. A true extension.">
        Five disciplines that separate an expert partner from a capacity
        supplier.
      </PageIntro>
      <Container className="py-20">
        <ol className="divide-y divide-line border-y border-line">
          {differences.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04}>
              <li className="grid gap-4 py-10 md:grid-cols-12">
                <p className="text-sm tracking-[0.18em] text-keaas md:col-span-2">
                  {item.id}
                </p>
                <h2 className="text-2xl tracking-tight text-ink md:col-span-4">
                  {item.title}
                </h2>
                <p className="text-base leading-7 text-muted md:col-span-6">
                  {item.copy}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </>
  );
}
