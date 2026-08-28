import { process } from "@/lib/data";

function Node({
  step,
  align = "left",
}: {
  step: (typeof process)[number];
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "flex flex-col items-center text-center" : "flex gap-5"}>
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-keaas bg-paper text-[0.8rem] font-medium tracking-[0.12em] text-keaas tabular-nums">
        {step.id}
      </div>
      <div>
        <h3
          className={`text-[0.7rem] leading-5 font-medium tracking-[0.14em] text-ink uppercase ${
            align === "center" ? "mt-5 max-w-[11rem]" : "max-w-[18rem]"
          }`}
        >
          {step.title}
        </h3>
        <p
          className={`mt-2 text-sm leading-6 text-muted ${
            align === "center" ? "max-w-[14rem]" : "max-w-[20rem]"
          }`}
        >
          {step.copy}
        </p>
      </div>
    </div>
  );
}

export function ProcessRoadmap() {
  const first = process.slice(0, 4);
  const second = [...process.slice(4)].reverse();

  return (
    <div>
      <ol className="relative space-y-10 lg:hidden">
        <span
          aria-hidden="true"
          className="absolute top-6 bottom-6 left-6 w-px bg-keaas/25"
        />
        {process.map((step) => (
          <li key={step.id} className="relative">
            <Node step={step} />
          </li>
        ))}
      </ol>

      <div className="relative hidden lg:block">
        <ol className="relative grid grid-cols-4 gap-6">
          <span
            aria-hidden="true"
            className="absolute top-6 right-[12.5%] left-[12.5%] h-px bg-keaas/25"
          />
          {first.map((step) => (
            <li key={step.id}>
              <Node step={step} align="center" />
            </li>
          ))}
        </ol>

        <div className="relative h-14" aria-hidden="true">
          <span className="absolute top-0 right-[12.5%] h-full w-px bg-keaas/25" />
        </div>

        <ol className="relative grid grid-cols-4 gap-6">
          <span
            aria-hidden="true"
            className="absolute top-6 right-[12.5%] left-[12.5%] h-px bg-keaas/25"
          />
          {second.map((step) => (
            <li key={step.id}>
              <Node step={step} align="center" />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
