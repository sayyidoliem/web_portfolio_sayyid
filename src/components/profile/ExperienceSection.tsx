import type { Experience } from "@/content/site-content";
export function ExperienceSection({
  title,
  experiences,
}: {
  title: string;
  experiences: Experience[];
}) {
  return (
    <section id="experience" className="w-full bg-apple-parchment py-20">
      <div className="apple-container">
        <h2 className="text-display-lg mb-16 text-center text-apple-ink">
          {title}
        </h2>
        <div className="flex flex-col gap-16">
          {experiences.map((e, i) => (
            <div key={`${e.company}-${e.role}`}>
              <article className="flex flex-col items-start gap-4 md:flex-row md:gap-12">
                <div className="flex flex-col md:w-1/3">
                  <span className="text-body-strong text-apple-ink">
                    {e.company}
                  </span>
                  <span className="text-caption text-apple-muted">
                    {e.period}
                  </span>
                  <span className="text-caption text-apple-muted">
                    {e.location}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-display-md mb-4 text-apple-ink">
                    {e.role}
                  </h3>
                  <p className="text-body-apple mb-4 text-apple-ink">
                    {e.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {e.skills.map((s) => (
                      <span
                        key={s}
                        className="text-caption rounded-full border border-apple-hairline bg-white px-3 py-1 text-apple-ink"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              {i < experiences.length - 1 ? (
                <div className="mt-16 h-px w-full bg-[#d2d2d7]" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
