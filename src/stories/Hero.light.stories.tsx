import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Hero, { type HeroProps } from '../components/Hero';
import hero_image from './assets/hero_image.png';
import hero_background from './assets/hero_background.jpg';
import hero_background_inverse from './assets/hero_background_inverse.jpg';

export default {
  title: 'Hero/light',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const title = 'Lorem ipsum dolor sit amet, consectetur';
const subtitle =
  'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
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

const common: Partial<HeroProps> = {
  title,
  subtitle,
  ctaButtons,
  theme: 'light',
};

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const HeroBigWithBackground = Template.bind({});
HeroBigWithBackground.args = {
  background: hero_background,
  size: 'big',
  ...common,
};

export const HeroSmallWithBackground = Template.bind({});
HeroSmallWithBackground.args = {
  background: hero_background,
  size: 'small',
  ...common,
};

export const HeroBigWithBackgroundTextLeft = Template.bind({});
HeroBigWithBackgroundTextLeft.args = {
  background: hero_background_inverse,
  size: 'big',
  inverse: true,
  ...common,
};

export const HeroSmallWithBackgroundTextLeft = Template.bind({});
HeroSmallWithBackgroundTextLeft.args = {
  background: hero_background_inverse,
  size: 'small',
  inverse: true,
  ...common,
};

export const HeroSmallWithImage = Template.bind({});
HeroSmallWithImage.args = {
  image: hero_image,
  size: 'small',
  ...common,
};
