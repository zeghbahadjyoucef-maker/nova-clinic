import { useTranslations } from 'next-intl';
import { Sparkles, Scissors, Milestone, AlignJustify } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { Reveal } from './Reveal';

const serviceMeta = [
  { key: 'aesthetic', icon: Sparkles, color: 'bg-brand-500' },
  { key: 'surgery', icon: Scissors, color: 'bg-brand-700' },
  { key: 'implant', icon: Milestone, color: 'bg-brand-600' },
  { key: 'odf', icon: AlignJustify, color: 'bg-brand-800' }
] as const;

export function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as Record<string, { title: string; body: string }>;

  return (
    <section id="services" className="relative overflow-hidden py-20 lg:py-28">
      <div className="blob bg-brand-100 -end-32 top-32 h-96 w-96 rounded-full" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base text-ink-soft">{t('subtitle')}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceMeta.map(({ key, icon: Icon, color }, i) => {
            const item = items[key];
            return (
              <Reveal key={key} delay={i * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-3xl bg-white p-6 shadow-soft ring-1 ring-brand-50 transition hover:-translate-y-1 hover:shadow-card">
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${color} text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>

                  <Link
                    href={`/services/${key}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition hover:underline"
                  >
                    {t('learnMore')}
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
