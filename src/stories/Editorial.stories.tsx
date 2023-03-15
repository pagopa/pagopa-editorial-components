import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Editorial, type EditorialProps } from '../components/Editorial';
import regular from '../assets/Editorial/regular.png';
import portrait from '../assets/Editorial/portrait.png';
import Box from '@mui/material/Box';

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
    image: { src: regular, alt: 'a landscape photo' },
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

export const ReversedWide = Template.bind({});
ReversedWide.args = {
  reversed: true,
  width: 'wide',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  eyelet: '',
};

export const Dots = Template.bind({});
Dots.args = {
  pattern: 'dots',
  theme: 'dark',
  image: { src: portrait as string, alt: 'a portrait photo' },
  width: 'standard',
};

export const Solid = Template.bind({});
Solid.args = {
  pattern: 'solid',
  reversed: true,
};

export const BoldBodyElementExample = Template.bind({});
BoldBodyElementExample.args = {
  pattern: 'solid',
  reversed: true,
  body: (
    <p>
      Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli
      atti di notifica che ti inviano <b>Enti e Pubbliche Amministrazioni</b>,
      come multe o certificati elettorali. E, grazie all`integrazione con
      pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro.
    </p>
  ),
};

export const LabelImageElementExample = Template.bind({});
LabelImageElementExample.args = {
  pattern: 'none',
  image: (
    <Box>
      <img src={portrait} alt="another portrait" />
      <p>label example</p>
    </Box>
  ),
};

export const RotatedImageElementExample = Template.bind({});
RotatedImageElementExample.args = {
  pattern: 'solid',
  image: (
    <Box style={{ transform: 'rotate(45deg) scale(0.8)' }}>
      <img src={portrait} alt="another portrait" />
    </Box>
  ),
};
