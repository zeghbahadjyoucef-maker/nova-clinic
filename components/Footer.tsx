import { useTranslations } from 'next-intl';
import { Phone, MapPin, Clock } from 'lucide-react';
import { LogoWordmark } from './Logo';
import { siteConfig } from '@/lib/siteConfig';

export function Footer() {
  const tn = useTranslations('nav');
  const tf = useTranslations('footer');
  const tl = useTranslations('location');

  const links = [
    { href: '#home', label: tn('home') },
    { href: '#services', label: tn('services') },
    { href: '#about', label: tn('about') },
    { href: '#reviews', label: tn('reviews') },
    { href: '#contact', label: tn('contact') }
  ];

  return (
    <footer className="border-t border-brand-50 bg-white/60">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <LogoWordmark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">{tf('tagline')}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink">
              {tf('navTitle')}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-ink-soft transition hover:text-brand-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink">
              {tf('contactTitle')}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              {siteConfig.phones.map((p) => (
                <li key={p.whatsapp} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-600" />
                  <a href={`tel:+${p.whatsapp}`} className="hover:text-brand-700">
                    {p.label}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>{tl('address')}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>
                  {tl('hours.weekdays')} · {tl('hours.weekdaysTime')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-50 pt-6 text-center text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} Cabinet Dentaire NOVA. {tf('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
