import Link from "next/link";
import type { NavItem } from "@/content/site-content";
export function ProfileSubNav({
  title,
  items,
}: {
  title: string;
  items: NavItem[];
}) {
  return (
    <div className="frosted-bar sticky top-[44px] z-30 flex h-[52px] w-full items-center justify-center border-b border-apple-hairline">
      <div className="flex w-full max-w-apple items-center justify-between px-4">
        <span className="text-tagline text-apple-ink">{title}</span>
        <div className="text-caption hidden gap-6 text-apple-ink md:flex">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-action">
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
