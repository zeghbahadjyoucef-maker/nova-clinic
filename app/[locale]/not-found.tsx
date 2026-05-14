import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold text-brand-700">404</h1>
      <p className="mt-3 text-ink-soft">Page introuvable / الصفحة غير موجودة</p>
      <Link
        href="/fr"
        className="mt-6 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
      >
        Retour à l'accueil / العودة إلى الرئيسية
      </Link>
    </main>
  );
}
