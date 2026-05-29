import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

export function WhyUs() {
  const t = useTranslations('whyUs');
  const items = t.raw('items') as { title: string; body: string }[];

  return (
    <section id="about" className="container py-20 scroll-mt-20 md:scroll-mt-24 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-full bg-brand-100 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&q=80&auto=format&fit=crop"
              alt=""
              fill
              sizes="(min-width:1024px) 420px, 80vw"
              className="object-cover"
            />
          </div>

          {/* circular stamp */}
          <div className="absolute -bottom-4 -start-4 flex h-32 w-32 items-center justify-center rounded-full bg-brand-700 text-white shadow-card">
            <svg viewBox="0 0 120 120" className="absolute inset-0 animate-[spin_18s_linear_infinite]">
              <defs>
                <path
                  id="stampCircle"
                  d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                />
              </defs>
              <text fontSize="9" fill="white" fontWeight="600" letterSpacing="2">
                <textPath href="#stampCircle">{t('stamp')} • {t('stamp')} • </textPath>
              </text>
            </svg>
            <div className="text-center text-xs font-extrabold leading-tight">
              NOVA
              <br />
              CLINIC
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            {t('title')}{' '}
            <span className="script-accent text-brand-500">{t('titleAccent')}</span>
          </h2>

          <ul className="mt-8 space-y-5">
            {items.map((it, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{it.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{it.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
