import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Listing from '../../components/Listing';

export default {
  component: Listing,
  title: 'Listing/light',
} as ComponentMeta<typeof Listing>;

const Template: ComponentStory<typeof Listing> = (args) => (
  <Listing {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  title: 'Lorem ipsum',
  name: 'Nome',
  date: {
    preDate: 'Ultimo aggiornamento',
    date: new Date(),
    locale: 'it-IT',
    options: {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }
  },
  items: [
    { 
      text: 'Lorem ipsum dolor sit amet, consectetuer asipscing elit',
      href: 'https://google.it',
      htmlTitle: 'vai al sito'
    },
    { 
      text: 'Lorem ipsum dolor sit amet, consectetuer asipscing elit',
    },
    { 
      text: 'Lorem ipsum dolor sit amet, consectetuer asipscing elit',
    },
    { 
      text: 'Lorem ipsum dolor sit amet, consectetuer asipscing elit',
    }
  ]
}