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
    <div
      className={cn(
        'mx-auto w-full max-w-[92rem] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12',
        className
      )}
    >
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
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
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-strong)] px-5 py-6 shadow-[var(--shadow-card)] sm:px-7 sm:py-7 lg:px-8 lg:py-8',
        className
      )}
    >
      {/* Base surface */}
      <div className="pointer-events-none absolute inset-0 bg-[var(--surface)]" />

      {/* Gradient depth — Mastra-style radial glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_68%_52%_at_0%_0%,var(--glow-primary),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_52%_42%_at_100%_100%,var(--glow-secondary),transparent_52%)]" />

      {/* Hairline grid — Mastra anti-grid pattern */}
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.22] [mask-image:linear-gradient(180deg,black,transparent_72%)]" />

      {/* Top sheen */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--hero-sheen),transparent_40%)]" />

      {/* Inner ring highlight — uses --ring-inner variable */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[var(--ring-inner)]" />

      <div className="relative z-10">
        <div className="space-y-7">
          {eyebrow ? <p className="section-label">{eyebrow}</p> : null}

          <div className="space-y-3">
            <h1 className="max-w-4xl text-3xl font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--text)] sm:text-4xl lg:text-[clamp(2.3rem,3.4vw,3.1rem)]">
              {title}
            </h1>

            {description ? (
              <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                {description}
              </p>
            ) : null}
          </div>

          {children ? <div className="pt-0.5">{children}</div> : null}
        </div>
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
    <div className={cn('space-y-4', className)}>
      {/* Animated gradient rule */}
      <div className="flex items-center gap-3">
        <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]" />
        <div className="h-[2px] w-4 rounded-full bg-[var(--accent-soft)]" />
      </div>
      <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.038em] text-[var(--text)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function SurfaceCard({
  children,
  className,
  tone = 'default',
  interactive = true
}: {
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'muted' | 'contrast' | 'accent' | 'warning';
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        'surface-card',
        interactive && 'surface-card-interactive',
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
