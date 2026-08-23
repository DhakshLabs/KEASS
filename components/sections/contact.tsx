import { Container } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-keaas text-white"
    >
      <div className="network-grid pointer-events-none absolute inset-0 opacity-40" />
      <svg
        viewBox="0 0 100 60"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        aria-hidden="true"
      >
        <path
          d="M4 48 Q 22 10 48 28 T 98 12"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.18"
        />
        <path
          d="M2 18 Q 30 40 58 22 T 99 44"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.14"
        />
        <circle cx="48" cy="28" r="0.7" fill="#ffffff" />
        <circle cx="22" cy="20" r="0.5" fill="#ffffff" />
        <circle cx="78" cy="18" r="0.5" fill="#ffffff" />
      </svg>

      <Container className="relative grid gap-14 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <h2
            id="contact-heading"
            className="display text-4xl sm:text-5xl md:text-6xl"
          >
            Let&apos;s Build Something
            <br />
            Great Together.
          </h2>
          <p className="mt-8 max-w-md text-base leading-8 text-white/70">
            Tell us about your project and discover how KEAAS can help.
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
