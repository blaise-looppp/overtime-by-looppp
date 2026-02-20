'use client';

import { useMemo } from 'react';
import { ChevronDown, Moon, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import { routeHeaderConfig } from '@/components/app/shell/config';
import { Button } from '@/components/shared/ui/button';

export function AppHeader() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  const currentConfig = useMemo(() => {
    return (
      routeHeaderConfig[pathname] ?? {
        title: 'Planning',
        actionLabel: 'Nouvelle action',
      }
    );
  }, [pathname]);

  const isDark = resolvedTheme === 'dark';

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-4 py-4 backdrop-blur sm:px-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-2xl font-semibold">{currentConfig.title}</h1>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant="outlineSecondary"
            className="gap-2 rounded-full"
          >
            Période: Semaine en cours
            <ChevronDown className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outlineSecondary"
            size="icon"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button type="button" variant="primary" className="rounded-full">
            {currentConfig.actionLabel}
          </Button>
        </div>
      </div>
    </header>
  );
}
