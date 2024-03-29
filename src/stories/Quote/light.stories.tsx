import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Quote, { type QuoteProps } from '../../components/Quote/Quote';
import { quoteCommonProps, background } from './quoteCommons';
import heroLightSolidBackground from '../assets/hero-solid-light.jpg';

export default {
  title: 'Quote/light',
  component: Quote,
} as ComponentMeta<typeof Quote>;

const defaults: Partial<QuoteProps> = {
  ...quoteCommonProps,
  theme: 'light',
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
  background: (
    <img
      style={{ zIndex: -10, position: 'absolute', left: 0, width: '100%' }}
      src={heroLightSolidBackground}
      alt="test"
    />
  ),
};
