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
  items: [
    {
      icon: 'Air',
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
      icon: 'AddReaction',
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
  items: [
    {
      label: 'label',
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      label: 'label',
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      label: 'label',
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      label: 'label',
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
    body: (
      <p style={{ fontSize: '16px', fontWeight: '400' }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis <strong>parturient</strong> montes, nascetur ridiculus mus.
        <br />
        <br /> Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
        sem. Nulla consequat <strong>massa</strong> quis enim. Donec pede justo,
        fringilla vel, aliquet nec, vulputate eget, arcu.
      </p>
    ),
  },
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
      icon: 'Accessibility',
      title: 'Title',
      text: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.',
      link: {
        href: 'https://google.com',
        title: 'vai al sito',
        text: 'leggi',
      },
    },
    {
      icon: 'Air',
      title: 'Title',
      text: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. ',
      link: {
        href: 'https://google.com',
        title: 'vai al sito',
        text: 'leggi',
      },
    },
    {
      icon: 'AddReaction',
      title: 'Title',
      text: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      link: {
        href: 'https://google.com',
        title: 'vai al sito',
        text: 'leggi',
      },
    },
  ],
};
