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
        'relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border-strong)] px-6 py-9 shadow-[var(--shadow-hero)] sm:px-8 sm:py-11 lg:px-12 lg:py-14',
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

      <div
        className={cn(
          'relative z-10 grid gap-8',
          showArtwork
            ? 'lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start'
            : ''
        )}
      >
        <div className="space-y-7">
          {eyebrow ? <p className="section-label">{eyebrow}</p> : null}

          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.94] tracking-[-0.04em] text-[var(--text)] sm:text-5xl lg:text-[clamp(2.8rem,4vw,3.6rem)]">
              {title}
            </h1>

            {description ? (
              <p className="max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-[1.0625rem] sm:leading-[1.85]">
                {description}
              </p>
            ) : null}
          </div>

          {metrics?.length ? (
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={`${metric.value}-${metric.label}`}
                  className="surface-card surface-card-contrast rounded-[var(--radius-lg)] p-4"
                >
                  <p className="text-[1.7rem] font-semibold leading-none tracking-[-0.05em] text-[var(--text)]">
                    {metric.value}
                  </p>
                  <p className="label-xs mt-2">{metric.label}</p>
                  {metric.note ? (
                    <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{metric.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}

          {children ? <div className="pt-1">{children}</div> : null}
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

function HeroPrism() {
  return (
    <div className="relative mx-auto flex aspect-[4/5] w-full max-w-[22rem] select-none items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle,var(--glow-primary),transparent_70%)] blur-3xl" />

      {/* Back plate */}
      <div className="absolute inset-[10%] rounded-[2.25rem] border border-[var(--border)] bg-[var(--surface-muted)] shadow-[var(--shadow-sm)]" />

      {/* Right floating panel */}
      <div className="absolute inset-y-[26%] right-[11%] w-[52%] rounded-[2rem] border border-[var(--border-strong)] bg-[var(--surface-strong)] shadow-[var(--shadow-card)]" />

      {/* Accent gradient shape */}
      <div className="absolute inset-y-[38%] left-[15%] w-[46%] rounded-[2rem] border border-[var(--border-strong)] bg-gradient-to-br from-[var(--accent-highlight)] to-[var(--accent-secondary)] shadow-[var(--shadow-accent)]" />

      {/* Floating orbs */}
      <div className="absolute right-[22%] top-[22%] h-11 w-11 rounded-full border border-[var(--border-strong)] bg-tint/55 shadow-[var(--shadow-sm)]" />
      <div className="absolute bottom-[18%] left-[28%] h-7 w-7 rounded-full border border-[var(--border)] bg-tint/42" />

      {/* Glow dot */}
      <div
        className="absolute left-[20%] top-[30%] h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_14px_5px_var(--glow-primary)]"
        style={{animation: 'glow-pulse 2.4s ease-in-out infinite'}}
      />

      {/* Teal spark */}
      <div
        className="absolute right-[16%] bottom-[32%] h-2 w-2 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_10px_4px_var(--glow-secondary)]"
        style={{animation: 'glow-pulse 3.1s ease-in-out infinite 0.8s'}}
      />
    </div>
  );
}
