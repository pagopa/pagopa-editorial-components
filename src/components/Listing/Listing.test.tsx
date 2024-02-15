import Listing from './index';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly standard ', () => {
  const tree = renderer
    .create(
      <Listing
        date={{
          date: new Date('2023-11-23T11:22:53.167Z'),
          locale: 'it-IT',
          options: {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          },
          preDate: 'Ultimo aggiornamento',
        }}
        items={[
          {
            href: 'https://google.it',
            htmlTitle: 'vai al sito',
            text: 'Lorem ipsum dolor sit amet, consectetuer asipscing elit',
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetuer asipscing elit',
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetuer asipscing elit',
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetuer asipscing elit',
          },
        ]}
        name="Nome"
        title="Lorem ipsum"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
