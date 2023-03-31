import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { BannerLink } from '../../components/BannerLink';
import { defaults } from './defaults';
import LoginImg from '../assets/svg/Login';

export default {
  component: BannerLink,
  title: 'BannerLink/light',
  argTypes: {},
  args: defaults.args,
} as ComponentMeta<typeof BannerLink>;

const Template: ComponentStory<typeof BannerLink> = (args) => (
  <BannerLink {...args} />
);

export const Standard = Template.bind({});

export const OneButton = Template.bind({});
OneButton.args = {
  ctaButtons: [
    {
      color: 'primary',
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
  decoration: <LoginImg fill="#17324d" />,
};

export const TwoButtonsAndIcon = Template.bind({});
TwoButtonsAndIcon.args = {
  decoration: <LoginImg fill="#17324d" />,
  ctaButtons: defaults.ctaButtons,
};

export const BodyComponent = Template.bind({});
BodyComponent.args = {
  body: defaults.body,
  ctaButtons: defaults.ctaButtons,
};
