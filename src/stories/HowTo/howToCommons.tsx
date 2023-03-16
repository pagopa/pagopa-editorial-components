import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import type { HowToProps } from 'components/HowTo';

const icon = <AccountBalanceIcon fontSize="large" />;

export const getSteps = (withIcons: boolean, numStep: number) => {
  const steps = [
    {
      ...(withIcons ? { icon } : {}),
      title: 'Sicuro',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
    },
    {
      ...(withIcons ? { icon } : {}),
      title: 'Un risparmio di denaro per tutti: cittadini, imprese ed enti ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
    },
    {
      ...(withIcons ? { icon } : {}),
      title:
        'I tempi di attesa tra l’invio e la ricezione delle notifiche spariscono',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
    },
    {
      ...(withIcons ? { icon } : {}),
      title: 'La CO2 emessa per erogare il servizio diminuisce sensibilmente',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
    },
  ];

  return new Array(numStep)
    .fill(undefined as unknown as HowToProps['steps'])
    .map((_, i) => steps[i % steps.length]);
};

export const howToLink = { href: '#', label: 'See more' };
