const nodes = [
  { id: "lon", x: 48.2, y: 31.5, label: "United Kingdom" },
  { id: "dxb", x: 61.4, y: 48.5, label: "United Arab Emirates" },
  { id: "bom", x: 68.6, y: 51, label: "India" },
] as const;

const routes: [string, string, number][] = [
  ["lon", "dxb", 0.2],
  ["dxb", "bom", 0.8],
];

function point(id: string) {
  return nodes.find((n) => n.id === id)!;
}

function arc(a: (typeof nodes)[number], b: (typeof nodes)[number]) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - Math.min(8, Math.abs(a.x - b.x) * 0.16);
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

export function WorldMap() {
  return (
    <div className="relative aspect-[16/11] w-full lg:aspect-[5/4]">
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-75"
        style={{ backgroundImage: "url(/images/world-map-lines.jpg)" }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 80"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="KEAAS delivery across India, the United Arab Emirates and the United Kingdom"
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
              strokeWidth="0.14"
              strokeOpacity="0.4"
              pathLength={1}
              className="animate-line-draw"
              style={{ animationDelay: `${delay}s`, animationDuration: "5.5s" }}
            />
          );
        })}

        {nodes.map((node, i) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="0.85"
              fill="#b40000"
              opacity="0.18"
              className="animate-node-pulse"
              style={{ animationDelay: `${i * 1.4}s`, animationDuration: "6.5s" }}
            />
            <circle cx={node.x} cy={node.y} r="0.32" fill="#b40000" />
          </g>
        ))}
      </svg>

      <p className="absolute right-0 bottom-0 text-[0.62rem] tracking-[0.16em] text-muted uppercase">
        Active delivery · 3 countries
      </p>
    </div>
  );
}
