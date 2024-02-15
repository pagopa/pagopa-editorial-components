import { HowTo } from './index';
import DownloadIcon from '@mui/icons-material/Download';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

// Storyboard has different code, might be an old implementation?
import renderer from 'react-test-renderer';

it('renders correctly with icon dark ', () => {
  const tree = renderer
    .create(
      <HowTo
        steps={[
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            stepIcon: {
              icon: <DownloadIcon />,
            },
            title: 'Sicuro',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            stepIcon: <DownloadIcon />,
            title:
              'Un risparmio di denaro per tutti: cittadini, imprese ed enti ',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            stepIcon: <DownloadIcon />,
            title:
              'I tempi di attesa tra l’invio e la ricezione delle notifiche spariscono',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            stepIcon: <DownloadIcon />,
            title:
              'La CO2 emessa per erogare il servizio diminuisce sensibilmente',
          },
        ]}
        title={'title'}
        theme={'dark'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly no icons dark ', () => {
  const tree = renderer
    .create(
      <HowTo
        steps={[
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title: 'Sicuro',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'Un risparmio di denaro per tutti: cittadini, imprese ed enti ',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'I tempi di attesa tra l’invio e la ricezione delle notifiche spariscono',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'La CO2 emessa per erogare il servizio diminuisce sensibilmente',
          },
        ]}
        title={'test'}
        theme={'dark'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly bottom link dark', () => {
  const tree = renderer
    .create(
      <HowTo
        link={{
          href: '#',
          label: 'See more',
        }}
        steps={[
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title: 'Sicuro',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'Un risparmio di denaro per tutti: cittadini, imprese ed enti ',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'I tempi di attesa tra l’invio e la ricezione delle notifiche spariscono',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'La CO2 emessa per erogare il servizio diminuisce sensibilmente',
          },
        ]}
        title={'test'}
        theme={'dark'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with icon light ', () => {
  const tree = renderer
    .create(
      <HowTo
        steps={[
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            stepIcon: {
              icon: <DownloadIcon />,
            },
            title: 'Sicuro',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            stepIcon: <DownloadIcon />,
            title:
              'Un risparmio di denaro per tutti: cittadini, imprese ed enti ',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            stepIcon: <DownloadIcon />,
            title:
              'I tempi di attesa tra l’invio e la ricezione delle notifiche spariscono',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            stepIcon: <DownloadIcon />,
            title:
              'La CO2 emessa per erogare il servizio diminuisce sensibilmente',
          },
        ]}
        title={'title'}
        theme={'light'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly no icons light ', () => {
  const tree = renderer
    .create(
      <HowTo
        steps={[
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title: 'Sicuro',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'Un risparmio di denaro per tutti: cittadini, imprese ed enti ',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'I tempi di attesa tra l’invio e la ricezione delle notifiche spariscono',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'La CO2 emessa per erogare il servizio diminuisce sensibilmente',
          },
        ]}
        title={'test'}
        theme={'light'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly bottom link light', () => {
  const tree = renderer
    .create(
      <HowTo
        link={{
          href: '#',
          label: 'See more',
        }}
        steps={[
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title: 'Sicuro',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'Un risparmio di denaro per tutti: cittadini, imprese ed enti ',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'I tempi di attesa tra l’invio e la ricezione delle notifiche spariscono',
          },
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. ',
            title:
              'La CO2 emessa per erogare il servizio diminuisce sensibilmente',
          },
        ]}
        title={'test'}
        theme={'light'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
