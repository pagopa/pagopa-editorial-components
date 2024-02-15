import { Typography } from '@mui/material';
import Hero from './index';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly big background light ', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero_background.082b7c67.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        size="big"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="light"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly html body ', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero_background.082b7c67.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        size="big"
        subtitle={
          <Typography variant="body1">
            Quis aute iure reprehenderit in <b>voluptate</b> velit esse cillum
            dolore eu fugiat nulla pariatur. <b>Excepteur</b> sint obcaecat
            cupiditat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        }
        theme="light"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly small with bg ', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero_background.082b7c67.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        size="small"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="light"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly big bg text left  ', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero_background_inverse.e1a77893.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        inverse
        size="big"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="light"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly small bg text left  ', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero_background_inverse.e1a77893.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        inverse
        size="small"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="light"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly small image  ', () => {
  const tree = renderer
    .create(
      <Hero
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        image="static/media/hero_image.afd0102b.png"
        size="small"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="light"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly solid  ', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero-solid-light.e572933e.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        size="small"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="light"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly big bg element  ', () => {
  const tree = renderer
    .create(
      <Hero
        background={
          <div
            style={{
              backgroundImage:
                'url(static/media/hero-solid-light.e572933e.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '100%',
              left: 0,
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              width: '100%',
              zIndex: -1,
            }}
          />
        }
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        size="big"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="light"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* DARK */

it('renders correctly big background dark ', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero_background.082b7c67.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        size="big"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="dark"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly html body dark ', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero_background.082b7c67.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        size="big"
        subtitle={
          <Typography variant="body1">
            Quis aute iure reprehenderit in <b>voluptate</b> velit esse cillum
            dolore eu fugiat nulla pariatur. <b>Excepteur</b> sint obcaecat
            cupiditat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        }
        theme="dark"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly small with bg dark ', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero_background.082b7c67.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        size="small"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="dark"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly big bg text left  dark', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero_background_inverse.e1a77893.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        inverse
        size="big"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="dark"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly small bg text left dark ', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero_background_inverse.e1a77893.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        inverse
        size="small"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="dark"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly small image dark ', () => {
  const tree = renderer
    .create(
      <Hero
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        image="static/media/hero_image.afd0102b.png"
        size="small"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="dark"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly solid dark ', () => {
  const tree = renderer
    .create(
      <Hero
        background="static/media/hero-solid-light.e572933e.jpg"
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        size="small"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="light"
        title="dark ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly big bg element  dark', () => {
  const tree = renderer
    .create(
      <Hero
        background={
          <div
            style={{
              backgroundImage:
                'url(static/media/hero-solid-light.e572933e.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '100%',
              left: 0,
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              width: '100%',
              zIndex: -1,
            }}
          />
        }
        ctaButtons={[
          {
            color: 'primary',
            text: 'Scopri di più',
            variant: 'outlined',
          },
          {
            color: 'primary',
            text: 'Accedi',
            variant: 'contained',
          },
        ]}
        size="big"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        theme="dark"
        title="Lorem ipsum dolor sit amet, consectetur"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
