import Link from 'next/link';
import { forwardRef } from 'react';
import { cn } from '@/lib/whatsapp';

type Variant = 'primary' | 'secondary' | 'ghost' | 'whatsapp';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform active:scale-[0.98] focus:outline-none focus-visible:ring-4';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-soft hover:shadow-card focus-visible:ring-brand-200',
  secondary:
    'bg-white text-brand-700 ring-1 ring-brand-100 hover:bg-brand-50 focus-visible:ring-brand-200',
  ghost:
    'text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-200',
  whatsapp:
    'bg-[#25D366] text-white shadow-soft hover:bg-[#1ebe57] focus-visible:ring-emerald-200'
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base'
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className, href, external, children, ...props },
  ref
) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref} className={cls} {...props}>
      {children}
    </button>
  );
});
