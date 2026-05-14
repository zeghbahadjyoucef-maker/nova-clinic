import Image from 'next/image';

export function Logo({ className = 'h-14 w-14' }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Cabinet Dentaire NOVA"
      width={56}
      height={56}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  );
}

export function LogoWordmark() {
  return (
    <div className="flex items-center gap-3">
      <Logo className="h-14 w-14" />
      <div className="flex flex-col leading-none">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          Cabinet Dentaire
        </span>
        <span className="text-2xl font-extrabold tracking-tight text-brand-800">NOVA</span>
      </div>
    </div>
  );
}
