import { type FeatureItem } from 'components/Feature/FeatureStackItem';

export const itemMockWithoutLink: FeatureItem[] = [
  {
    stackIcon: { icon: 'AccountBox' },
    title: 'Sicuro',
    subtitle:
      'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
  },
  {
    stackIcon: { icon: 'AccountBox' },
    title: 'Conveniente',
    subtitle: 'Un risparmio di denaro per tutti: cittadini imprese ed enti',
  },
  {
    stackIcon: { icon: 'AccountBox' },
    title: 'Immediato',
    subtitle:
      "I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono",
  },
];

export const itemMockWithLink: FeatureItem[] = itemMockWithoutLink.map(
  (item) => ({
    ...item,
    link: {
      text: 'Scopri di più',
      url: '#',
    },
  })
);
