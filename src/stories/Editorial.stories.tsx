import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Editorial, { type EditorialProps } from '../components/Editorial';
import regular from '../assets/Editorial/regular.png';
import { Box } from '@mui/system';

export default {
  component: Editorial,
  title: 'Editorial',
  argTypes: {},
} as ComponentMeta<typeof Editorial>;

const Template: ComponentStory<typeof Editorial> = (args) => {
  const backgroundColor =
    args.theme === 'dark' ? 'primary.dark' : 'background.paper';
  return (
    <Box paddingX="24px" paddingY="5%" bgcolor={backgroundColor}>
      <Editorial {...args} />
    </Box>
  );
};

const ctaButtons: EditorialProps['ctaButtons'] = [
  {
    text: 'Scopri di più',
  },
  {
    text: 'Accedi',
  },
];

export const Light = Template.bind({});
Light.args = {
  theme: 'light',
  image: { src: regular, alt: 'a random guy' },
  eyelet: 'per i cittadini',
  title: 'Non perderti più nessuna notifica',
  body: "Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro.",
  ctaButtons,
};
