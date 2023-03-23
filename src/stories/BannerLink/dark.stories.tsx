import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { BannerLink } from '../../components/BannerLink';
import { defaults } from './defaults';

export default {
  component: BannerLink,
  title: 'BannerLink/dark',
  argTypes: {},
  args: { ...defaults.args, theme: 'dark' },
} as ComponentMeta<typeof BannerLink>;

const Template: ComponentStory<typeof BannerLink> = (args) => (
  <BannerLink {...args} />
);

export const Standard = Template.bind({});

export const OneButton = Template.bind({});
OneButton.args = {
  ctaButtons: [
    {
      color: 'negative',
      variant: 'outlined',
      text: 'LEGGI LE FAQ',
      onClick: () => {
        alert('LEGGI LE FAQ');
      },
    },
  ],
};

export const TwoButtons = Template.bind({});
TwoButtons.args = {
  ctaButtons: defaults.ctaButtons,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  visibleIcon: true,
};

export const TwoButtonsAndIcon = Template.bind({});
TwoButtonsAndIcon.args = {
  visibleIcon: true,
  ctaButtons: defaults.ctaButtons,
};

export const BodyComponent = Template.bind({});
BodyComponent.args = {
  body: defaults.body,
  ctaButtons: defaults.ctaButtons,
};
