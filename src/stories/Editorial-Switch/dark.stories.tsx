import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { EditorialSwitch } from '../../components/Editorial-Switch';
import editorialSwitchDefaults from './default';

export default {
  title: 'Editorial-Switch/Dark',
  component: EditorialSwitch,
  argTypes: {
    theme: {
      control: 'select',
      options: ['dark', 'light'],
    },
    width: {
      control: 'select',
      options: ['wide', 'standard', 'center'],
    },
    reversed: {
      control: 'boolean',
    },
  },
  args: {
    ...editorialSwitchDefaults.args,
  },
} as ComponentMeta<typeof EditorialSwitch>;

const Template: ComponentStory<typeof EditorialSwitch> = (args) => (
  <EditorialSwitch {...args} />
);

export const DarkThemeStandard = Template.bind({});
DarkThemeStandard.args = {
  width: 'standard',
  theme: 'dark',
};

export const DarkThemeWide = Template.bind({});
DarkThemeWide.args = {
  width: 'wide',
  theme: 'dark',
};

export const DarkThemeReversed = Template.bind({});
DarkThemeReversed.args = {
  reversed: true,
  theme: 'dark',
};
