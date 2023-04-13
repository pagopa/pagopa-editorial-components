import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Quote, { type QuoteProps } from '../../components/Quote/Quote';
import { quoteCommonProps, background } from './quoteCommons';
import heroDarkSolidBackground from '../assets/hero-solid-dark.jpg';

export default {
  title: 'Quote/dark',
  component: Quote,
} as ComponentMeta<typeof Quote>;

const defaults: QuoteProps = {
  ...quoteCommonProps,
  theme: 'dark',
};

const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />;

export const QuoteBigWithBackground = Template.bind({});
QuoteBigWithBackground.args = {
  background,
  ...defaults,
};

export const QuoteSolid = Template.bind({});
QuoteSolid.args = {
  ...defaults,
  background: heroDarkSolidBackground,
};
