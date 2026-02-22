"use client";

import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

type StyleDetailSidebarProps = {
  items: NavItem[];
};

export function StyleDetailSidebar({ items }: StyleDetailSidebarProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: [0, 0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [items]);

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="sd-surface rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          On This Page
        </p>
        <nav className="mt-4 space-y-2 text-sm">
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`sd-nav-link block rounded-lg border px-3 py-2 transition ${
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white shadow-sm dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
                    : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-100 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
