import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Hero, { type HeroProps } from '../../components/Hero';
import {
  heroCommonProps,
  background,
  backgroundInverse,
  image,
} from './heroCommons';
import heroDarkSolidBackground from '../assets/hero-solid-dark.jpg';

export default {
  title: 'Hero/dark',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const ctaButtons: HeroProps['ctaButtons'] = [
  {
    text: 'Scopri di più',
    color: 'negative',
    variant: 'outlined',
  },
  {
    text: 'Accedi',
    color: 'negative',
    variant: 'contained',
  },
];

const defaults: Partial<HeroProps> = {
  ...heroCommonProps,
  ctaButtons,
  theme: 'dark',
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

export const HeroSmallSolidNoButtons = Template.bind({});
HeroSmallSolidNoButtons.args = {
  size: 'small',
  title: 'FAQ',
  subtitle:
    'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa',
  theme: 'dark',
  ctaButtons: [],
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

export const HeroSolid = Template.bind({});
HeroSolid.args = {
  size: 'small',
  ...defaults,
  background: heroDarkSolidBackground,
  useHoverlay: false,
};

export const HeroBigWithBackgroundElement = Template.bind({});
HeroBigWithBackgroundElement.args = {
  background: (
    <img
      src={heroDarkSolidBackground}
      alt="alt image"
      style={{
        position: 'absolute',
        width: '100%',
        height: 'auto',
        zIndex: -1,
        left: 0,
        top: 0,
      }}
    />
  ),
  size: 'big',
  ...defaults,
};
