import { Abstract } from '../Abstract';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly without a background ', () => {
  const tree = renderer
    .create(
      <Abstract
        description="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        layout="left"
        overline="Per i cittadini"
        theme="dark"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with a background image', () => {
  const tree = renderer
    .create(
      <Abstract
        overline="overlineTest"
        title="titleTest"
        description="descriptionTest"
        layout="left"
        theme="dark"
        background="https://healthix.org/wp-content/uploads/2016/06/testimage.jpeg"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with a custom body and background', () => {
  const tree = renderer
    .create(
      <Abstract
        overline="overlineTest"
        title="titleTest"
        description={<p>test</p>}
        theme="dark"
        background="https://healthix.org/wp-content/uploads/2016/06/testimage.jpeg"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly without a background light ', () => {
  const tree = renderer
    .create(
      <Abstract
        description="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        layout="left"
        overline="Per i cittadini"
        theme="light"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with a background image light', () => {
  const tree = renderer
    .create(
      <Abstract
        overline="overlineTest"
        title="titleTest"
        description="descriptionTest"
        layout="left"
        theme="light"
        background="https://healthix.org/wp-content/uploads/2016/06/testimage.jpeg"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with a custom body and background light', () => {
  const tree = renderer
    .create(
      <Abstract
        overline="overlineTest"
        title="titleTest"
        description={<p>test</p>}
        theme="light"
        background="https://healthix.org/wp-content/uploads/2016/06/testimage.jpeg"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
