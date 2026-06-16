import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceSection } from "@/components/profile/ExperienceSection";
import { ProfileSubNav } from "@/components/profile/ProfileSubNav";
import { ProjectGrid } from "@/components/profile/ProjectGrid";
import { RecognitionGrid } from "@/components/profile/RecognitionGrid";
import { SkillsCommunitySection } from "@/components/profile/SkillsCommunitySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteContent } from "@/content/site-content";
import { isValidLocale, type Locale } from "@/i18n/config";
import { absoluteUrl, siteConfig } from "@/lib/site";
type P = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const c = getSiteContent(locale);
  const title = `${c.identity.name} — Developer Profile`;
  return {
    title,
    description: c.profile.header.description,
    alternates: { canonical: absoluteUrl(`/${locale}/profile`) },
    openGraph: {
      title,
      description: c.profile.header.description,
      url: absoluteUrl(`/${locale}/profile`),
      images: [
        {
          url: absoluteUrl(siteConfig.defaultOgImage),
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
export default async function ProfilePage({ params }: P) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const c = getSiteContent(locale as Locale);
  return (
    <div className="bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: `${c.identity.name} — Developer Profile`,
          url: absoluteUrl(`/${locale}/profile`),
          about: {
            "@type": "Person",
            name: c.identity.name,
            jobTitle: c.identity.role,
            email: c.identity.email,
            address: c.identity.location,
          },
        }}
      />
      <ProfileSubNav title={c.profile.navTitle} items={c.navigation.profile} />
      <section className="flex w-full flex-col items-center bg-white px-6 pb-20 pt-[120px] text-center">
        <div className="max-w-apple">
          <h1 className="text-hero-display mb-4 text-apple-ink">
            {c.profile.header.title}
          </h1>
          <p className="text-lead-airy mx-auto max-w-3xl text-apple-muted">
            {c.profile.header.description}
          </p>
        </div>
      </section>
      <ExperienceSection
        title={c.profile.sectionLabels.experience}
        experiences={c.profile.experience}
      />
      <ProjectGrid
        title={c.profile.sectionLabels.projects}
        projects={c.profile.projects}
      />
      <RecognitionGrid
        title={c.profile.sectionLabels.education}
        recognitions={c.profile.recognitions}
      />
      <SkillsCommunitySection
        skillsTitle={c.profile.sectionLabels.skills}
        communityTitle={c.profile.sectionLabels.community}
        skills={c.profile.skills}
        community={c.profile.community}
      />
    </div>
  );
}
