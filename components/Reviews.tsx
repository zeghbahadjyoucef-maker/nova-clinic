import { useTranslations } from 'next-intl';
import { Quote, Star } from 'lucide-react';
import { Reveal } from './Reveal';

export function Reviews() {
  const t = useTranslations('reviews');
  const items = t.raw('items') as { name: string; text: string }[];

  return (
    <section id="reviews" className="bg-gradient-to-b from-brand-50/60 to-transparent py-20 scroll-mt-20 md:scroll-mt-24 lg:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft ring-1 ring-brand-50">
            <div className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold text-ink">{t('rating')}</span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="relative h-full rounded-3xl bg-white p-7 shadow-soft ring-1 ring-brand-50">
                <Quote className="absolute end-6 top-6 h-8 w-8 text-brand-100" />
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">“{r.text}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-sm font-semibold text-ink">{r.name}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
