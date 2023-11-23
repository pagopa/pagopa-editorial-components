import Newsroom from './index';
import '@testing-library/jest-dom';
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
