import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Hero, { type HeroProps } from '../../components/Hero';
import {
  heroCommonProps,
  background,
  backgroundInverse,
  image,
} from './heroCommons';
import heroLightSolidBackground from '../assets/hero-solid-light.jpg';

export default {
  title: 'Hero/light',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const ctaButtons: HeroProps['ctaButtons'] = [
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

export const HeroSolid = Template.bind({});
HeroSolid.args = {
  size: 'small',
  ...defaults,
  background: heroLightSolidBackground,
  useHoverlay: false,
};

export const HeroBigWithBackgroundElement = Template.bind({});
HeroBigWithBackgroundElement.args = {
  background: (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
        left: 0,
        top: 0,
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${heroLightSolidBackground})`,
      }}
    />
  ),
  size: 'big',
  ...defaults,
};
