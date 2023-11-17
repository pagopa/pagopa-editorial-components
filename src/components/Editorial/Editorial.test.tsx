import { Box } from '@mui/material';
import { Editorial } from './index';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

/* TODO: Dark tests */

it('renders correctly standard', () => {
  const tree = renderer
    .create(
      <Editorial
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        ctaButtons={[
          {
            onClick: () => {},
            text: 'Accedi',
          },
          {
            onClick: () => {},
            text: 'Scopri di più',
          },
        ]}
        eyelet="per i cittadini"
        image={{
          alt: 'a landscape photo',
          src: 'static/media/regular.d1ac9ad6.png',
        }}
        theme="light"
        title="Non perderti più nessuna notifica"
        width={'standard'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly center', () => {
  const tree = renderer
    .create(
      <Editorial
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        ctaButtons={[
          {
            onClick: () => {},
            text: 'Accedi',
          },
          {
            onClick: () => {},
            text: 'Scopri di più',
          },
        ]}
        eyelet="per i cittadini"
        image={{
          alt: 'a landscape photo',
          src: 'static/media/regular.d1ac9ad6.png',
        }}
        theme="light"
        title="Non perderti più nessuna notifica"
        width={'center'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly wide', () => {
  const tree = renderer
    .create(
      <Editorial
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        ctaButtons={[
          {
            onClick: () => {},
            text: 'Accedi',
          },
          {
            onClick: () => {},
            text: 'Scopri di più',
          },
        ]}
        eyelet="per i cittadini"
        image={{
          alt: 'a landscape photo',
          src: 'static/media/regular.d1ac9ad6.png',
        }}
        theme="light"
        title="Non perderti più nessuna notifica"
        width={'wide'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly standard reversed', () => {
  const tree = renderer
    .create(
      <Editorial
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        ctaButtons={[
          {
            onClick: () => {},
            text: 'Accedi',
          },
          {
            onClick: () => {},
            text: 'Scopri di più',
          },
        ]}
        eyelet="per i cittadini"
        image={{
          alt: 'a landscape photo',
          src: 'static/media/regular.d1ac9ad6.png',
        }}
        theme="light"
        reversed
        title="Non perderti più nessuna notifica"
        width={'standard'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly reversed wide', () => {
  const tree = renderer
    .create(
      <Editorial
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        ctaButtons={[
          {
            onClick: () => {},
            text: 'Accedi',
          },
          {
            onClick: () => {},
            text: 'Scopri di più',
          },
        ]}
        eyelet="per i cittadini"
        image={{
          alt: 'a landscape photo',
          src: 'static/media/regular.d1ac9ad6.png',
        }}
        theme="light"
        reversed
        title="Non perderti più nessuna notifica"
        width={'wide'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly no label', () => {
  const tree = renderer
    .create(
      <Editorial
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        ctaButtons={[
          {
            onClick: () => {},
            text: 'Accedi',
          },
          {
            onClick: () => {},
            text: 'Scopri di più',
          },
        ]}
        eyelet=""
        image={{
          alt: 'a landscape photo',
          src: 'static/media/regular.d1ac9ad6.png',
        }}
        theme="light"
        title="Non perderti più nessuna notifica"
        width={'standard'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly dots', () => {
  const tree = renderer
    .create(
      <Editorial
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        ctaButtons={[
          {
            onClick: () => {},
            text: 'Accedi',
          },
          {
            onClick: () => {},
            text: 'Scopri di più',
          },
        ]}
        eyelet="per i cittadini"
        image={{
          alt: 'a landscape photo',
          src: 'static/media/regular.d1ac9ad6.png',
        }}
        theme="light"
        title="Non perderti più nessuna notifica"
        width={'standard'}
        pattern="dots"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly solid', () => {
  const tree = renderer
    .create(
      <Editorial
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        ctaButtons={[
          {
            onClick: () => {},
            text: 'Accedi',
          },
          {
            onClick: () => {},
            text: 'Scopri di più',
          },
        ]}
        eyelet="per i cittadini"
        image={{
          alt: 'a landscape photo',
          src: 'static/media/regular.d1ac9ad6.png',
        }}
        theme="light"
        title="Non perderti più nessuna notifica"
        width={'standard'}
        pattern="solid"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly bold body element', () => {
  const tree = renderer
    .create(
      <Editorial
        body={
          <p>
            Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio
            tutti gli atti di notifica che ti inviano{' '}
            <b>Enti e Pubbliche Amministrazioni</b>, come multe o certificati
            elettorali. E, grazie all`integrazione con pagoPA, puoi anche pagare
            eventuali costi. Così, risparmi tempo e denaro.
          </p>
        }
        ctaButtons={[
          {
            onClick: () => {},
            text: 'Accedi',
          },
          {
            onClick: () => {},
            text: 'Scopri di più',
          },
        ]}
        eyelet="per i cittadini"
        image={{
          alt: 'a landscape photo',
          src: 'static/media/regular.d1ac9ad6.png',
        }}
        theme="light"
        title="Non perderti più nessuna notifica"
        width={'standard'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly label image', () => {
  const tree = renderer
    .create(
      <Editorial
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        ctaButtons={[
          {
            onClick: function noRefCheck() {},
            text: 'Accedi',
          },
          {
            onClick: function noRefCheck() {},
            text: 'Scopri di più',
          },
        ]}
        eyelet="per i cittadini"
        image={
          <Box>
            <img
              alt="another portrait"
              src="static/media/portrait.a833a020.png"
            />
            <p>label example</p>
          </Box>
        }
        pattern="none"
        theme="light"
        title="Non perderti più nessuna notifica"
        width={'center'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly rotated image', () => {
  const tree = renderer
    .create(
      <Editorial
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        ctaButtons={[
          {
            onClick: function noRefCheck() {},
            text: 'Accedi',
          },
          {
            onClick: function noRefCheck() {},
            text: 'Scopri di più',
          },
        ]}
        eyelet="per i cittadini"
        image={
          <Box style={{ transform: 'rotate(45deg) scale(0.8)' }}>
            <img
              alt="another portrait"
              src="static/media/portrait.a833a020.png"
            />
          </Box>
        }
        pattern="none"
        theme="light"
        title="Non perderti più nessuna notifica"
        width={'center'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly ctas element', () => {
  const tree = renderer
    .create(
      <Editorial
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        ctaButtons={[
          <button key="1">+</button>,
          {
            onClick: function noRefCheck() {},
            text: 'Scopri di più',
          },
        ]}
        eyelet="per i cittadini"
        image={{
          alt: 'a landscape photo',
          src: 'static/media/regular.d1ac9ad6.png',
        }}
        theme="light"
        title="Non perderti più nessuna notifica"
        width={'center'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
