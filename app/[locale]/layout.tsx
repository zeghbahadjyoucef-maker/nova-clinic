import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Plus_Jakarta_Sans, Cairo, Caveat } from 'next/font/google';
import { locales, type Locale } from '@/i18n';
import '../globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap'
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap'
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap'
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Cabinet Dentaire NOVA,Dr Boulounis',
  description:
    'Cabinet Dentaire NOVA,Dr Boulounis. Dentisterie esthétique, chirurgie buccale, implantologie et orthodontie (ODF) à Alger.',
  icons: {
    icon: '/logo.svg'
  }
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const fontClass = locale === 'ar' ? 'font-ar' : 'font-sans';

  return (
    <html lang={locale} dir={dir} className={`${jakarta.variable} ${cairo.variable} ${caveat.variable}`}>
      <body className={`${fontClass} bg-sky-tint/30 text-ink antialiased`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
