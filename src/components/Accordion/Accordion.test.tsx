import { Accordion } from './Accordion';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly with all props', () => {
  const tree = renderer
    .create(
      <Accordion
        title="titleTest"
        subtitle="subtitleTest"
        description="descriptionTest"
        accordionItems={[{ header: 'tetsHead', content: 'testCont' }]}
        theme="light"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props and accordion header jsx', () => {
  const tree = renderer
    .create(
      <Accordion
        title="titleTest"
        subtitle="subtitleTest"
        description="descriptionTest"
        accordionItems={[{ header: 'tetsHead', content: <div>test</div> }]}
        theme="light"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props and two accordion items', () => {
  const tree = renderer
    .create(
      <Accordion
        title="titleTest"
        subtitle="subtitleTest"
        description="descriptionTest"
        accordionItems={[
          { header: 'tetsHead', content: 'testCont' },
          { header: 'tetsHead2', content: 'testCont2' },
        ]}
        theme="light"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
