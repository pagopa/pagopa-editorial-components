import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Cards from '../../components/Cards';

export default {
  component: Cards,
  title: 'Cards/ligth',
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const ThreeColumnLayout = Template.bind({});
ThreeColumnLayout.args = {
  theme: 'light',
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

export const FourColumnLayout = Template.bind({});
FourColumnLayout.args = {
  theme: 'light',
  text: {
    title: 'lorem ipsum',
  },
  layout: '4-items',
  items: [
    {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
  ],
};

export const WithText = Template.bind({});
WithText.args = {
  theme: 'light',
  text: {
    title: 'lorem ipsum',
    subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`,
  },
  layout: 'full-text',
  items: [
    {
      icon: 'AccessAlarm',
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      link: {
        href: 'https://google.com',
        title: 'vai al sito',
        text: 'leggi',
      },
    },
    {
      icon: 'AccessAlarm',
      title: 'Title',
      text: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. ',
      link: {
        href: 'https://google.com',
        title: 'vai al sito',
        text: 'leggi',
      },
    },
    {
      icon: 'AccessAlarm',
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      link: {
        href: 'https://google.com',
        title: 'vai al sito',
        text: 'leggi',
      },
    },
    {
      icon: 'AccessAlarm',
      title: 'Title',
      text: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. ',
      link: {
        href: 'https://google.com',
        title: 'vai al sito',
        text: 'leggi',
      },
    },
  ],
};
