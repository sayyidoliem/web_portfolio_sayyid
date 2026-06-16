import { AppleButton } from "@/components/common/AppleButton";
import { ProductImage } from "@/components/common/ProductImage";
import type { SiteContent } from "@/content/site-content";
export function HeroSection({ hero }: { hero: SiteContent["home"]["hero"] }) {
  return (
    <section className="flex w-full flex-col items-center overflow-hidden bg-white pb-20 pt-20 text-center">
      <div className="apple-container flex flex-col items-center">
        <h1 className="text-hero-display mb-4 text-apple-ink">{hero.title}</h1>
        <p className="text-lead mb-8 max-w-2xl text-apple-ink">
          {hero.description}
        </p>
        <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
          {hero.ctas.map((c) => (
            <AppleButton key={c.label} {...c} />
          ))}
        </div>
        <div className="mt-4 w-full max-w-[840px] px-4">
          <ProductImage
            image={hero.image}
            priority
            className="rounded-[18px]"
          />
        </div>
      </div>
    </section>
  );
}
