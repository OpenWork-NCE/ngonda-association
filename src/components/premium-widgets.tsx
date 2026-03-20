import type {TeamMember} from '@/data/site-content';
import {cn} from '@/lib/utils';
import type {ReactNode} from 'react';

type WidgetMetric = {
  label: string;
  value: string;
  note?: string;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export function SpatialWireframeWidget({
  title,
  description,
  className
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn('widget-shell p-5 sm:p-6', className)}>
      <div className="widget-glow-bg" />
      <div className="relative z-10 space-y-4">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
          Strategic View
        </p>
        <h3 className="text-2xl font-semibold leading-tight text-[var(--text)]">{title}</h3>
        <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">{description}</p>
      </div>

      <div className="relative mt-6 h-48">
        <div className="widget-grid-3d h-full w-full" />
        <div className="wire-orb absolute left-[12%] top-[16%] h-16 w-16 animate-float-slow" />
        <div className="wire-orb absolute right-[18%] top-[22%] h-10 w-10 animate-float-reverse" />
        <div className="wire-cube absolute bottom-[18%] left-[35%] h-12 w-12 animate-float-slow" />
        <div className="wire-cube absolute right-[16%] top-[54%] h-9 w-9 animate-float-reverse" />
        <div className="widget-spark left-[18%] top-[66%] h-2.5 w-2.5" />
        <div className="widget-spark right-[22%] top-[44%] h-2 w-2 [animation-delay:0.4s]" />
      </div>
    </div>
  );
}

export function MetricGridWidget({
  title,
  metrics,
  children,
  className
}: {
  title: string;
  metrics: WidgetMetric[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('widget-shell p-5 sm:p-6', className)}>
      <div className="widget-glow-bg" />
      <div className="relative z-10">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
          Key Highlights
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">{title}</h3>

        <div className="mt-5 grid gap-3">
          {metrics.map((item) => (
            <div
              key={`${item.label}-${item.value}`}
              className="rounded-[1.2rem] border border-[var(--border)] bg-white/30 px-4 py-3"
            >
              <div className="flex items-end justify-between gap-3">
                <p className="text-xl font-semibold tracking-[-0.03em] text-[var(--text)]">
                  {item.value}
                </p>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                  {item.label}
                </p>
              </div>
              {item.note ? (
                <p className="mt-2 text-xs leading-6 text-[var(--muted)]">{item.note}</p>
              ) : null}
            </div>
          ))}
        </div>

        {children ? <div className="mt-5">{children}</div> : null}
      </div>
    </div>
  );
}

export function TeamMemberWidget({
  member,
  index,
  locale,
  className
}: {
  member: TeamMember;
  index: number;
  locale: 'de' | 'fr';
  className?: string;
}) {
  const variant =
    index % 3 === 0
      ? 'bg-[linear-gradient(145deg,rgba(255,255,255,0.24),transparent_44%),var(--surface)]'
      : index % 3 === 1
        ? 'bg-[linear-gradient(145deg,rgba(255,255,255,0.2),transparent_44%),var(--surface-contrast)]'
        : 'bg-[linear-gradient(145deg,rgba(255,255,255,0.2),transparent_44%),var(--surface-muted)]';

  return (
    <article className={cn('widget-shell p-5 sm:p-6', className)}>
      <div className="widget-glow-bg" />
      <div className={cn('absolute inset-0 rounded-[1.5rem] opacity-80', variant)} />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/35 px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[0.62rem] text-[var(--text)]">
            {index + 1}
          </span>
          {locale === 'de' ? 'Leitung' : 'Direction'}
        </div>
        <div className="wire-orb h-10 w-10" />
      </div>

      <div className="relative z-10 mt-5 grid grid-cols-[auto_1fr] items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] border border-[var(--border)] bg-white/40 text-lg font-semibold text-[var(--text)]">
          {getInitials(member.name)}
        </div>
        <div>
          <h3 className="text-2xl font-semibold leading-tight text-[var(--text)]">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold text-[var(--accent)]">{member.role}</p>
        </div>
      </div>

      <p className="relative z-10 mt-4 text-sm leading-7 text-[var(--muted)]">{member.subtitle}</p>

      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-[var(--border)] bg-white/35 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
          {locale === 'de' ? 'Governance' : 'Gouvernance'}
        </span>
        <span className="rounded-full border border-[var(--border)] bg-white/35 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
          {locale === 'de' ? 'Field Lead' : 'Lead terrain'}
        </span>
      </div>
    </article>
  );
}
