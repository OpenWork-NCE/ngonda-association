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
      <div className="relative z-10 space-y-3">
        <p className="label-xs">Strategic View</p>
        <h3 className="text-2xl font-semibold leading-tight text-[var(--text)]">{title}</h3>
        <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">{description}</p>
      </div>

      <div className="relative z-10 mt-6 h-48">
        <div className="widget-grid-3d h-full w-full" />
        <div className="wire-orb absolute left-[12%] top-[16%] h-16 w-16 opacity-80" />
        <div className="wire-orb absolute right-[18%] top-[22%] h-10 w-10 opacity-68" />
        <div className="wire-cube absolute bottom-[18%] left-[35%] h-12 w-12 opacity-72" />
        <div className="wire-cube absolute right-[16%] top-[54%] h-9 w-9 opacity-68" />
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
        <p className="label-xs">Key Highlights</p>
        <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">{title}</h3>

        <div className="mt-5 grid gap-2.5">
          {metrics.map((item) => (
            <div
              key={`${item.label}-${item.value}`}
              className="rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/25 px-4 py-3 transition-all duration-[var(--dur-base)] hover:bg-tint/38 hover:border-[var(--border-strong)]"
            >
              <div className="flex items-end justify-between gap-3">
                <p className="text-xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                  {item.value}
                </p>
                <p className="label-xs pb-0.5">{item.label}</p>
              </div>
              {item.note ? (
                <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{item.note}</p>
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
  const variantBg =
    index % 3 === 0
      ? 'bg-[linear-gradient(145deg,var(--ring-inner),transparent_42%),var(--surface)]'
      : index % 3 === 1
        ? 'bg-[linear-gradient(145deg,var(--ring-inner),transparent_42%),var(--surface-contrast)]'
        : 'bg-[linear-gradient(145deg,var(--ring-inner),transparent_42%),var(--surface-muted)]';

  const avatarGradient =
    index % 3 === 0
      ? 'from-[var(--accent-soft)] to-[var(--accent-medium)]'
      : index % 3 === 1
        ? 'from-[var(--accent-secondary-soft)] to-[var(--accent-secondary-medium)]'
        : 'from-[var(--accent-soft)] to-[var(--accent-secondary-soft)]';

  return (
    <article className={cn('widget-shell p-5 sm:p-6', className)}>
      <div className="widget-glow-bg" />

      {/* Variant background tint */}
      <div className={cn('pointer-events-none absolute inset-0 rounded-[inherit] opacity-80', variantBg)} />

      {/* Header row */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-tint/28 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] text-[0.58rem] font-bold text-white">
            {index + 1}
          </span>
          {locale === 'de' ? 'Leitung' : 'Direction'}
        </div>
        <div className="wire-orb h-9 w-9 opacity-70" />
      </div>

      {/* Member info */}
      <div className="relative z-10 mt-5 grid grid-cols-[auto_1fr] items-center gap-4">
        {/* Avatar with gradient ring */}
        <div className={cn(
          'flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-gradient-to-br text-lg font-bold text-[var(--text)]',
          avatarGradient
        )}>
          {getInitials(member.name)}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-xl font-semibold leading-tight text-[var(--text)]">
            {member.name}
          </h3>
          <p className="mt-1 truncate text-sm font-semibold text-[var(--accent)]">{member.role}</p>
        </div>
      </div>

      <p className="relative z-10 mt-4 text-sm leading-7 text-[var(--muted)]">{member.subtitle}</p>

      {/* Tags */}
      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        <span className="badge">
          {locale === 'de' ? 'Governance' : 'Gouvernance'}
        </span>
        <span className="badge">
          {locale === 'de' ? 'Field Lead' : 'Lead terrain'}
        </span>
      </div>
    </article>
  );
}
