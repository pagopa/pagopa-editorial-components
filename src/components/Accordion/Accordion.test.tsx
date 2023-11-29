import { Accordion } from './Accordion';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

it('opens the accordion when the button is clicked and closes it', async () => {
  render(
    <Accordion
      title="titleTest"
      subtitle="subtitleTest"
      description="descriptionTest"
      accordionItems={[{ header: 'tetsHead', content: 'testCont' }]}
      theme="dark"
    />
  );
  const accordionContent = screen.queryByText('testCont');
  const button = screen.getByRole('button');

  await waitFor(() => {
    expect(accordionContent).not.toBeVisible();
  });

  fireEvent.click(button);

  await waitFor(() => {
    expect(accordionContent).toBeVisible();
  });

  fireEvent.click(button);

  await waitFor(() => {
    expect(accordionContent).not.toBeVisible();
  });
});

it('renders text correctly', async () => {
  const { getByText } = render(
    <Accordion
      title="titleTest"
      subtitle="subtitleTest"
      description="descriptionTest"
      accordionItems={[{ header: 'tetsHead', content: 'testCont' }]}
      theme="dark"
    />
  );
  expect(getByText('titleTest')).toBeInTheDocument();
  expect(getByText('subtitleTest')).toBeInTheDocument();
  expect(getByText('descriptionTest')).toBeInTheDocument();
  expect(getByText('tetsHead')).toBeInTheDocument();
  expect(getByText('testCont')).toBeInTheDocument();
});
