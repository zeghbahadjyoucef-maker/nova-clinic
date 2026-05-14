import { useTranslations } from 'next-intl';
import { MapPin, Clock, Phone, MessageCircle, ExternalLink } from 'lucide-react';
// Phone kept for the section header icon
import { Button } from './Button';
import { siteConfig } from '@/lib/siteConfig';
import { buildWaLink } from '@/lib/whatsapp';

export function Location() {
  const t = useTranslations('location');

  return (
    <section className="container py-20 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            {t('title')}
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-50">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-ink">{t('address')}</div>
                <a
                  href={siteConfig.maps.short}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
                >
                  {t('openMaps')} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-50">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-ink">{t('hoursTitle')}</div>
                <div className="mt-2 space-y-1.5 text-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-ink-soft">{t('hours.weekdays')}</span>
                    <span className="font-semibold text-ink">{t('hours.weekdaysTime')}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-ink-soft">{t('hours.friday')}</span>
                    <span className="font-semibold text-ink">{t('hours.fridayTime')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-50">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="font-semibold text-ink">{t('phoneTitle')}</div>
              </div>
              <div className="mt-4 space-y-2">
                {siteConfig.phones.map((p) => (
                  <div
                    key={p.whatsapp}
                    className="flex items-center gap-3 rounded-xl bg-brand-50/60 px-3 py-3"
                  >
                    <span className="flex-shrink-0 font-semibold text-ink">{p.label}</span>
                    <div className="flex flex-1 gap-2">
                      <Button href={`tel:+${p.whatsapp}`} external size="md" variant="secondary" className="flex-1 justify-center">
                        {t('call')}
                      </Button>
                      {p.hasWhatsapp && (
                        <Button
                          href={buildWaLink(p.whatsapp, '')}
                          external
                          size="md"
                          variant="whatsapp"
                          className="flex-1 justify-center"
                        >
                          <MessageCircle className="h-3.5 w-3.5" /> {t('whatsapp')}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-card ring-1 ring-brand-50">
            <iframe
              title="Cabinet Dentaire NOVA — Map"
              src={siteConfig.maps.embed}
              className="h-[420px] w-full rounded-3xl lg:h-[560px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
