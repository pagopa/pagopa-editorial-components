import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import StripeLink from '../../components/StripeLink';

export default {
  title: 'StripeLink/light',
  component: StripeLink,
  args: {
    theme: 'light',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim massa nec velit ultrices porta vel suscipit nunc. ',
    icon: {
      icon: 'VolunteerActivism',
      color: 'white',
    },
    buttonText: 'Donate',
  },
} as ComponentMeta<typeof StripeLink>;

type DarkStripeLink = ComponentStory<typeof StripeLink>;

const Template: DarkStripeLink = (args) => <StripeLink {...args} />;

export const Default = Template.bind({});

export const WithoutIcon = Template.bind({});
WithoutIcon.args = { ...Default.args, icon: <></> };

export const WithoutButtonText = Template.bind({});
WithoutButtonText.args = {
  ...Default.args,
  buttonText: '',
};
