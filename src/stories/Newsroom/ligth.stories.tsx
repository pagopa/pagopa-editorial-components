import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Newsroom from '../../components/Newsroom';
import newsroomcover from '../assets/newsroom-cover.png';

export default {
  component: Newsroom,
  title: 'Newsroom/light',
} as ComponentMeta<typeof Newsroom>;

const Template: ComponentStory<typeof Newsroom> = (args) => (
  <Newsroom {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  items: [
    {
      img: {
        src: newsroomcover,
        alt: 'A picture showing some books',
      },
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
      date: {
        date: new Date(),
      },
      href: {
        label: 'leggi',
        title: 'vai al sito',
        link: 'https://google.it',
      },
    },
    {
      img: {
        src: newsroomcover,
        alt: 'A picture showing some books',
      },
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
      date: {
        date: new Date(),
      },
      href: {
        label: 'leggi',
        title: 'vai al sito',
        link: 'https://google.it',
      },
    },
    {
      img: {
        src: newsroomcover,
        alt: 'A picture showing some books',
      },
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
      date: {
        date: new Date(),
      },
      href: {
        label: 'leggi',
        title: 'vai al sito',
        link: 'https://google.it',
      },
    },
    {
      img: {
        src: newsroomcover,
        alt: 'A picture showing some books',
      },
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
      date: {
        date: new Date(),
      },
      href: {
        label: 'leggi',
        title: 'vai al sito',
        link: 'https://google.it',
      },
    },
    {
      img: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor.
        </div>
      ),
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
      date: {
        date: new Date(),
      },
      href: {
        label: 'leggi',
        title: 'vai al sito',
        link: 'https://google.it',
      },
    },
  ],
};
