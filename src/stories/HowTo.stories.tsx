import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HowTo from '../components/HowTo';
import type { HowToProps } from '../components/HowTo';

export default {
  title: 'HowTo Component',
  component: HowTo,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Come funziona',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      defaultValue: 'light',
    },
    steps: {
      control: false,
    },
  },
} as ComponentMeta<typeof HowTo>;

const Template: ComponentStory<typeof HowTo> = (args) => <HowTo {...args} />;

export const WithIcons = (args: HowToProps) => (
  <Template
    {...args}
    steps={[
      {
        Icon: AccountBalanceIcon,
        title: 'Sicuro',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
      },
      {
        Icon: AccountBalanceIcon,
        title: 'Un risparmio di denaro per tutti: cittadini, imprese ed enti ',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
      },
      {
        Icon: AccountBalanceIcon,
        title:
          'I tempi di attesa tra l’invio e la ricezione delle notifiche spariscono',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
      },
      {
        Icon: AccountBalanceIcon,
        title: 'La CO2 emessa per erogare il servizio diminuisce sensibilmente',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
      },
    ]}
  />
);

export const NoIcons = (args: HowToProps) => (
  <Template
    {...args}
    steps={[
      {
        title: 'Sicuro',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
      },
      {
        title: 'Un risparmio di denaro per tutti: cittadini, imprese ed enti ',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
      },
      {
        title:
          'I tempi di attesa tra l’invio e la ricezione delle notifiche spariscono',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
      },
      {
        title: 'La CO2 emessa per erogare il servizio diminuisce sensibilmente',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
      },
    ]}
  />
);
