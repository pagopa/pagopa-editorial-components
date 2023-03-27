import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Feature from '../../components/Feature/Feature';
import { itemMockWithLink, itemMockWithoutLink } from './featureCommons';

export default {
  title: 'Feature/light',
  component: Feature,
} as ComponentMeta<typeof Feature>;

type LightFeature = ComponentStory<typeof Feature>;

const Template: LightFeature = (args) => (
  <Feature {...args} title="title" theme="light" />
);

export const Default = Template.bind({});
Default.args = {
  items: itemMockWithLink,
};

export const WithoutLink = Template.bind({});
WithoutLink.args = {
  items: itemMockWithoutLink,
};

export const DefaultWithCarousel = Template.bind({});
DefaultWithCarousel.args = {
  items: itemMockWithLink,
  showCarouselMobile: true,
};

export const WithoutLinkWithCarousel = Template.bind({});
WithoutLinkWithCarousel.args = {
  items: itemMockWithoutLink,
  showCarouselMobile: true,
};

export const WithCustomColorBackground = Template.bind({});
WithCustomColorBackground.args = {
  items: itemMockWithLink,
  background: 'transparent',
  showCarouselMobile: true,
};
