import Image from "next/image";
import { clients } from "@/lib/data";

export function ClientTicker() {
  return (
    <section
      aria-label="Clients"
      className="border-y border-line bg-paper"
    >
      <div className="logo-ticker-mask overflow-hidden py-8 sm:py-10">
        <div className="logo-ticker-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center gap-14 pr-14 sm:gap-20 sm:pr-20"
              aria-hidden={copy === 1}
            >
              {clients.map((client) => (
                <div
                  key={`${copy}-${client.name}`}
                  className="flex h-12 shrink-0 items-center sm:h-14"
                >
                  <Image
                    src={client.src}
                    alt={copy === 0 ? client.name : ""}
                    width={180}
                    height={56}
                    className="h-8 w-auto max-w-[160px] object-contain object-left grayscale sm:h-10 sm:max-w-[200px]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
