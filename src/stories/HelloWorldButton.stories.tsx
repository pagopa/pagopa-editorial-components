import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import HelloWorldButton from '../components/HelloWorldButton';

export default {
  title: 'Hello World Button',
  component: HelloWorldButton,
  argTypes: {},
} as ComponentMeta<typeof HelloWorldButton>;

const Template: ComponentStory<typeof HelloWorldButton> = (args) => (
  <HelloWorldButton {...args} />
);

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
};
