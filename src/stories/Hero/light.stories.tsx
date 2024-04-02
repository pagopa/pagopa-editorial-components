import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Hero, { type HeroProps } from '../../components/Hero';
import {
  heroCommonProps,
  background,
  backgroundInverse,
  image,
} from './heroCommons';
import heroLightSolidBackground from '../assets/hero-solid-light.jpg';
import Typography from '@mui/material/Typography/Typography';

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

export const HeroHtmlBody = Template.bind({});
HeroHtmlBody.args = {
  ...defaults,
  background,
  subtitle: (
    <Typography variant="body1">
      Quis aute iure reprehenderit in <b>voluptate</b> velit esse cillum dolore
      eu fugiat nulla pariatur. <b>Excepteur</b> sint obcaecat cupiditat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
  ),
  size: 'big',
};

export const HeroMediumWithBackground = Template.bind({});
HeroMediumWithBackground.args = {
  background,
  size: 'medium',
  ...defaults,
};

export const HeroBigWithBackgroundTextLeft = Template.bind({});
HeroBigWithBackgroundTextLeft.args = {
  background: backgroundInverse,
  size: 'big',
  inverse: true,
  ...defaults,
};

export const HeroMediumWithBackgroundTextLeft = Template.bind({});
HeroMediumWithBackgroundTextLeft.args = {
  background: backgroundInverse,
  size: 'medium',
  inverse: true,
  ...defaults,
};

export const HeroMediumWithImage = Template.bind({});
HeroMediumWithImage.args = {
  image,
  size: 'medium',
  ...defaults,
};

export const HeroSolid = Template.bind({});
HeroSolid.args = {
  size: 'medium',
  ...defaults,
  background: heroLightSolidBackground,
  useHoverlay: false,
};

export const HeroSmallSolidNoButtons = Template.bind({});
HeroSmallSolidNoButtons.args = {
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
  size: 'small',
  title: 'FAQ',
  theme: 'light',
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
