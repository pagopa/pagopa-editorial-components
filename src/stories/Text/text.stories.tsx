import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Text from '../../components/Text';

export default {
  component: Text,
  title: 'Text/light',
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const TextAlignCenter = Template.bind({});
TextAlignCenter.args = {
  textAlign: 'center',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
