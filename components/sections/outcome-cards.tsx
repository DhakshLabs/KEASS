import { Reveal } from "@/components/ui";
import { whyOutcomes } from "@/lib/data";

export function OutcomeCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {whyOutcomes.map((item, i) => (
        <Reveal key={item.stat} delay={i * 0.08}>
          <article className="flex h-full flex-col border border-line bg-paper p-8 lg:p-10">
            <p className="display text-5xl text-keaas sm:text-6xl md:text-[4.25rem]">
              {item.stat}
            </p>
            <p className="mt-8 text-base leading-8 text-ink-2">
              {item.lead ? (
                <strong className="font-semibold text-ink">{item.lead} </strong>
              ) : null}
              {item.rest}{" "}
              {item.emphasis ? (
                <strong className="font-semibold text-ink">{item.emphasis} </strong>
              ) : null}
              {item.mid ? `${item.mid} ` : null}
              <span className="font-semibold text-ink">{item.stat}</span>{" "}
              {item.trail}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
