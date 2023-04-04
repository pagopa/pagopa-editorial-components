import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Abstract, type AbstractProps } from '../../components/Abstract';
import { defaultValues } from './abstractCommons';
import abstractImage from '../assets/abstract_image.jpeg';

export default {
  title: 'Abstract/dark',
  component: Abstract,
} as ComponentMeta<typeof Abstract>;

const defaults: Partial<AbstractProps> = {
  ...defaultValues,
  layout: 'left',
  theme: 'dark',
};

const Template: ComponentStory<typeof Abstract> = (args) => (
  <Abstract {...args} />
);

export const WithoutBackground = Template.bind({});
WithoutBackground.args = { ...defaults };

export const WithBackground = Template.bind({});
WithBackground.args = {
  ...defaults,
  background: abstractImage,
};
