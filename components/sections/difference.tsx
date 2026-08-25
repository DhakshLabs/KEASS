import { Container, Reveal } from "@/components/ui";
import { differences } from "@/lib/data";

export function Difference() {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="bg-mist"
    >
      <Container className="py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <h2
            id="difference-heading"
            className="display text-4xl text-ink sm:text-5xl md:text-6xl"
          >
            More Than Resources.
            <br />
            A True Extension.
          </h2>
        </Reveal>

        <div className="relative mt-14 sm:mt-20">
          <div
            className="pointer-events-none absolute top-[42%] right-[4%] left-[4%] hidden h-px bg-keaas/25 lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {differences.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.07} className="flex justify-center">
                <li className="relative flex w-full max-w-[230px] flex-col items-center text-center">
                  <article className="group relative">
                    <div className="hex mx-auto flex h-[210px] w-[190px] flex-col items-center justify-center bg-paper px-7 shadow-[0_0_0_1px_#e6e6e6] transition-transform duration-300 group-hover:-translate-y-1.5">
                      <span className="text-[0.65rem] tracking-[0.22em] text-keaas">
                        {item.id}
                      </span>
                      <h3 className="mt-3 text-[0.8rem] leading-5 font-medium tracking-[0.12em] text-ink uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[0.78rem] leading-5 text-muted">
                        {item.copy}
                      </p>
                    </div>
                  </article>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
