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
    <div className={cn('mx-auto w-full max-w-[92rem] px-4 py-8 sm:px-6 sm:py-9 lg:px-10 lg:py-12', className)}>
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
        'relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)] px-6 py-8 shadow-[var(--shadow-hero)] sm:px-8 sm:py-9 lg:px-12 lg:py-10',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--hero-sheen),transparent_42%),var(--surface)]" />
      <div className="pointer-events-none absolute inset-0 hairline-grid opacity-20 [mask-image:linear-gradient(180deg,black,transparent_80%)]" />

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
        'surface-card transition-transform duration-300 hover:-translate-y-0.5',
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
      <div className="absolute inset-[12%] rounded-[2.4rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.46),rgba(255,255,255,0.08))]" />
      <div className="absolute inset-y-[24%] right-[14%] w-[54%] rounded-[3rem] rounded-tl-full rounded-br-full border border-[var(--border-strong)] bg-[var(--surface-strong)] shadow-[var(--shadow-card)]" />
      <div className="absolute inset-y-[36%] left-[18%] w-[48%] rounded-[2.4rem] rounded-tr-full rounded-bl-full border border-[var(--border-strong)] bg-[linear-gradient(140deg,var(--accent-highlight),var(--accent-secondary))]" />
      <div className="absolute right-[24%] top-[25%] h-10 w-10 rounded-full border border-[var(--border-strong)] bg-white/50" />
      <div className="absolute bottom-[20%] left-[30%] h-7 w-7 rounded-full border border-[var(--border)] bg-white/40" />
    </div>
  );
}
