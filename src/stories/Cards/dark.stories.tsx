import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Cards from '../../components/Cards';

export default {
  component: Cards,
  title: 'Cards/dark',
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  theme: 'dark',
  text: {
    title: 'lorem ipsum',
  },
  layout: '3-items',
  items: [
    {
      icon: 'AccessAlarm',
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      link: {
        href: 'https://google.com',
        title: 'vai al sito',
        text: 'leggi',
      },
    },
    {
      icon: 'AccessAlarm',
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      link: {
        href: 'https://google.com',
        title: 'vai al sito',
        text: 'leggi',
      },
    },
    {
      icon: 'AccessAlarm',
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      link: {
        href: 'https://google.com',
        title: 'vai al sito',
        text: 'leggi',
      },
    },
  ],
};
