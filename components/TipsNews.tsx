import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import { Reveal } from './Reveal';

const ARTICLE_SLUGS = ['brossage', 'scanner-3d', 'bilan-gratuit'] as const;

const images = [
  'https://images.unsplash.com/photo-1584516151140-f79fde30d55f?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1728342057953-94bfad8f0e7e?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80&auto=format&fit=crop'
];

const tagColor = ['bg-brand-700', 'bg-brand-500', 'bg-amber-500'];

export function TipsNews() {
  const t = useTranslations('tips');
  const items = t.raw('items') as { tag: string; title: string; body: string }[];

  return (
    <section className="container py-20 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
          {t('eyebrow')}
        </p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
          {t('title')}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-brand-50 transition hover:-translate-y-1 hover:shadow-card">
              <Link href={`/articles/${ARTICLE_SLUGS[i]}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={images[i % images.length]}
                    alt=""
                    fill
                    sizes="(min-width:768px) 33vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute start-4 top-4 rounded-full ${tagColor[i % tagColor.length]} px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white`}
                  >
                    {it.tag}
                  </span>
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-base font-bold text-ink">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{it.body}</p>
                <Link
                  href={`/articles/${ARTICLE_SLUGS[i]}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition hover:underline"
                >
                  {t('readMore')}
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
