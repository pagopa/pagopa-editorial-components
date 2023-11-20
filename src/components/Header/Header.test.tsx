import { Header } from './index';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly standard ', () => {
  const tree = renderer
    .create(
      <Header
        menu={[
          {
            items: [
              {
                href: '#',
                key: 1,
                label: 'Voce menu secondo livello',
              },
              {
                href: '#',
                key: 2,
                label: 'Voce menu secondo livello',
              },
              {
                href: '#',
                key: 3,
                label: 'Voce menu secondo livello',
              },
            ],
            label: 'Voce Menu 1',
            theme: 'light',
          },
          {
            active: true,
            items: [
              {
                href: '#',
                key: 1,
                label: 'Secondo livello',
              },
              {
                href: '#',
                key: 2,
                label: 'Secondo livello',
              },
            ],
            label: 'Voce Menu 2',
            theme: 'light',
          },
          {
            href: '/#',
            label: 'Voce Menu 3',
            theme: 'light',
          },
        ]}
        product={{
          href: '/',
          name: 'Nome del prodotto',
        }}
        theme="light"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly buttons ', () => {
  const tree = renderer
    .create(
      <Header
        ctaButtons={[
          {
            color: 'primary',
            onClick: function noRefCheck() {},
            size: 'small',
            text: 'Primary',
            variant: 'contained',
          },
          {
            color: 'primary',
            onClick: function noRefCheck() {},
            size: 'small',
            text: 'Secondary',
            variant: 'outlined',
          },
        ]}
        menu={[
          {
            items: [
              {
                href: '#',
                key: 1,
                label: 'Voce menu secondo livello',
              },
              {
                href: '#',
                key: 2,
                label: 'Voce menu secondo livello',
              },
              {
                href: '#',
                key: 3,
                label: 'Voce menu secondo livello',
              },
            ],
            label: 'Voce Menu 1',
            theme: 'light',
          },
          {
            active: true,
            items: [
              {
                href: '#',
                key: 1,
                label: 'Secondo livello',
              },
              {
                href: '#',
                key: 2,
                label: 'Secondo livello',
              },
            ],
            label: 'Voce Menu 2',
            theme: 'light',
          },
          {
            href: '/#',
            label: 'Voce Menu 3',
            theme: 'light',
          },
        ]}
        product={{
          href: '/',
          name: 'Nome del prodotto',
        }}
        theme="light"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly avatar ', () => {
  const tree = renderer
    .create(
      <Header
        avatar={{
          alt: 'product avatar',
          src: 'static/media/LAVORA-CON-NOI.5dfb4511.png',
        }}
        menu={[
          {
            items: [
              {
                href: '#',
                key: 1,
                label: 'Voce menu secondo livello',
              },
              {
                href: '#',
                key: 2,
                label: 'Voce menu secondo livello',
              },
              {
                href: '#',
                key: 3,
                label: 'Voce menu secondo livello',
              },
            ],
            label: 'Voce Menu 1',
            theme: 'light',
          },
          {
            active: true,
            items: [
              {
                href: '#',
                key: 1,
                label: 'Secondo livello',
              },
              {
                href: '#',
                key: 2,
                label: 'Secondo livello',
              },
            ],
            label: 'Voce Menu 2',
            theme: 'light',
          },
          {
            href: '/#',
            label: 'Voce Menu 3',
            theme: 'light',
          },
        ]}
        product={{
          href: '/',
          name: 'Nome del prodotto',
        }}
        theme="light"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly beta ', () => {
  const tree = renderer
    .create(
      <Header
        beta
        menu={[
          {
            items: [
              {
                href: '#',
                key: 1,
                label: 'Voce menu secondo livello',
              },
              {
                href: '#',
                key: 2,
                label: 'Voce menu secondo livello',
              },
              {
                href: '#',
                key: 3,
                label: 'Voce menu secondo livello',
              },
            ],
            label: 'Voce Menu 1',
            theme: 'light',
          },
          {
            active: true,
            items: [
              {
                href: '#',
                key: 1,
                label: 'Secondo livello',
              },
              {
                href: '#',
                key: 2,
                label: 'Secondo livello',
              },
            ],
            label: 'Voce Menu 2',
            theme: 'light',
          },
          {
            href: '/#',
            label: 'Voce Menu 3',
            theme: 'light',
          },
        ]}
        product={{
          href: '/',
          name: 'Nome del prodotto',
        }}
        theme="light"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly full ', () => {
  const tree = renderer
    .create(
      <Header
        avatar={{
          alt: 'product avatar',
          src: 'static/media/LAVORA-CON-NOI.5dfb4511.png',
        }}
        beta
        ctaButtons={[
          {
            color: 'primary',
            onClick: function noRefCheck() {},
            size: 'small',
            text: 'Primary',
            variant: 'contained',
          },
          {
            color: 'primary',
            onClick: function noRefCheck() {},
            size: 'small',
            text: 'Secondary',
            variant: 'outlined',
          },
        ]}
        menu={[
          {
            items: [
              {
                href: '#',
                key: 1,
                label: 'Voce menu secondo livello',
              },
              {
                href: '#',
                key: 2,
                label: 'Voce menu secondo livello',
              },
              {
                href: '#',
                key: 3,
                label: 'Voce menu secondo livello',
              },
            ],
            label: 'Voce Menu 1',
            theme: 'light',
          },
          {
            active: true,
            items: [
              {
                href: '#',
                key: 1,
                label: 'Secondo livello',
              },
              {
                href: '#',
                key: 2,
                label: 'Secondo livello',
              },
            ],
            label: 'Voce Menu 2',
            theme: 'light',
          },
          {
            href: '/#',
            label: 'Voce Menu 3',
            theme: 'light',
          },
        ]}
        product={{
          href: '/',
          name: 'Nome del prodotto',
        }}
        theme="light"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
