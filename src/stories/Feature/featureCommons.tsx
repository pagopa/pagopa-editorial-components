import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { type FeatureItem } from 'components/Feature/Feature';

export const itemMockWithoutLink: FeatureItem[] = [
  {
    icon: <AccountBoxIcon />,
    title: 'Sicuro',
    subtitle:
      'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
  },
  {
    icon: <AccountBoxIcon />,
    title: 'Conveniente',
    subtitle: 'Un risparmio di denaro per tutti: cittadini imprese ed enti',
  },
  {
    icon: <AccountBoxIcon />,
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
