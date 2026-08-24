const nodes = [
  { id: "lon", x: 48.2, y: 31.5, label: "United Kingdom" },
  { id: "dxb", x: 61.4, y: 48.5, label: "United Arab Emirates" },
  { id: "bom", x: 68.6, y: 51, label: "India" },
] as const;

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
        {nodes.map((node, i) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="0.7"
              fill="#b40000"
              className="animate-node-pulse"
              style={{ animationDelay: `${i * 2.2}s` }}
            />
            <circle cx={node.x} cy={node.y} r="0.22" fill="#b40000" />
          </g>
        ))}
      </svg>

      <p className="absolute right-0 bottom-0 text-[0.62rem] tracking-[0.16em] text-muted uppercase">
        Active delivery · 3 countries
      </p>
    </div>
  );
}
