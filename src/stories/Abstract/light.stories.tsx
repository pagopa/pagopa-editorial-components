import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Abstract } from '../../components/Abstract';
import {
  defaultValues,
  descriptionComponent,
  imageComponent,
} from './abstractCommons';
import abstractImage from '../assets/abstract_image.jpeg';

export default {
  title: 'Abstract/light',
  component: Abstract,
  args: defaultValues,
} as ComponentMeta<typeof Abstract>;

const Template: ComponentStory<typeof Abstract> = (args) => {
  return <Abstract {...args} theme="light" />;
};

export const WithoutBackground = Template.bind({});

export const WithBackground = Template.bind({});
WithBackground.args = {
  background: abstractImage,
};

export const CustomBodyAndBackground = Template.bind({});
CustomBodyAndBackground.args = {
  description: descriptionComponent,
  background: imageComponent,
};
