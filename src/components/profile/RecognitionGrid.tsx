import { SectionHeader } from "@/components/common/SectionHeader";
import type { Recognition } from "@/content/site-content";
export function RecognitionGrid({
  title,
  recognitions,
}: {
  title: string;
  recognitions: Recognition[];
}) {
  return (
    <section id="education" className="w-full bg-white py-20">
      <div className="apple-container">
        <SectionHeader
          title={title}
          description="Technical focus areas and professional direction."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recognitions.map((r) => (
            <article
              key={r.title}
              className="flex flex-col rounded-[18px] border border-apple-hairline bg-white p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-apple-parchment text-apple-ink">
                {r.icon}
              </div>
              <h3 className="text-body-strong mb-1 text-apple-ink">
                {r.title}
              </h3>
              <p className="text-body-apple mb-4 text-apple-ink">
                {r.subtitle}
              </p>
              <p className="text-caption mt-auto text-apple-muted">{r.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
