import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { PortfolioProject } from "@/content/site-content";
export function ProjectGrid({
  title,
  projects,
}: {
  title: string;
  projects: PortfolioProject[];
}) {
  return (
    <section id="projects" className="w-full bg-apple-tile py-20">
      <div className="apple-gallery-container">
        <SectionHeader
          title={title}
          description="Work that bridges function, architecture, and polished user experience."
          inverted
        />
        <div className="mx-auto grid max-w-apple grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="flex h-full flex-col rounded-[18px] bg-apple-tile2 p-6 transition-colors hover:bg-[#333333]"
            >
              <Image
                src={p.image.src}
                alt={p.image.alt}
                width={800}
                height={480}
                className="mb-6 h-[240px] w-full rounded-[11px] object-cover opacity-90"
                sizes="(max-width:768px) 92vw,480px"
              />
              <h3 className="text-body-strong mb-2 text-white">{p.title}</h3>
              <p className="text-body-apple mb-6 flex-grow text-apple-darkMuted">
                {p.description}
              </p>
              <Link
                href={p.href}
                className="text-body-apple inline-flex items-center text-action-dark hover:underline"
              >
                {p.actionLabel}
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
