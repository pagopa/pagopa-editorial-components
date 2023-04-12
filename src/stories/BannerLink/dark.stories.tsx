import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { BannerLink } from '../../components/BannerLink';
import { defaults } from './defaults';
import LoginWhite from '../assets/login-white.svg';

export default {
  component: BannerLink,
  title: 'BannerLink/dark',
  argTypes: {},
  args: {
    ...defaults.args,
    theme: 'dark',
  },
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
  decoration: { src: LoginWhite, alt: 'Login' },
};

export const TwoButtonsAndIcon = Template.bind({});
TwoButtonsAndIcon.args = {
  decoration: { src: LoginWhite, alt: 'Login' },
  ctaButtons: defaults.ctaButtons,
};

export const BodyComponent = Template.bind({});
BodyComponent.args = {
  body: defaults.body,
  ctaButtons: defaults.ctaButtons,
};

export const CustomDecorator = Template.bind({});
CustomDecorator.args = {
  body: defaults.body,
  ctaButtons: defaults.ctaButtons,
  decoration: (
    <div
      style={{
        backgroundColor: 'white',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '32px',
      }}
    >
      PA
    </div>
  ),
};
