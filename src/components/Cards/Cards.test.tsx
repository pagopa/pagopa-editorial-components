import Cards from './index';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly with three column layouts', () => {
  const tree = renderer
    .create(
      <Cards
        items={[
          {
            cardIcon: {
              icon: 'Air',
            },
            link: {
              href: 'https://google.com',
              text: 'leggi',
              title: 'vai al sito',
            },
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            title: 'Title',
          },
          {
            cardIcon: {
              icon: 'AccessAlarm',
            },
            link: {
              href: 'https://google.com',
              text: 'leggi',
              title: 'vai al sito',
            },
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            title: 'Title',
          },
          {
            cardIcon: {
              icon: 'Accessibility',
            },
            link: {
              href: 'https://google.com',
              text: 'leggi',
              title: 'vai al sito',
            },
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            title: 'Title',
          },
        ]}
        text={{
          title: 'lorem ipsum',
        }}
        theme="dark"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with four column layouts', () => {
  const tree = renderer
    .create(
      <Cards
        items={[
          {
            cardIcon: {
              icon: 'Air',
            },
            link: {
              href: 'https://google.com',
              text: 'leggi',
              title: 'vai al sito',
            },
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            title: 'Title',
          },
          {
            cardIcon: {
              icon: 'AccessAlarm',
            },
            link: {
              href: 'https://google.com',
              text: 'leggi',
              title: 'vai al sito',
            },
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            title: 'Title',
          },
          {
            cardIcon: {
              icon: 'Accessibility',
            },
            link: {
              href: 'https://google.com',
              text: 'leggi',
              title: 'vai al sito',
            },
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            title: 'Title',
          },
          {
            cardIcon: {
              icon: 'Accessibility',
            },
            link: {
              href: 'https://google.com',
              text: 'leggi',
              title: 'vai al sito',
            },
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            title: 'Title',
          },
        ]}
        text={{
          title: 'lorem ipsum',
        }}
        theme="dark"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly with four column layouts and text', () => {
  const tree = renderer
    .create(
      <Cards
        items={[
          {
            cardIcon: {
              icon: 'Air',
            },
            link: {
              href: 'https://google.com',
              text: 'leggi',
              title: 'vai al sito',
            },
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            title: 'Title',
          },
          {
            cardIcon: {
              icon: 'AccessAlarm',
            },
            link: {
              href: 'https://google.com',
              text: 'leggi',
              title: 'vai al sito',
            },
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            title: 'Title',
          },
          {
            cardIcon: {
              icon: 'Accessibility',
            },
            link: {
              href: 'https://google.com',
              text: 'leggi',
              title: 'vai al sito',
            },
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            title: 'Title',
          },
          {
            cardIcon: {
              icon: 'Accessibility',
            },
            link: {
              href: 'https://google.com',
              text: 'leggi',
              title: 'vai al sito',
            },
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            title: 'Title',
          },
        ]}
        text={{
          body: (
            <p style={{ fontSize: '16px', fontWeight: '400' }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis <strong>parturient</strong> montes,
              nascetur ridiculus mus.
              <br />
              <br /> Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat <strong>massa</strong> quis enim. Donec
              pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
          ),
          subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          title: 'lorem ipsum',
        }}
        theme="dark"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
