import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Header } from '../../components/Header';
import { defaults } from './defaults';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: Header,
  title: 'Header/Light',
  argTypes: {},
  args: defaults.args,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Standard = Template.bind({});

export const WithButtons = Template.bind({});
WithButtons.args = {
  ...defaults.args,
  ctaButtons: defaults.ctaButtons,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  ...defaults.args,
  avatar: defaults.avatar,
};

export const InBeta = Template.bind({});
InBeta.args = {
  ...defaults.args,
  beta: true,
};
