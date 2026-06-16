"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/site-content";
import type { Locale } from "@/i18n/config";
export function GlobalNav({
  locale,
  identity,
  navigation,
}: {
  locale: Locale;
  identity: { name: string };
  navigation: NavItem[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  return (
    <>
      <nav className="fixed top-0 z-50 flex h-[44px] w-full items-center justify-center bg-apple-black px-4 text-white">
        <div className="flex h-full w-full max-w-apple items-center justify-between">
          <Link
            href={`/${locale}`}
            className="text-nav-link text-[#f5f5f7] hover:text-white"
            onClick={() => setOpen(false)}
          >
            <span className="text-[14px] font-semibold">Sayyid Sunarko</span>
          </Link>
          <div className="text-nav-link hidden items-center gap-8 text-[#cccccc] md:flex">
            {navigation.map((i) => {
              const active = pathname === i.href.split("#")[0];
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className={`transition-colors hover:text-white ${active ? "font-semibold text-white" : ""}`}
                >
                  {i.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="text-nav-link hidden text-[#cccccc] hover:text-white md:block"
            >
              Contact
            </Link>
            <button
              type="button"
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={open}
              className="focus-ring rounded-sm text-[#cccccc] hover:text-white md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>
      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-apple-black px-8 pt-[44px] md:hidden">
          <div className="text-display-md mt-8 flex flex-col gap-6 text-white">
            {navigation.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="border-b border-[#333333] pb-4 text-left"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="border-b border-[#333333] pb-4 text-left"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
