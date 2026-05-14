import { useTranslations } from 'next-intl';

const insurers = ['CNAS', 'CASNOS', 'CAAR', 'SAA', 'CAAT'];

export function TrustStrip() {
  const t = useTranslations('trust');
  return (
    <section className="container py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
        {t('title')}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
        {insurers.map((name) => (
          <span
            key={name}
            className="select-none text-xl font-extrabold tracking-tight text-ink-soft"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
