import Image from "next/image";
import type { ImageAsset } from "@/content/site-content";
export function ProductImage({
  image,
  priority = false,
  className = "",
}: {
  image: ImageAsset;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={1400}
      height={860}
      priority={priority}
      className={`product-shadow h-auto w-full object-cover ${className}`}
      sizes="(max-width:640px) 92vw,(max-width:1068px) 86vw,980px"
    />
  );
}
