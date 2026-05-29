'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { LangSwitcher } from './LangSwitcher';
import { LogoWordmark } from './Logo';

export function Header() {
  const t = useTranslations('nav');
  const tc = useTranslations('common');
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: t('home') },
    { href: '#services', label: t('services') },
    { href: '#about', label: t('about') },
    { href: '#reviews', label: t('reviews') },
    { href: '#contact', label: t('contact') }
  ];

  return (
    <header className="sticky top-0 z-50 w-full after:pointer-events-none after:absolute after:top-full after:left-0 after:right-0 after:h-16 after:bg-gradient-to-b after:from-brand-50/80 after:to-transparent">
      <div className="glass">
        <div className="container flex h-20 items-center justify-between md:h-24">
          <a href="#home" className="shrink-0">
            <LogoWordmark />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base font-semibold text-ink-soft transition hover:text-brand-700"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LangSwitcher />
            <Button href="#contact" size="md" className="hidden md:inline-flex">
              {t('cta')}
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-700 ring-1 ring-brand-100 lg:hidden"
              aria-label={open ? tc('closeMenu') : tc('openMenu')}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-white/40 bg-white/90 lg:hidden">
            <div className="container flex flex-col gap-1 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-base font-semibold text-ink-soft transition hover:bg-brand-50 hover:text-brand-700"
                >
                  {l.label}
                </a>
              ))}
              <Button href="#contact" size="md" className="mt-2">
                {t('cta')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
