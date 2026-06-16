import { AppleButton } from "@/components/common/AppleButton";
import { ProductImage } from "@/components/common/ProductImage";
import type { ProductTile as T } from "@/content/site-content";
const cls: Record<T["surface"], string> = {
  light: "bg-white text-apple-ink",
  parchment: "bg-apple-parchment text-apple-ink",
  dark: "bg-apple-tile text-white",
  dark2: "bg-apple-tile2 text-white",
  dark3: "bg-apple-tile3 text-white",
};
export function ProductTile({ tile }: { tile: T }) {
  const dark = tile.surface.startsWith("dark");
  return (
    <section
      className={`flex w-full flex-col items-center overflow-hidden py-20 text-center ${cls[tile.surface]}`}
    >
      <div className="apple-gallery-container flex flex-col items-center">
        {tile.eyebrow ? (
          <p
            className={`text-caption-strong mb-3 ${dark ? "text-apple-darkMuted" : "text-apple-muted"}`}
          >
            {tile.eyebrow}
          </p>
        ) : null}
        <h2 className="text-display-lg mb-2">{tile.title}</h2>
        <p
          className={`text-lead mb-6 max-w-xl ${dark ? "text-apple-darkMuted" : "text-apple-muted"}`}
        >
          {tile.description}
        </p>
        <div className="mb-16 flex flex-wrap items-center justify-center gap-6">
          {tile.ctas.map((c) => (
            <AppleButton
              key={c.label}
              {...c}
              variant={dark && c.variant === "link" ? "darkLink" : c.variant}
            />
          ))}
        </div>
        <div className="w-full max-w-[960px] px-4">
          <ProductImage image={tile.image} className="rounded-[18px]" />
        </div>
      </div>
    </section>
  );
}
