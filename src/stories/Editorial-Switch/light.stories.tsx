import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { EditorialSwitch } from '../../components/Editorial-Switch';
import editorialSwitchDefaults from './default';

export default {
  title: 'EditorialSwitch/Light',
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

export const LightThemeStandard = Template.bind({});
LightThemeStandard.args = {
  width: 'standard',
  theme: 'light',
};

export const LightThemeWide = Template.bind({});
LightThemeWide.args = {
  width: 'wide',
  theme: 'light',
};

export const LightThemeReversed = Template.bind({});
LightThemeReversed.args = {
  reversed: true,
  theme: 'light',
};
