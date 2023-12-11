import { Stats } from './index';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */
import '../../../mocks/intersectionObserver';

import renderer from 'react-test-renderer';

it('renders correctly standard dark ', () => {
  const tree = renderer
    .create(
      <Stats
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all’integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        eyelet="PER I CITTADINI"
        kpiCaption="Lorem Ipsum dolo sit amet"
        kpiValues={[
          {
            caption: 'strawberry fields',
            id: '1',
            kpiIcon: {
              icon: 'AllInclusive',
            },
            value: 30000,
          },
          {
            caption: 'yellow submarines',
            id: '2',
            kpiIcon: {
              icon: 'Houseboat',
            },
            value: 10,
          },
          {
            caption: 'honey pies',
            id: '3',
            kpiIcon: {
              icon: 'PieChart',
            },
            value: 100,
          },
        ]}
        theme="dark"
        title="Non perderti più nessuna notifica"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly standard light ', () => {
  const tree = renderer
    .create(
      <Stats
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all’integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        eyelet="PER I CITTADINI"
        kpiCaption="Lorem Ipsum dolo sit amet"
        kpiValues={[
          {
            caption: 'strawberry fields',
            id: '1',
            kpiIcon: {
              icon: 'AllInclusive',
            },
            value: 30000,
          },
          {
            caption: 'yellow submarines',
            id: '2',
            kpiIcon: {
              icon: 'Houseboat',
            },
            value: 10,
          },
          {
            caption: 'honey pies',
            id: '3',
            kpiIcon: {
              icon: 'PieChart',
            },
            value: 100,
          },
        ]}
        theme="light"
        title="Non perderti più nessuna notifica"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly column dark ', () => {
  const tree = renderer
    .create(
      <Stats
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all’integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        eyelet="PER I CITTADINI"
        kpiCaption="Lorem Ipsum dolo sit amet"
        kpiValues={[
          {
            caption: 'strawberry fields',
            id: '1',
            kpiIcon: {
              icon: 'AllInclusive',
            },
            value: 30000,
          },
          {
            caption: 'yellow submarines',
            id: '2',
            kpiIcon: {
              icon: 'Houseboat',
            },
            value: 10,
          },
          {
            caption: 'honey pies',
            id: '3',
            kpiIcon: {
              icon: 'PieChart',
            },
            value: 100,
          },
        ]}
        theme="dark"
        title="Non perderti più nessuna notifica"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly column light ', () => {
  const tree = renderer
    .create(
      <Stats
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all’integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        eyelet="PER I CITTADINI"
        kpiCaption="Lorem Ipsum dolo sit amet"
        kpiValues={[
          {
            caption: 'strawberry fields',
            id: '1',
            kpiIcon: {
              icon: 'AllInclusive',
            },
            value: 30000,
          },
          {
            caption: 'yellow submarines',
            id: '2',
            kpiIcon: {
              icon: 'Houseboat',
            },
            value: 10,
          },
          {
            caption: 'honey pies',
            id: '3',
            kpiIcon: {
              icon: 'PieChart',
            },
            value: 100,
          },
        ]}
        theme="light"
        title="Non perderti più nessuna notifica"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly row dark ', () => {
  const tree = renderer
    .create(
      <Stats
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all’integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        direction="row"
        eyelet="PER I CITTADINI"
        kpiCaption="Lorem Ipsum dolo sit amet"
        kpiValues={[
          {
            caption: 'strawberry fields',
            id: '1',
            kpiIcon: {
              icon: 'AllInclusive',
            },
            value: 30000,
          },
          {
            caption: 'yellow submarines',
            id: '2',
            kpiIcon: {
              icon: 'Houseboat',
            },
            value: 10,
          },
          {
            caption: 'honey pies',
            id: '3',
            kpiIcon: {
              icon: 'PieChart',
            },
            value: 100,
          },
        ]}
        theme="dark"
        title="Non perderti più nessuna notifica"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly row light ', () => {
  const tree = renderer
    .create(
      <Stats
        body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all’integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
        direction="row"
        eyelet="PER I CITTADINI"
        kpiCaption="Lorem Ipsum dolo sit amet"
        kpiValues={[
          {
            caption: 'strawberry fields',
            id: '1',
            kpiIcon: {
              icon: 'AllInclusive',
            },
            value: 30000,
          },
          {
            caption: 'yellow submarines',
            id: '2',
            kpiIcon: {
              icon: 'Houseboat',
            },
            value: 10,
          },
          {
            caption: 'honey pies',
            id: '3',
            kpiIcon: {
              icon: 'PieChart',
            },
            value: 100,
          },
        ]}
        theme="light"
        title="Non perderti più nessuna notifica"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly row and custom body dark ', () => {
  const tree = renderer
    .create(
      <Stats
        body={
          <p>
            Con <b>Piattaforma Notifiche</b>, ricevi e gestisci nello stesso
            spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche
            Amministrazioni, come multe o certificati elettorali. E, grazie
            all’integrazione con <b>pagoPA</b>, puoi anche pagare eventuali
            costi. Così, risparmi tempo e denaro.
          </p>
        }
        direction="row"
        eyelet="PER I CITTADINI"
        kpiCaption="Lorem Ipsum dolo sit amet"
        kpiValues={[
          {
            caption: 'strawberry fields',
            id: '1',
            kpiIcon: {
              icon: 'AllInclusive',
            },
            value: 30000,
          },
          {
            caption: 'yellow submarines',
            id: '2',
            kpiIcon: {
              icon: 'Houseboat',
            },
            value: 10,
          },
          {
            caption: 'honey pies',
            id: '3',
            kpiIcon: {
              icon: 'PieChart',
            },
            value: 100,
          },
        ]}
        theme="dark"
        title="Non perderti più nessuna notifica"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly row and custom body light ', () => {
  const tree = renderer
    .create(
      <Stats
        body={
          <p>
            Con <b>Piattaforma Notifiche</b>, ricevi e gestisci nello stesso
            spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche
            Amministrazioni, come multe o certificati elettorali. E, grazie
            all’integrazione con <b>pagoPA</b>, puoi anche pagare eventuali
            costi. Così, risparmi tempo e denaro.
          </p>
        }
        direction="row"
        eyelet="PER I CITTADINI"
        kpiCaption="Lorem Ipsum dolo sit amet"
        kpiValues={[
          {
            caption: 'strawberry fields',
            id: '1',
            kpiIcon: {
              icon: 'AllInclusive',
            },
            value: 30000,
          },
          {
            caption: 'yellow submarines',
            id: '2',
            kpiIcon: {
              icon: 'Houseboat',
            },
            value: 10,
          },
          {
            caption: 'honey pies',
            id: '3',
            kpiIcon: {
              icon: 'PieChart',
            },
            value: 100,
          },
        ]}
        theme="light"
        title="Non perderti più nessuna notifica"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly colum of five dark ', () => {
  const tree = renderer
    .create(
      <Stats
        body=""
        eyelet="PER I CITTADINI"
        kpiCaption="Lorem Ipsum dolo sit amet"
        kpiValues={[
          {
            caption: 'strawberry fields',
            id: '1',
            kpiIcon: {
              icon: 'AllInclusive',
            },
            value: 30000,
          },
          {
            caption: 'yellow submarines',
            id: '2',
            kpiIcon: {
              color: 'yellow',
              icon: 'Houseboat',
            },
            value: 10,
          },
          {
            caption: 'honey pies',
            id: '3',
            kpiIcon: {
              icon: 'PieChart',
            },
            value: 100,
          },
          {
            caption: 'diamonds',
            id: '4',
            kpiIcon: {
              icon: 'Diamond',
            },
            value: 532,
          },
          {
            caption: 'lonely people',
            id: '5',
            value: 0,
          },
        ]}
        theme="dark"
        title="Non perderti più nessuna notifica"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly colum of five light ', () => {
  const tree = renderer
    .create(
      <Stats
        body=""
        eyelet="PER I CITTADINI"
        kpiCaption="Lorem Ipsum dolo sit amet"
        kpiValues={[
          {
            caption: 'strawberry fields',
            id: '1',
            kpiIcon: {
              icon: 'AllInclusive',
            },
            value: 30000,
          },
          {
            caption: 'yellow submarines',
            id: '2',
            kpiIcon: {
              color: 'yellow',
              icon: 'Houseboat',
            },
            value: 10,
          },
          {
            caption: 'honey pies',
            id: '3',
            kpiIcon: {
              icon: 'PieChart',
            },
            value: 100,
          },
          {
            caption: 'diamonds',
            id: '4',
            kpiIcon: {
              icon: 'Diamond',
            },
            value: 532,
          },
          {
            caption: 'lonely people',
            id: '5',
            value: 0,
          },
        ]}
        theme="light"
        title="Non perderti più nessuna notifica"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
