import { PageSection } from '@/components/app/shell/PageSection';

export default function ProjetsPage() {
  return (
    <PageSection
      title="Pilotage projets"
      description="Lecture simple de l’avancement des projets avec priorités, risques et capacité disponible."
      cards={[
        {
          title: 'Projets en cours',
          description: 'Chantiers actifs nécessitant coordination quotidienne.',
          metric: '11 projets',
        },
        {
          title: 'Projets à lancer',
          description: 'Dossiers validés en attente de planification.',
          metric: '5 lancements',
        },
        {
          title: 'Risque de dérive',
          description: 'Projets sous surveillance budgétaire ou calendrier.',
          metric: '3 projets',
        },
        {
          title: 'Capacité équipe',
          description: 'Disponibilité consolidée des pôles internes.',
          metric: '68% libre',
        },
        {
          title: 'Points de validation',
          description: 'Étapes livrables à confirmer cette semaine.',
          metric: '17 étapes',
        },
        {
          title: 'Coordination ON-SET',
          description: 'Lots nécessitant une présence terrain.',
          metric: '6 lots',
        },
      ]}
    />
  );
}
