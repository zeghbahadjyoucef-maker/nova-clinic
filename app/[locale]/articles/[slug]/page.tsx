import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from '@/lib/navigation';
import { locales } from '@/i18n';
import { siteConfig } from '@/lib/siteConfig';
import { buildWaLink } from '@/lib/whatsapp';

const SLUGS = ['brossage', 'scanner-3d', 'bilan-gratuit'] as const;
type Slug = (typeof SLUGS)[number];

const TAG_COLORS: Record<Slug, string> = {
  'brossage': 'bg-brand-700',
  'scanner-3d': 'bg-brand-500',
  'bilan-gratuit': 'bg-amber-500'
};

export function generateStaticParams() {
  return locales.flatMap((locale) => SLUGS.map((slug) => ({ locale, slug })));
}

type Section = { heading: string; body: string };
type Article = { tag: string; title: string; intro: string; sections: Section[] };

export default async function ArticlePage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);
  if (!SLUGS.includes(slug as Slug)) notFound();

  const t = await getTranslations({ locale, namespace: 'articles' });
  const article = t.raw(slug) as Article;
  const waLink = buildWaLink(siteConfig.phones[0].whatsapp, '');
  const tagColor = TAG_COLORS[slug as Slug];

  return (
    <>
      <Header />
      <main>
        {/* Article header */}
        <div className="border-b border-brand-100 bg-white py-12 lg:py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <Link
                href="/"
                className="text-sm font-semibold text-brand-600 hover:text-brand-800 hover:underline"
              >
                {t('backHome')}
              </Link>
              <div className="mt-6 flex items-center gap-3">
                <span className={`rounded-full ${tagColor} px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white`}>
                  {article.tag}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                {article.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                {article.intro}
              </p>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="bg-white py-12 lg:py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <div className="divide-y divide-brand-100">
                {article.sections.map((section, i) => (
                  <div key={i} className="py-10 first:pt-0">
                    <h2 className="text-xl font-bold text-ink">{section.heading}</h2>
                    <p className="mt-5 text-base leading-[1.9] text-ink-soft">{section.body}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-20 border-t border-brand-100 pt-14 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">{t('ctaSub')}</p>
                <h3 className="mt-3 text-2xl font-extrabold text-ink">{t('ctaHeading')}</h3>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-full bg-brand-600 px-8 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
                >
                  {t('bookCta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
