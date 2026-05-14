'use client';

import { FormEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { siteConfig } from '@/lib/siteConfig';
import { buildWaLink, composeAppointmentMessage } from '@/lib/whatsapp';

const waPhone = siteConfig.phones.find((p) => p.hasWhatsapp)!;

export function Appointment() {
  const t = useTranslations('appointment');
  const ts = useTranslations('services');
  const locale = useLocale() as 'fr' | 'ar';

  const services = ts.raw('items') as Record<string, { title: string }>;
  const serviceOptions = ['aesthetic', 'surgery', 'implant', 'odf'].map((k) => services[k].title);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const msg = composeAppointmentMessage({
      locale,
      name: String(form.get('name') ?? ''),
      phone: String(form.get('phone') ?? ''),
      service: String(form.get('service') ?? ''),
      date: String(form.get('date') ?? ''),
      message: String(form.get('message') ?? '')
    });
    const url = buildWaLink(waPhone.whatsapp, msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <div className="blob bg-brand-200 -start-32 top-20 h-96 w-96 rounded-full" />
      <div className="blob bg-brand-100 -end-32 bottom-10 h-80 w-80 rounded-full" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            {t('title')}{' '}
            <span className="script-accent text-brand-500">{t('titleAccent')}</span>
          </h2>
          <p className="mt-4 text-base text-ink-soft">{t('subtitle')}</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-12 max-w-3xl rounded-[2rem] bg-white p-6 shadow-card ring-1 ring-brand-50 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">
                {t('fields.name')}
              </span>
              <input
                name="name"
                required
                placeholder={t('fields.namePlaceholder')}
                className="input-base"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">
                {t('fields.phone')}
              </span>
              <input
                name="phone"
                required
                type="tel"
                placeholder={t('fields.phonePlaceholder')}
                className="input-base"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">
                {t('fields.service')}
              </span>
              <select name="service" required defaultValue="" className="input-base">
                <option value="" disabled>
                  {t('fields.servicePlaceholder')}
                </option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">
                {t('fields.date')}
              </span>
              <input name="date" required type="date" className="input-base" />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-semibold text-ink">
                {t('fields.message')}
              </span>
              <textarea
                name="message"
                rows={3}
                placeholder={t('fields.messagePlaceholder')}
                className="input-base resize-none"
              />
            </label>

          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-ink-soft">
              {t('fallback')} :{' '}
              <a
                href={`tel:+${siteConfig.phones[0].whatsapp}`}
                className="font-semibold text-brand-700 hover:underline"
              >
                {siteConfig.phones[0].label}
              </a>
            </p>
            <Button type="submit" variant="whatsapp" size="lg">
              <MessageCircle className="h-4 w-4" />
              {t('submit')}
            </Button>
          </div>
        </form>

      </div>
    </section>
  );
}
