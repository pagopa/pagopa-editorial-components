import { Accordion } from './Accordion';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly with all props light', () => {
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

it('renders correctly with all props and accordion header jsx light', () => {
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

it('renders correctly with all props and two accordion items light', () => {
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

it('renders correctly with all props dark', () => {
  const tree = renderer
    .create(
      <Accordion
        title="titleTest"
        subtitle="subtitleTest"
        description="descriptionTest"
        accordionItems={[{ header: 'tetsHead', content: 'testCont' }]}
        theme="dark"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props and accordion header jsx dark', () => {
  const tree = renderer
    .create(
      <Accordion
        title="titleTest"
        subtitle="subtitleTest"
        description="descriptionTest"
        accordionItems={[{ header: 'tetsHead', content: <div>test</div> }]}
        theme="dark"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props and two accordion items dark', () => {
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
        theme="dark"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
