import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Cta } from "@/content/site-content";
export function AppleButton({
  label,
  href,
  variant = "primary",
  className = "",
}: Cta & { className?: string }) {
  if (variant === "link" || variant === "darkLink") {
    const color = variant === "darkLink" ? "text-action-dark" : "text-action";
    return (
      <Link
        href={href}
        className={`text-body-apple group inline-flex items-center hover:underline ${color} ${className}`}
      >
        {label}
        <ChevronRight
          size={18}
          className="ml-1 transition-transform group-hover:translate-x-1"
        />
      </Link>
    );
  }
  if (variant === "secondary")
    return (
      <Link
        href={href}
        className={`text-body-apple active-scale focus-ring inline-flex rounded-full border border-action px-[22px] py-[11px] text-action ${className}`}
      >
        {label}
      </Link>
    );
  return (
    <Link
      href={href}
      className={`text-body-apple active-scale focus-ring inline-flex rounded-full bg-action px-[22px] py-[11px] text-white hover:bg-action-focus ${className}`}
    >
      {label}
    </Link>
  );
}
