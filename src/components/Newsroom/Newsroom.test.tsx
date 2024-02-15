import Newsroom from './index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly standard ', () => {
  const tree = renderer
    .create(
      <Newsroom
        items={[
          {
            date: {
              date: new Date('2023-11-23T11:35:50.763Z'),
            },
            href: {
              label: 'leggi',
              link: 'https://google.it',
              title: 'vai al sito',
            },
            img: {
              alt: 'A picture showing some books',
              src: 'static/media/newsroom-cover.59549252.png',
            },
            title:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
          },
          {
            date: {
              date: new Date('2023-11-23T11:35:50.763Z'),
            },
            href: {
              label: 'leggi',
              link: 'https://google.it',
              title: 'vai al sito',
            },
            img: {
              alt: 'A picture showing some books',
              src: 'static/media/newsroom-cover.59549252.png',
            },
            title:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
          },
          {
            date: {
              date: new Date('2023-11-23T11:35:50.763Z'),
            },
            href: {
              label: 'leggi',
              link: 'https://google.it',
              title: 'vai al sito',
            },
            img: {
              alt: 'A picture showing some books',
              src: 'static/media/newsroom-cover.59549252.png',
            },
            title:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
          },
          {
            date: {
              date: new Date('2023-11-23T11:35:50.763Z'),
            },
            href: {
              label: 'leggi',
              link: 'https://google.it',
              title: 'vai al sito',
            },
            img: {
              alt: 'A picture showing some books',
              src: 'static/media/newsroom-cover.59549252.png',
            },
            title:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
          },
          {
            date: {
              date: new Date('2023-11-23T11:35:50.763Z'),
            },
            href: {
              label: 'leggi',
              link: 'https://google.it',
              title: 'vai al sito',
            },
            img: (
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </div>
            ),
            title:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
          },
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('All links are rendered correctly', async () => {
  const { getAllByText } = render(
    <Newsroom
      items={[
        {
          date: {
            date: new Date('2023-11-23T11:35:50.763Z'),
          },
          href: {
            label: 'leggi',
            link: 'https://google1.it',
            title: 'vai al sito',
          },
          img: {
            alt: 'A picture showing some books',
            src: 'static/media/newsroom-cover.59549252.png',
          },
          title:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
        },
        {
          date: {
            date: new Date('2023-11-23T11:35:50.763Z'),
          },
          href: {
            label: 'leggi',
            link: 'https://google2.it',
            title: 'vai al sito',
          },
          img: {
            alt: 'A picture showing some books',
            src: 'static/media/newsroom-cover.59549252.png',
          },
          title:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
        },
        {
          date: {
            date: new Date('2023-11-23T11:35:50.763Z'),
          },
          href: {
            label: 'leggi',
            link: 'https://google3.it',
            title: 'vai al sito',
          },
          img: {
            alt: 'A picture showing some books',
            src: 'static/media/newsroom-cover.59549252.png',
          },
          title:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
        },
        {
          date: {
            date: new Date('2023-11-23T11:35:50.763Z'),
          },
          href: {
            label: 'leggi',
            link: 'https://google4.it',
            title: 'vai al sito',
          },
          img: {
            alt: 'A picture showing some books',
            src: 'static/media/newsroom-cover.59549252.png',
          },
          title:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
        },
        {
          date: {
            date: new Date('2023-11-23T11:35:50.763Z'),
          },
          href: {
            label: 'leggi',
            link: 'https://google5.it',
            title: 'vai al sito',
          },
          img: (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor.
            </div>
          ),
          title:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ',
        },
      ]}
    />
  );
  expect(getAllByText('leggi')[0]?.closest('a')).toHaveAttribute(
    'href',
    'https://google1.it'
  );
  expect(getAllByText('leggi')[1]?.closest('a')).toHaveAttribute(
    'href',
    'https://google2.it'
  );
  expect(getAllByText('leggi')[2]?.closest('a')).toHaveAttribute(
    'href',
    'https://google3.it'
  );
  expect(getAllByText('leggi')[3]?.closest('a')).toHaveAttribute(
    'href',
    'https://google4.it'
  );
  expect(getAllByText('leggi')[4]?.closest('a')).toHaveAttribute(
    'href',
    'https://google5.it'
  );
});
