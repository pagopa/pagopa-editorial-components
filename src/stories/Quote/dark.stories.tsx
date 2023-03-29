import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Quote, { type QuoteProps } from '../../components/Quote';
import { quoteCommonProps, background } from './quoteCommons';
import heroDarkSolidBackground from '../assets/hero-solid-dark.jpg';

export default {
  title: 'Quote/dark',
  component: Quote,
} as ComponentMeta<typeof Quote>;

const defaults: Partial<QuoteProps> = {
  ...quoteCommonProps,
  theme: 'dark',
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
  theme: 'dark',
};

export const QuoteSolid = Template.bind({});
QuoteSolid.args = {
  ...defaults,
  background: heroDarkSolidBackground,
};
