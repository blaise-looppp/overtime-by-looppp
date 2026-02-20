import { PageSection } from '@/components/app/shell/PageSection';

export default function FreelancesPage() {
  return (
    <PageSection
      title="Réseau freelances"
      description="Suivi des profils, disponibilités et qualité de mission pour renforcer la continuité opérationnelle."
      cards={[
        {
          title: 'Profils actifs',
          description: 'Freelances actuellement engagés sur une mission.',
          metric: '42 profils',
        },
        {
          title: 'Disponibles sous 48h',
          description: 'Ressources prêtes à intervenir rapidement.',
          metric: '27 profils',
        },
        {
          title: 'Nouveaux candidats',
          description: 'Profils reçus et en cours de qualification.',
          metric: '13 candidatures',
        },
        {
          title: 'Évaluations positives',
          description: 'Retours mission avec note supérieure à 4/5.',
          metric: '91%',
        },
        {
          title: 'Compétences SETBUILDER',
          description: 'Profils validés sur les tâches de préparation.',
          metric: '18 experts',
        },
        {
          title: 'Priorités STRIKE',
          description: 'Renforts à sécuriser en anticipation de blocage.',
          metric: '4 besoins',
        },
      ]}
    />
  );
}
