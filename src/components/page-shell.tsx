import {Link} from '@/i18n/navigation';
import {cn} from '@/lib/utils';
import {ArrowLeft} from 'lucide-react';
import type {ComponentProps, ReactNode} from 'react';

export type HeroMetric = {
  value: string;
  label: string;
  note?: string;
};

export function PageContainer({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[92rem] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14', className)}>
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  metrics,
  artwork,
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  metrics?: HeroMetric[];
  artwork?: ReactNode | false;
  className?: string;
}) {
  const showArtwork = artwork !== false;

  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)] px-6 py-8 shadow-[var(--shadow-hero)] sm:px-8 sm:py-10 lg:px-12 lg:py-12',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,var(--hero-sheen),transparent_38%),radial-gradient(circle_at_top_right,rgba(215,178,110,0.18),transparent_24%),var(--surface)]" />
      <div className="pointer-events-none absolute inset-0 hairline-grid opacity-45 [mask-image:radial-gradient(circle_at_center,black_34%,transparent_82%)]" />
      <div className="pointer-events-none absolute -left-14 top-10 h-40 w-40 rounded-full bg-[var(--accent-soft)] blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-20 right-8 h-52 w-52 rounded-full bg-[var(--accent-secondary-soft)] blur-3xl animate-float-reverse" />

      <div
        className={cn(
          'relative z-10 grid gap-8',
          showArtwork ? 'lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start' : ''
        )}
      >
        <div className="space-y-6">
          {eyebrow ? <p className="section-label">{eyebrow}</p> : null}

          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.96] text-[var(--text)] sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description ? (
              <p className="max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>

          {metrics?.length ? (
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={`${metric.value}-${metric.label}`}
                  className="surface-card surface-card-contrast p-4"
                >
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                    {metric.label}
                  </p>
                  {metric.note ? (
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{metric.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}

          {children ? <div className="pt-2">{children}</div> : null}
        </div>

        {showArtwork ? <div className="relative">{artwork ?? <HeroPrism />}</div> : null}
      </div>
    </section>
  );
}

export function SectionTitle({
  title,
  description,
  className
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn('space-y-3', className)}>
      <div className="h-1 w-20 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-secondary))]" />
      <h2 className="max-w-4xl text-3xl font-semibold text-[var(--text)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function SurfaceCard({
  children,
  className,
  tone = 'default'
}: {
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'muted' | 'contrast' | 'accent' | 'warning';
}) {
  return (
    <div
      className={cn(
        'surface-card transition-transform duration-500 hover:-translate-y-1',
        tone === 'muted' && 'surface-card-muted',
        tone === 'contrast' && 'surface-card-contrast',
        tone === 'accent' && 'surface-card-accent',
        tone === 'warning' && 'surface-card-warning',
        className
      )}
    >
      {children}
    </div>
  );
}

export function BackLink({
  href,
  label,
  className
}: {
  href: ComponentProps<typeof Link>['href'];
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'control-chip inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[var(--text)]',
        className
      )}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}

function HeroPrism() {
  return (
    <div className="relative mx-auto flex aspect-[4/5] w-full max-w-[22rem] items-center justify-center">
      {/* Warm encompassing glow */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(215,178,110,0.25),transparent_60%)] blur-2xl" />
      
      {/* Base soft circle representing unity */}
      <div className="absolute inset-[15%] rounded-full border border-white/35 bg-[linear-gradient(145deg,rgba(255,255,255,0.3),rgba(255,255,255,0.05))] shadow-[0_24px_80px_-35px_rgba(14,29,25,0.4)] animate-float-slow" />
      
      {/* Petal/Embrace Right - reaching left, representing support */}
      <div className="absolute inset-y-[25%] right-[15%] w-[55%] rounded-[3rem] rounded-tl-full rounded-br-full border border-[var(--border-strong)] bg-[linear-gradient(145deg,rgba(255,255,255,0.45),rgba(255,255,255,0.1)),var(--surface-strong)] shadow-[0_20px_64px_-30px_rgba(14,29,25,0.35)] backdrop-blur-sm animate-float-reverse" />
      
      {/* Petal/Embrace Left - reaching right, representing growth */}
      <div className="absolute inset-y-[35%] left-[20%] w-[50%] rounded-[2.5rem] rounded-tr-full rounded-bl-full border border-[var(--border-strong)] bg-[linear-gradient(140deg,var(--accent-highlight),var(--accent-secondary))] shadow-[0_16px_44px_-20px_rgba(14,29,25,0.4)] backdrop-blur-md animate-float-slow" />
      
      {/* Floating dot (spark of change) */}
      <div className="absolute right-[25%] top-[25%] h-12 w-12 rounded-full border border-white/35 bg-white/20 shadow-[0_12px_34px_-18px_rgba(14,29,25,0.4)] animate-glow-pan" />
      
      {/* Smaller floating dot (community seed) */}
      <div className="absolute bottom-[20%] left-[30%] h-8 w-8 rounded-full border border-[var(--border-strong)] bg-[linear-gradient(145deg,rgba(215,178,110,0.3),rgba(255,255,255,0.05))] shadow-[0_16px_42px_-26px_rgba(14,29,25,0.4)] animate-float-reverse" />
    </div>
  );
}
