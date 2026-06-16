import type { CommunityItem } from "@/content/site-content";
export function SkillsCommunitySection({
  skillsTitle,
  communityTitle,
  skills,
  community,
}: {
  skillsTitle: string;
  communityTitle: string;
  skills: string[];
  community: CommunityItem[];
}) {
  return (
    <section id="skills" className="w-full bg-apple-parchment py-20">
      <div className="apple-container grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <h2 className="text-display-lg mb-8 text-apple-ink">{skillsTitle}</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-caption cursor-default rounded-full border border-apple-hairline bg-white px-4 py-3 text-apple-ink transition-colors hover:border-action"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-display-lg mb-8 text-apple-ink">
            {communityTitle}
          </h2>
          <div className="flex flex-col gap-6">
            {community.map((i) => (
              <article
                key={`${i.title}-${i.organization}`}
                className="rounded-[18px] border border-apple-hairline bg-white p-6"
              >
                <h3 className="text-body-strong text-apple-ink">{i.title}</h3>
                <p className="text-body-apple mb-1 text-apple-ink">
                  {i.organization}
                </p>
                <p className="text-caption mb-3 text-apple-muted">{i.period}</p>
                {i.description ? (
                  <p className="text-caption text-apple-ink">{i.description}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
