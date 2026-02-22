import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export function LearningBreadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-5 text-xs text-slate-600 dark:text-slate-300"
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li
              key={`${crumb.label}-${index}`}
              className="flex items-center gap-1.5"
            >
              {crumb.href && !isLast ? (
                <Link
                  href={crumb.href}
                  className="rounded px-1.5 py-0.5 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast
                      ? "font-semibold text-slate-900 dark:text-slate-100"
                      : ""
                  }
                >
                  {crumb.label}
                </span>
              )}
              {!isLast && <span aria-hidden>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
