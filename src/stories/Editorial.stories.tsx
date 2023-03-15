import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Editorial, type EditorialProps } from '../components/Editorial';
import regular from '../assets/Editorial/regular.png';
import portrait from '../assets/Editorial/portrait.png';

const ctaButtons: EditorialProps['ctaButtons'] = [
  {
    text: 'Accedi',
  },
  {
    text: 'Scopri di più',
  },
];

export default {
  component: Editorial,
  title: 'Editorial',
  argTypes: {},
  args: {
    theme: 'light',
    image: { src: regular, alt: 'a random guy' },
    eyelet: 'per i cittadini',
    title: 'Non perderti più nessuna notifica',
    body: "Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro.",
    ctaButtons,
  },
} as ComponentMeta<typeof Editorial>;

const Template: ComponentStory<typeof Editorial> = (args) => (
  <Editorial {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
};

export const Reversed = Template.bind({});
Reversed.args = {
  reversed: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  eyelet: '',
};

export const Polka = Template.bind({});
Polka.args = {
  pattern: 'polka',
  theme: 'dark',
  image: { src: portrait as string, alt: '' },
  width: 'standard',
};

export const Solid = Template.bind({});
Solid.args = {
  pattern: 'solid',
  reversed: true,
};

export const Waves = Template.bind({});
Waves.args = {
  pattern: 'waves',
};
