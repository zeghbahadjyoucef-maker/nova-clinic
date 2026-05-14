import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Smile, Star } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative overflow-hidden pt-10 md:pt-16">
      {/* background blobs */}
      <div className="blob bg-brand-200 -top-24 -start-24 h-80 w-80 rounded-full" />
      <div className="blob bg-brand-100 top-40 end-0 h-96 w-96 rounded-full" />

      <div className="container relative grid gap-10 pb-16 lg:grid-cols-2 lg:items-center lg:gap-6 lg:pb-24">
        <div className="relative z-10 max-w-xl">
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t('titleStart')}{' '}
            <span className="relative mx-2 inline-block">
              <span className="script-accent text-brand-500">{t('titleAccent')}</span>
              <svg
                className="absolute -bottom-2 start-0 w-full"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 8 C 50 -2, 150 14, 198 4"
                  stroke="#1FA9E0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            {t('titleEnd')}
          </h1>

          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">{t('subtitle')}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#contact" size="lg">
              {t('ctaPrimary')}
            </Button>
            <Button href="#services" size="lg" variant="secondary">
              {t('ctaSecondary')}
            </Button>
          </div>
        </div>

        <div className="relative">
          {/* organic blob behind image */}
          <div className="absolute inset-0 -z-10 animate-blob bg-gradient-to-br from-brand-100 to-brand-200" />

          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            {/* big blob shape clip */}
            <div className="absolute inset-0 animate-blob overflow-hidden bg-gradient-to-br from-brand-100 to-brand-300 shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80&auto=format&fit=crop"
                alt=""
                fill
                priority
                sizes="(min-width:1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>

            {/* floating quality badge */}
            <div className="absolute -bottom-3 -start-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card animate-float">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <Smile className="h-5 w-5" />
              </div>
              <div className="text-start">
                <div className="text-xs font-semibold text-ink">{t('badgeQuality')}</div>
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* floating patients badge */}
            <div
              className="absolute -top-3 end-2 rounded-2xl bg-brand-700 px-4 py-3 text-white shadow-card animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="text-sm font-bold">{t('badgePatients')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
