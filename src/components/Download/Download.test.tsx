import { ThemeProvider, createTheme } from '@mui/material';
import Download from './index';
import '@testing-library/jest-dom';
import { theme } from '../../../.storybook/theme';

/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

const mainTheme = createTheme({
  ...theme,
});

it('renders correctly with light buttons', () => {
  const tree = renderer
    .create(
      <Download
        items={[
          {
            fileName: 'sample_1.pdf',
            href: 'static/media/sample.ac0398d4.pdf',
            label: 'Download 1 Lorem Ipsum',
          },
          {
            fileName: 'sample_2.pdf',
            href: 'static/media/sample.ac0398d4.pdf',
            label: 'Download 2 Lorem Ipsum',
          },
          {
            fileName: 'sample_3.pdf',
            href: 'static/media/sample.ac0398d4.pdf',
            label: 'Download 3 Lorem Ipsum',
          },
        ]}
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        theme="light"
        title="Download Area Lorem Ipsum"
        type="button"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with light links', () => {
  const tree = renderer
    .create(
      <Download
        items={[
          {
            fileName: 'sample_1.pdf',
            href: 'static/media/sample.ac0398d4.pdf',
            label: 'Download 1 Lorem Ipsum',
          },
          {
            fileName: 'sample_2.pdf',
            href: 'static/media/sample.ac0398d4.pdf',
            label: 'Download 2 Lorem Ipsum',
          },
          {
            href: 'static/media/sample.ac0398d4.pdf',
            label: 'Download 3 Lorem Ipsum',
          },
        ]}
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        theme="light"
        title="Download Area Lorem Ipsum"
        type="link"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with dark buttons', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={mainTheme}>
        <Download
          items={[
            {
              fileName: 'sample_1.pdf',
              href: 'static/media/sample.ac0398d4.pdf',
              label: 'Download 1 Lorem Ipsum',
            },
            {
              fileName: 'sample_2.pdf',
              href: 'static/media/sample.ac0398d4.pdf',
              label: 'Download 2 Lorem Ipsum',
            },
            {
              fileName: 'sample_3.pdf',
              href: 'static/media/sample.ac0398d4.pdf',
              label: 'Download 3 Lorem Ipsum',
            },
          ]}
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
          theme="dark"
          title="Download Area Lorem Ipsum"
          type="button"
        />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with dark links', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={mainTheme}>
        <Download
          items={[
            {
              fileName: 'sample_1.pdf',
              href: 'static/media/sample.ac0398d4.pdf',
              label: 'Download 1 Lorem Ipsum',
            },
            {
              fileName: 'sample_2.pdf',
              href: 'static/media/sample.ac0398d4.pdf',
              label: 'Download 2 Lorem Ipsum',
            },
            {
              href: 'static/media/sample.ac0398d4.pdf',
              label: 'Download 3 Lorem Ipsum',
            },
          ]}
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
          theme="dark"
          title="Download Area Lorem Ipsum"
          type="link"
        />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
