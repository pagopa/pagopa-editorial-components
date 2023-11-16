import Cards from './index';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly with all props', () => {
  const tree = renderer
    .create(
      <Cards
        theme="light"
        text={{ title: 'string', subtitle: 'string', body: 'string' }}
        items={[{ title: 'string', text: 'string' }]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props and jsx body', () => {
  const tree = renderer
    .create(
      <Cards
        theme="light"
        text={{ title: 'string', subtitle: 'string', body: <>test</> }}
        items={[
          {
            cardIcon: {
              icon: 'Air',
            },
            title: 'Title',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            link: {
              href: 'https://google.com',
              title: 'vai al sito',
              text: 'leggi',
            },
          },
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
