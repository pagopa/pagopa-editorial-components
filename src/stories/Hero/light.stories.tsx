import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Hero, { type HeroProps } from '../../components/Hero';
import {
  heroCommonProps,
  background,
  backgroundInverse,
  image,
} from './heroCommons';

export default {
  title: 'Hero/light',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const ctaButtons = [
  {
    text: 'Scopri di più',
    color: 'primary',
    variant: 'outlined',
  },
  {
    text: 'Accedi',
    color: 'primary',
    variant: 'contained',
  },
];

const defaults: Partial<HeroProps> = {
  ...heroCommonProps,
  ctaButtons,
  theme: 'light',
};

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const HeroBigWithBackground = Template.bind({});
HeroBigWithBackground.args = {
  background,
  size: 'big',
  ...defaults,
};

export const HeroSmallWithBackground = Template.bind({});
HeroSmallWithBackground.args = {
  background,
  size: 'small',
  ...defaults,
};

export const HeroBigWithBackgroundTextLeft = Template.bind({});
HeroBigWithBackgroundTextLeft.args = {
  background: backgroundInverse,
  size: 'big',
  inverse: true,
  ...defaults,
};

export const HeroSmallWithBackgroundTextLeft = Template.bind({});
HeroSmallWithBackgroundTextLeft.args = {
  background: backgroundInverse,
  size: 'small',
  inverse: true,
  ...defaults,
};

export const HeroSmallWithImage = Template.bind({});
HeroSmallWithImage.args = {
  image,
  size: 'small',
  ...defaults,
};
