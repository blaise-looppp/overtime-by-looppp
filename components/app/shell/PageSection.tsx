import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shared/ui/card';

type PageCard = {
  title: string;
  description: string;
  metric: string;
};

export function PageSection({
  title,
  description,
  cards,
}: {
  title: string;
  description: string;
  cards: PageCard[];
}) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="max-w-3xl text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Card
            key={card.title}
            className="rounded-xl border-border bg-card/70 shadow-none"
          >
            <CardHeader className="space-y-1">
              <CardTitle className="text-lg">{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-primary-700 dark:text-primary-300">
                {card.metric}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
