import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { HowTo, type HowToProps } from '../components/HowTo';

const icon = <AccountBalanceIcon fontSize="large" />;

const getSteps = (withIcons: boolean, withLink: boolean, numStep: number) => {
  const steps = [
    {
      ...(withIcons ? { icon } : {}),
      title: 'Sicuro',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',

      ...(withLink ? { link: { label: 'See more', href: '#' } } : {}),
    },
    {
      ...(withIcons ? { icon } : {}),
      title: 'Un risparmio di denaro per tutti: cittadini, imprese ed enti ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
      ...(withLink ? { link: { label: 'See more', href: '#' } } : {}),
    },
    {
      ...(withIcons ? { icon } : {}),
      title:
        'I tempi di attesa tra l’invio e la ricezione delle notifiche spariscono',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
      ...(withLink ? { link: { label: 'See more', href: '#' } } : {}),
    },
    {
      ...(withIcons ? { icon } : {}),
      title: 'La CO2 emessa per erogare il servizio diminuisce sensibilmente',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
      ...(withLink ? { link: { label: 'See more', href: '#' } } : {}),
    },
  ];

  return new Array(numStep)
    .fill(undefined as unknown as HowToProps['steps'])
    .map((_, i) => steps[i % steps.length]);
};

export default {
  title: 'HowTo Component',
  component: HowTo,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Come funziona',
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      defaultValue: 'light',
    },
    steps: {
      control: { type: 'number', min: 1, step: 1 },
      defaultValue: 4,
    },
    rowMaxSteps: {
      control: { type: 'number', min: 1, step: 1 },
      defaultValue: 4,
    },
    stepsAlignment: {
      control: { type: 'inline-radio' },
      defaultValue: 'center',
      options: ['left', 'center', 'right'],
    },
  },
} as ComponentMeta<typeof HowTo>;

const Template: ComponentStory<typeof HowTo> = (args) => {
  return <HowTo {...args} />;
};

export const WithIcons = (args: HowToProps) => {
  const steps = getSteps(true, false, args.steps as unknown as number);
  return <Template {...args} steps={steps} />;
};

export const NoIcons = (args: HowToProps) => {
  const steps = getSteps(false, false, args.steps as unknown as number);
  return <Template {...args} steps={steps} />;
};

export const WithLinks = (args: HowToProps) => {
  const steps = getSteps(false, true, args.steps as unknown as number);
  return <Template {...args} steps={steps} />;
};
