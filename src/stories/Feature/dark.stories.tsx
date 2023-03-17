import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Feature from '../../components/Feature/Feature';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const itemMockWithLink = [
  {
    icon: <AccountBoxIcon />,
    title: 'Sicuro',
    subtitle:
      'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
    linkTitle: 'Scopri di più',
    url: '',
  },
  {
    icon: <AccountBoxIcon />,
    title: 'Conveniente',
    subtitle: 'Un risparmio di denaro per tutti: cittadini imprese ed enti',
    linkTitle: 'Scopri di più',
    url: '',
  },
  {
    icon: <AccountBoxIcon />,
    title: 'Immediato',
    subtitle:
      "I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono",
    linkTitle: 'Scopri di più',
    url: '',
  },
];
const itemMockWithoutLink = [
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
export default {
  title: 'Feature/dark',
  args: {
    title: 'Title',
    items: itemMockWithLink,
    theme: 'dark',
    showCarouselMobile: false,
  },
  component: Feature,
} as ComponentMeta<typeof Feature>;

export const DefaultDark: ComponentStory<typeof Feature> = () => (
  <Feature
    showCarouselMobile={false}
    title="Title"
    theme="dark"
    items={itemMockWithLink}
  />
);

export const DefaultDarkWithoutLink: ComponentStory<typeof Feature> = () => (
  <Feature
    showCarouselMobile={false}
    title="Title"
    theme="dark"
    items={itemMockWithoutLink}
  />
);

export const CarouselDefaultDarkWithLink: ComponentStory<
  typeof Feature
> = () => (
  <Feature
    showCarouselMobile={true}
    title="Title"
    theme="dark"
    items={itemMockWithLink}
  />
);

export const CarouselDefaultDarkWithoutLink: ComponentStory<
  typeof Feature
> = () => (
  <Feature
    showCarouselMobile={true}
    title="Title"
    theme="dark"
    items={itemMockWithoutLink}
  />
);
