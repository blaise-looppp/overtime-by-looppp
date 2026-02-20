export const appNavItems = [
  { href: '/planning', label: 'Planning' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/projets', label: 'Projets' },
  { href: '/freelances', label: 'Freelances' },
] as const;

export const routeHeaderConfig: Record<
  string,
  { title: string; actionLabel: string }
> = {
  '/planning': { title: 'Planning', actionLabel: 'Nouveau créneau' },
  '/analytics': { title: 'Analytics', actionLabel: 'Exporter le rapport' },
  '/projets': { title: 'Projets', actionLabel: 'Nouveau projet' },
  '/freelances': { title: 'Freelances', actionLabel: 'Inviter un freelance' },
};
