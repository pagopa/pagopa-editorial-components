import Text from './index';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly standard ', () => {
  const tree = renderer
    .create(
      <Text
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly text align center ', () => {
  const tree = renderer
    .create(
      <Text
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        textAlign="center"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
