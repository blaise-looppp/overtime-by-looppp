import { PageSection } from '@/components/app/shell/PageSection';

export default function AnalyticsPage() {
  return (
    <PageSection
      title="Analytics opérationnelles"
      description="Synthèse des volumes, de la ponctualité et des coûts pour orienter les décisions de coordination."
      cards={[
        {
          title: 'Ponctualité globale',
          description: 'Respect des horaires sur les interventions planifiées.',
          metric: '93%',
        },
        {
          title: 'Temps moyen de réponse',
          description: 'Délai entre demande et confirmation de mission.',
          metric: '4h 20',
        },
        {
          title: 'Volume FREELANCE',
          description: 'Interventions activées sur la période en cours.',
          metric: '57 missions',
        },
        {
          title: 'Coût journalier',
          description: 'Projection des dépenses de staffing.',
          metric: '12 400 €',
        },
        {
          title: 'Taux de remplacement',
          description: 'Remplacements gérés sans impact de production.',
          metric: '86%',
        },
        {
          title: 'Disponibilités qualifiées',
          description: 'Profils prêts à démarrer sous 24h.',
          metric: '19 profils',
        },
      ]}
    />
  );
}
