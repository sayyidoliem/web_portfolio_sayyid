import Image from "next/image";
import type { SiteContent } from "@/content/site-content";
export function QuoteSection({
  quote,
}: {
  quote: SiteContent["home"]["quote"];
}) {
  return (
    <section
      id="about"
      className="relative flex w-full flex-col items-center overflow-hidden bg-apple-tile2 py-[120px] text-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={quote.image.src}
          alt={quote.image.alt}
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
      </div>
      <div className="apple-container relative z-10 flex flex-col items-center">
        <p className="text-lead-airy mb-6 max-w-3xl text-white">
          “{quote.title}”
        </p>
        <p className="text-body-apple mb-8 max-w-3xl text-apple-darkMuted">
          {quote.description}
        </p>
        <p className="text-caption-strong text-apple-darkMuted">
          {quote.label}
        </p>
      </div>
    </section>
  );
}
