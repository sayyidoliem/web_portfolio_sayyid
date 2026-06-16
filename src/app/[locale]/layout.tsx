import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { GlobalNav } from "@/components/layout/GlobalNav";
import { getSiteContent } from "@/content/site-content";
import { isValidLocale, locales, type Locale } from "@/i18n/config";
import { absoluteUrl, siteConfig } from "@/lib/site";
type P = { params: Promise<{ locale: string }> };
type Props = P & { children: React.ReactNode };
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const c = getSiteContent(locale);
  return {
    title: { default: c.metadata.title, template: c.metadata.template },
    description: c.metadata.description,
    keywords: c.metadata.keywords,
    alternates: {
      canonical: absoluteUrl(`/${locale}`),
      languages: Object.fromEntries(
        locales.map((l) => [l, absoluteUrl(`/${l}`)]),
      ),
    },
    openGraph: {
      title: c.metadata.title,
      description: c.metadata.description,
      url: absoluteUrl(`/${locale}`),
      siteName: siteConfig.name,
      locale,
      type: "website",
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
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const c = getSiteContent(locale as Locale);
  return (
    <>
      <GlobalNav
        locale={locale}
        identity={c.identity}
        navigation={c.navigation.main}
      />
      <main className="pt-[44px]">{children}</main>
      <Footer identity={c.identity} footer={c.footer} />
    </>
  );
}
