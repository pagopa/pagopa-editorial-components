import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Header } from '../../components/Header';
import { defaults } from './defaults';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: Header,
  title: 'Header/dark',
  argTypes: {},
  args: { ...defaults.args, theme: 'dark' },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Standard = Template.bind({});

export const WithButtons = Template.bind({});
WithButtons.args = {
  ctaButtons: defaults.ctaButtons.dark,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  avatar: defaults.avatar,
};

export const InBeta = Template.bind({});
InBeta.args = {
  beta: true,
};
