import Image from "next/image";
import { Button, Container, Reveal } from "@/components/ui";
import { outcomes } from "@/lib/data";

export function Partners() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="bg-ink text-white"
    >
      <Container className="grid items-center gap-16 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-6">
          <Reveal>
            <h2
              id="partners-heading"
              className="display text-4xl sm:text-5xl md:text-6xl"
            >
              Your Trusted
              <br />
              Growth Partner
            </h2>
            <p className="mt-8 max-w-md text-base leading-8 text-white/65">
              We partner with System Integrators to extend delivery capacity,
              access specialized expertise and accelerate project outcomes.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-0 sm:grid-cols-2">
            {outcomes.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article
                  className={`border-white/12 py-6 ${
                    i % 2 === 0 ? "sm:pr-8" : "sm:border-l sm:pl-8"
                  } ${i < 2 ? "border-b" : ""}`}
                >
                  <h3 className="text-[0.72rem] leading-5 font-medium tracking-[0.14em] uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/contact" variant="light">
              Partner with KEAAS
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/collaboration.jpg"
                alt="Senior delivery partners confirming a KEAAS engagement"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <svg
                viewBox="0 0 100 75"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M8 62 Q 28 20 52 38 T 94 18"
                  fill="none"
                  stroke="#b40000"
                  strokeWidth="0.35"
                  opacity="0.7"
                />
                <path
                  d="M12 20 Q 40 48 70 30 T 96 52"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.25"
                  opacity="0.35"
                />
                <circle cx="52" cy="38" r="1.2" fill="#b40000" />
                <circle cx="28" cy="28" r="0.8" fill="#ffffff" />
                <circle cx="70" cy="30" r="0.8" fill="#b40000" />
              </svg>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
