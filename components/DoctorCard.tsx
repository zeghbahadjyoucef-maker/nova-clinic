import { useTranslations } from 'next-intl';
import { Award } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

export function DoctorCard() {
  const t = useTranslations('doctor');
  const tags = t.raw('tags') as string[];

  return (
    <section className="container py-20 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            {t('title')}
          </h2>

          <div className="mt-8 rounded-3xl bg-white p-8 shadow-soft ring-1 ring-brand-50">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-brand-800">{t('name')}</div>
                <div className="text-sm text-ink-soft">{t('role')}</div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-ink-soft">{t('bio')}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Button href="#contact">
                {t('cta')}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
