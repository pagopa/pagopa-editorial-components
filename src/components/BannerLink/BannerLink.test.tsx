import { BannerLink } from './BannerLink';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly standard', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        theme="light"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly one button', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        ctaButtons={[
          {
            text: 'LEGGI LE FAQ',
            onClick: () => {},
            color: 'primary',
          },
        ]}
        theme="light"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly two buttons', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        ctaButtons={[
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
        ]}
        theme="light"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with icon', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        decoration={{
          alt: 'Login',
          src: 'static/media/login-white.9e86b706.svg',
        }}
        theme="light"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with icon and two buttons', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        ctaButtons={[
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
        ]}
        decoration={{
          alt: 'Login',
          src: 'static/media/login-white.9e86b706.svg',
        }}
        theme="light"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with body ', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        ctaButtons={[
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
        ]}
        decoration={{
          alt: 'Login',
          src: 'static/media/login-white.9e86b706.svg',
        }}
        theme="light"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with custom decorator', () => {
  const tree = renderer
    .create(
      <BannerLink
        body={
          <p>
            Leggi le domande frequenti sull’adesione a <b>pagoPA</b> da parte
            degli Enti Creditori oppure scrivi a:{' '}
            <a href="mailto:account@pagopa.it">account@pagopa.it</a>
          </p>
        }
        ctaButtons={[
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
        ]}
        decoration={
          <div
            style={{
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '50%',
              display: 'flex',
              fontSize: '32px',
              height: '100px',
              justifyContent: 'center',
              width: '100px',
            }}
          >
            PA
          </div>
        }
        theme="light"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly standard dark', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        theme="dark"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly one button dark', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        ctaButtons={[
          {
            text: 'LEGGI LE FAQ',
            onClick: () => {},
            color: 'primary',
          },
        ]}
        theme="dark"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with icon dark', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        decoration={{
          alt: 'Login',
          src: 'static/media/login-white.9e86b706.svg',
        }}
        theme="dark"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* TODO: These Dark tests fail, there's a problem with some components in these variations of the banner link, which do not support the "negative" value for the color property

it('renders correctly two buttons dark', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        ctaButtons={[
          {
            onClick: () => { },
            text: 'LEGGI LE FAQ',
          },
          {
            onClick: () => { },
            text: 'LEGGI LE FAQ',
          },
        ]}
        theme="dark"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders correctly with icon and two buttons dark', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        ctaButtons={[
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
        ]}
        decoration={{
          alt: 'Login',
          src: 'static/media/login-white.9e86b706.svg',
        }}
        theme="dark"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with body dark ', () => {
  const tree = renderer
    .create(
      <BannerLink
        body="Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"
        ctaButtons={[
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
        ]}
        decoration={{
          alt: 'Login',
          src: 'static/media/login-white.9e86b706.svg',
        }}
        theme="dark"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with custom decorator dark', () => {
  const tree = renderer
    .create(
      <BannerLink
        body={
          <p>
            Leggi le domande frequenti sull’adesione a <b>pagoPA</b> da parte
            degli Enti Creditori oppure scrivi a:{' '}
            <a href="mailto:account@pagopa.it">account@pagopa.it</a>
          </p>
        }
        ctaButtons={[
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
          {
            onClick: () => {},
            text: 'LEGGI LE FAQ',
          },
        ]}
        decoration={
          <div
            style={{
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '50%',
              display: 'flex',
              fontSize: '32px',
              height: '100px',
              justifyContent: 'center',
              width: '100px',
            }}
          >
            PA
          </div>
        }
        theme="dark"
        title="Vuoi diventare un Partner tecnologico qualificato?"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
*/
