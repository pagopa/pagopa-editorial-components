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
  title: 'Feature/light',
  args: {
    title: 'Title',
    items: itemMockWithLink,
    theme: 'light',
    showCarouselMobile: false,
  },
  component: Feature,
} as ComponentMeta<typeof Feature>;

export const Default: ComponentStory<typeof Feature> = (args) => (
  <Feature {...args} items={itemMockWithLink} />
);

export const DefaultWithoutLink: ComponentStory<typeof Feature> = (args) => (
  <Feature {...args} items={itemMockWithoutLink} />
);

export const CarouselDefaultWithLink: ComponentStory<typeof Feature> = () => (
  <Feature
    showCarouselMobile={true}
    title="Title"
    theme="light"
    items={itemMockWithLink}
  />
);

export const CarouselDefaultWithoutLink: ComponentStory<
  typeof Feature
> = () => (
  <Feature
    showCarouselMobile={true}
    title="Title"
    theme="light"
    items={itemMockWithoutLink}
  />
);
