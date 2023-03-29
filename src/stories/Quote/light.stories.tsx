import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Quote, { type QuoteProps } from '../../components/Quote';
import { quoteCommonProps, background } from './quoteCommons';
import heroLightSolidBackground from '../assets/hero-solid-light.jpg';

export default {
  title: 'Quote/light',
  component: Quote,
} as ComponentMeta<typeof Quote>;

const defaults: Partial<QuoteProps> = {
  ...quoteCommonProps,
  theme: 'light',
  size: 'big',
};

const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />;

export const QuoteBigWithBackground = Template.bind({});
QuoteBigWithBackground.args = {
  background,
  ...defaults,
};

export const QuoteSmallSolidNoButtons = Template.bind({});
QuoteSmallSolidNoButtons.args = {
  subtitle:
    'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa',
  theme: 'light',
};

export const QuoteSolid = Template.bind({});
QuoteSolid.args = {
  ...defaults,
  background: heroLightSolidBackground,
};
