const nodes = [
  { id: "nyc", x: 27.5, y: 41, label: "New York" },
  { id: "sao", x: 33.4, y: 68.5, label: "São Paulo" },
  { id: "lon", x: 48.2, y: 31.5, label: "London" },
  { id: "fra", x: 51.4, y: 34, label: "Frankfurt" },
  { id: "jnb", x: 54.2, y: 70, label: "Johannesburg" },
  { id: "dxb", x: 61.4, y: 48.5, label: "Dubai" },
  { id: "bom", x: 68.6, y: 51, label: "Mumbai" },
  { id: "sin", x: 76.2, y: 58.5, label: "Singapore" },
  { id: "tyo", x: 84.6, y: 40.5, label: "Tokyo" },
  { id: "syd", x: 86.4, y: 75, label: "Sydney" },
] as const;

const routes: [string, string, number][] = [
  ["nyc", "lon", 0.1],
  ["lon", "fra", 0.35],
  ["fra", "dxb", 0.55],
  ["dxb", "bom", 0.75],
  ["bom", "sin", 0.95],
  ["sin", "tyo", 1.15],
  ["tyo", "syd", 1.35],
  ["lon", "jnb", 0.7],
  ["nyc", "sao", 0.5],
  ["fra", "bom", 1.0],
];

function point(id: string) {
  return nodes.find((n) => n.id === id)!;
}

function arc(a: (typeof nodes)[number], b: (typeof nodes)[number]) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - Math.min(10, Math.abs(a.x - b.x) * 0.18);
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

export function WorldMap() {
  return (
    <div className="relative aspect-[16/11] w-full animate-drift lg:aspect-[5/4]">
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url(/images/world-map-lines.jpg)" }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 80"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Global expertise network connecting delivery centres across the Americas, EMEA, APAC and Australia"
      >
        {routes.map(([from, to, delay]) => {
          const a = point(from);
          const b = point(to);
          return (
            <path
              key={`${from}-${to}`}
              d={arc(a, b)}
              fill="none"
              stroke="#b40000"
              strokeWidth="0.18"
              strokeOpacity="0.55"
              pathLength={1}
              className="animate-line-draw"
              style={{ animationDelay: `${delay}s` }}
            />
          );
        })}

        {nodes.map((node, i) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="1.35"
              fill="#b40000"
              opacity="0.22"
              className="animate-node-pulse"
              style={{ animationDelay: `${i * 0.28}s` }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="0.55"
              fill="#b40000"
              className="animate-node-core"
              style={{ animationDelay: `${i * 0.28}s` }}
            />
          </g>
        ))}
      </svg>

      <p className="absolute right-0 bottom-0 text-[0.62rem] tracking-[0.16em] text-muted uppercase">
        Active delivery · 28 countries
      </p>
    </div>
  );
}
