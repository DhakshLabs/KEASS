import Image from "next/image";
import { Container } from "@/components/ui";
import { clients } from "@/lib/data";

export function ClientLogos() {
  return (
    <section aria-label="Selected clients" className="border-y border-line bg-paper">
      <Container className="grid grid-cols-2 py-5 sm:grid-cols-3 sm:py-7 lg:grid-cols-6">
        {clients.map((client) => {
          const hasTestimonial = "testimonial" in client;

          return (
            <figure
              key={client.name}
              className="group relative flex h-24 items-center justify-center border-line px-5 sm:h-28 sm:px-7 lg:border-l lg:first:border-l-0"
              tabIndex={hasTestimonial ? 0 : undefined}
            >
              <Image
                src={client.src}
                alt={client.name}
                width={260}
                height={120}
                className="max-h-14 w-auto max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-focus:scale-105 sm:max-h-16"
              />
              {hasTestimonial ? (
                <figcaption
                  className="pointer-events-none absolute bottom-[calc(100%-0.35rem)] left-1/2 z-20 w-72 -translate-x-1/2 translate-y-2 border border-line bg-ink px-5 py-4 text-left text-sm leading-6 text-white opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100"
                >
                  <span className="text-keaas">“</span>
                  {client.testimonial}
                  <span className="text-keaas">”</span>
                  <span className="mt-2 block text-[0.65rem] tracking-[0.14em] text-white/60 uppercase">
                    {client.name}
                  </span>
                </figcaption>
              ) : null}
            </figure>
          );
        })}
      </Container>
    </section>
  );
}
