import { BannerLink } from './BannerLink';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly with all props', () => {
  const tree = renderer
    .create(
      <BannerLink
        title="titleTest"
        body="testbody"
        decoration={<>test</>}
        theme="light"
        ctaButtons={[
          {
            text: 'LEGGI LE FAQ',
          },
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props jsx and onclick', () => {
  const tree = renderer
    .create(
      <BannerLink
        title="titleTest"
        body={<>test2</>}
        decoration={<>test</>}
        theme="light"
        ctaButtons={[
          {
            text: 'LEGGI LE FAQ',
            onClick: () => {},
          },
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
