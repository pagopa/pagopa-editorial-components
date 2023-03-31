import Box from '@mui/material/Box';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import portrait from '../assets/Editorial/portrait.png';
import { Editorial } from '../../components/Editorial';
import { defaults } from './defaults';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: Editorial,
  title: 'Editorial/light',
  argTypes: {},
  args: defaults.args,
} as ComponentMeta<typeof Editorial>;

const Template: ComponentStory<typeof Editorial> = (args) => (
  <Editorial {...args} />
);

export const Standard = Template.bind({});

export const Wide = Template.bind({});
Wide.args = {
  width: 'wide',
};

export const Center = Template.bind({});
Center.args = {
  width: 'center',
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
  width: 'standard',
};

export const Solid = Template.bind({});
Solid.args = {
  pattern: 'solid',
  reversed: true,
};

export const BoldBodyElementExample = Template.bind({});
BoldBodyElementExample.args = {
  pattern: 'dots',
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
  width: 'wide',
  reversed: true,
  image: (
    <Box style={{ transform: 'rotate(45deg) scale(0.8)' }}>
      <img src={portrait} alt="another portrait" />
    </Box>
  ),
};

export const CtasElementExample = Template.bind({});
CtasElementExample.args = {
  ctaButtons: [
    <button key={1}>+</button>,
    {
      text: 'Scopri di più',
      onClick: () => {
        alert('Scopri di più');
      },
    },
  ],
};
