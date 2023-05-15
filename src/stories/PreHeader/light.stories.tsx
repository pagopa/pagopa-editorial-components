import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { PreHeader } from '../../components/PreHeader';
import { defaults } from './defaults';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default {
  component: PreHeader,
  title: 'PreHeader/light',
  argTypes: {},
  args: defaults.args,
} as ComponentMeta<typeof PreHeader>;

const Template: ComponentStory<typeof PreHeader> = (args) => (
  <PreHeader {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  leftCtas: {
    theme: 'light',
    ctaButtons: [
      { text: 'Link', variant: 'naked', color: 'inherit', href: '#' },
    ],
  },
  rightCtas: {
    theme: 'light',
    ctaButtons: [
      {
        text: 'Assistenza',
        variant: 'naked',
        color: 'inherit',
        startIcon: <HelpOutlineIcon />,
        onClick: () => {
          alert('Assistenza');
        },
      },
    ],
  },
};
