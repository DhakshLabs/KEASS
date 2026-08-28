import {
  BarChart3,
  Brain,
  Car,
  ClipboardCheck,
  Cloud,
  Coins,
  Cog,
  Factory,
  Fuel,
  Headset,
  Landmark,
  LineChart,
  Sprout,
  TrendingUp,
  Truck,
  User,
  Utensils,
  Wallet,
} from "lucide-react";
import type { ReactNode } from "react";
import { Container, Eyebrow, Reveal } from "@/components/ui";
import { domains, industries, skills } from "@/lib/data";

const icons: Record<string, ReactNode> = {
  landmark: <Landmark strokeWidth={1.5} className="h-5 w-5" />,
  factory: <Factory strokeWidth={1.5} className="h-5 w-5" />,
  fuel: <Fuel strokeWidth={1.5} className="h-5 w-5" />,
  car: <Car strokeWidth={1.5} className="h-5 w-5" />,
  utensils: <Utensils strokeWidth={1.5} className="h-5 w-5" />,
  sprout: <Sprout strokeWidth={1.5} className="h-5 w-5" />,
  wallet: <Wallet strokeWidth={1.5} className="h-5 w-5" />,
  headset: <Headset strokeWidth={1.5} className="h-5 w-5" />,
  "clipboard-check": <ClipboardCheck strokeWidth={1.5} className="h-5 w-5" />,
  truck: <Truck strokeWidth={1.5} className="h-5 w-5" />,
  user: <User strokeWidth={1.5} className="h-5 w-5" />,
  coins: <Coins strokeWidth={1.5} className="h-5 w-5" />,
  "trending-up": <TrendingUp strokeWidth={1.5} className="h-5 w-5" />,
  "bar-chart": <BarChart3 strokeWidth={1.5} className="h-5 w-5" />,
  "line-chart": <LineChart strokeWidth={1.5} className="h-5 w-5" />,
  cog: <Cog strokeWidth={1.5} className="h-5 w-5" />,
  brain: <Brain strokeWidth={1.5} className="h-5 w-5" />,
  cloud: <Cloud strokeWidth={1.5} className="h-5 w-5" />,
};

export function Industries() {
  const columns = [
    {
      title: "Industry",
      items: industries,
      tone: "bg-ink text-white",
      heading: "text-white",
      row: "border-white/15 text-white/90",
      icon: "text-white",
    },
    {
      title: "Domain",
      items: domains,
      tone: "bg-paper text-ink border border-line",
      heading: "text-ink",
      row: "border-line text-ink-2",
      icon: "text-keaas",
    },
    {
      title: "Skills",
      items: skills,
      tone: "bg-mist text-ink border border-line",
      heading: "text-ink",
      row: "border-line text-ink-2",
      icon: "text-keaas",
    },
  ] as const;

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-paper"
    >
      <Container className="py-20 md:py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <Eyebrow>Coverage</Eyebrow>
          <h2
            id="industries-heading"
            className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl"
          >
            Industries, domains
            <br />
            and SAP skills.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            The landscapes we know, the processes we run, and the SAP skills
            System Integrators draw from.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {columns.map((column, i) => (
            <Reveal key={column.title} delay={i * 0.08}>
              <article className={`h-full p-8 sm:p-10 ${column.tone}`}>
                <h3
                  className={`text-[0.72rem] tracking-[0.22em] uppercase ${column.heading}`}
                >
                  {column.title}
                </h3>
                <ul className="mt-8">
                  {column.items.map((item) => (
                    <li
                      key={item.name}
                      className={`flex items-center gap-4 border-t py-4 last:border-b ${column.row}`}
                    >
                      <span className={`shrink-0 ${column.icon}`}>
                        {icons[item.icon]}
                      </span>
                      <span className="text-sm font-medium tracking-wide">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
