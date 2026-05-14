'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';
import { locales, type Locale } from '@/i18n';

export function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const t = useTranslations('common');

  const next: Locale = locale === 'fr' ? 'ar' : 'fr';

  function switchTo(target: Locale) {
    const segments = pathname.split('/');
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = target;
    } else {
      segments.splice(1, 0, target);
    }
    router.push(segments.join('/') || `/${target}`);
  }

  return (
    <button
      type="button"
      onClick={() => switchTo(next)}
      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-brand-700 ring-1 ring-brand-100 transition hover:bg-brand-50"
      aria-label={t('switchLang')}
    >
      <Globe className="h-4 w-4" />
      <span>{t('switchLang')}</span>
    </button>
  );
}
