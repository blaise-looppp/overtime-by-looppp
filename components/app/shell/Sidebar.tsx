'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

import { cn } from '@/lib/utils';
import { appNavItems } from '@/components/app/shell/config';
import { Button } from '@/components/shared/ui/button';

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onOpenMobile: () => void;
  onCloseMobile: () => void;
};

function SidebarContent({
  collapsed,
  onToggleCollapse,
  onNavigate,
}: {
  collapsed: boolean;
  onToggleCollapse: () => void;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div
        className={cn(
          'mb-6 flex items-center border-b border-border pb-4',
          collapsed ? 'justify-center' : 'justify-between',
        )}
      >
        <div className={cn('flex items-center gap-3', collapsed && 'gap-0')}>
          <div className="flex size-8 items-center justify-center rounded-md bg-primary-500 text-secondary-900 font-semibold">
            O
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-semibold leading-none">Overtime</p>
              <p className="text-xs text-muted-foreground">by LOOPPP</p>
            </div>
          )}
        </div>
        {!collapsed && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            className="hidden md:inline-flex"
            aria-label="Réduire la navigation"
          >
            <PanelLeftClose className="size-4" />
          </Button>
        )}
      </div>

      {collapsed && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className="mb-4 hidden self-center md:inline-flex"
          aria-label="Développer la navigation"
        >
          <PanelLeftOpen className="size-4" />
        </Button>
      )}

      <nav className="space-y-2">
        {appNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                'relative flex items-center rounded-full px-3 py-2 text-sm transition-colors',
                collapsed ? 'justify-center' : 'justify-start',
                isActive
                  ? 'bg-primary-100/70 text-foreground dark:bg-primary-900/20'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              {isActive && (
                <span className="absolute left-1 h-5 w-1 rounded-full bg-primary-500" />
              )}
              <span className="truncate">
                {collapsed ? item.label.slice(0, 1) : item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export function AppSidebar({
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onOpenMobile,
  onCloseMobile,
}: SidebarProps) {
  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={onOpenMobile}
        className="fixed left-4 top-4 z-50 md:hidden"
        aria-label="Ouvrir la navigation"
      >
        <Menu className="size-5" />
      </Button>

      <aside
        className={cn(
          'hidden border-r border-border bg-card/80 p-4 backdrop-blur md:flex md:sticky md:top-0 md:h-screen',
          collapsed ? 'md:w-20' : 'md:w-72',
        )}
      >
        <SidebarContent
          collapsed={collapsed}
          onToggleCollapse={onToggleCollapse}
        />
      </aside>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity md:hidden',
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onCloseMobile}
      />
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-card p-4 transition-transform md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <SidebarContent
          collapsed={false}
          onToggleCollapse={onToggleCollapse}
          onNavigate={onCloseMobile}
        />
      </aside>
    </>
  );
}
