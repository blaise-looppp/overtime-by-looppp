import { PageSection } from '@/components/app/shell/PageSection';

export default function PlanningPage() {
  return (
    <PageSection
      title="Planning équipe"
      description="Vue calme des créneaux de production avec suivi des statuts SETBUILDER, FREELANCE, ON-SET et STRIKE."
      cards={[
        {
          title: 'Créneaux validés',
          description: 'Affectations confirmées sur les 7 prochains jours.',
          metric: '24 créneaux',
        },
        {
          title: 'Demandes en attente',
          description: 'Créneaux à arbitrer avant validation finale.',
          metric: '8 demandes',
        },
        {
          title: 'Tension planning',
          description: 'Postes sensibles nécessitant un renfort immédiat.',
          metric: '3 alertes',
        },
        {
          title: 'Charge SETBUILDER',
          description: 'Volume actuel pour la cellule de préparation.',
          metric: '71% occupé',
        },
        {
          title: 'Suivi ON-SET',
          description: 'Présences confirmées sur les tournages du jour.',
          metric: '14 actifs',
        },
        {
          title: 'Blocages STRIKE',
          description: 'Signalements opérationnels à résoudre.',
          metric: '2 blocages',
        },
      ]}
    />
  );
}
