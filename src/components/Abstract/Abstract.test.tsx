import { Abstract } from '../Abstract';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly with a background image', () => {
  const tree = renderer
    .create(
      <Abstract
        overline="overlineTest"
        title="titleTest"
        description="descriptionTest"
        theme="dark"
        background="https://healthix.org/wp-content/uploads/2016/06/testimage.jpeg"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with a custom body', () => {
  const tree = renderer
    .create(
      <Abstract
        overline="overlineTest"
        title="titleTest"
        description={<p>lol</p>}
        theme="dark"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
