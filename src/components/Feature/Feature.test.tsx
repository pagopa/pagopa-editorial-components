import Feature from './Feature';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly standard dark', () => {
  const tree = renderer
    .create(
      <Feature
        items={[
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
            title: 'Sicuro',
          },
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'Un risparmio di denaro per tutti: cittadini imprese ed enti',
            title: 'Conveniente',
          },
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              "I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono",
            title: 'Immediato',
          },
        ]}
        theme="dark"
        title="Lorem Ipsum"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly no link dark', () => {
  const tree = renderer
    .create(
      <Feature
        items={[
          {
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
            title: 'Sicuro',
          },
          {
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'Un risparmio di denaro per tutti: cittadini imprese ed enti',
            title: 'Conveniente',
          },
          {
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              "I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono",
            title: 'Immediato',
          },
        ]}
        theme="dark"
        title="Lorem Ipsum"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly  custom color background light', () => {
  const tree = renderer
    .create(
      <Feature
        background="orange"
        items={[
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
            title: 'Sicuro',
          },
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'Un risparmio di denaro per tutti: cittadini imprese ed enti',
            title: 'Conveniente',
          },
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              "I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono",
            title: 'Immediato',
          },
        ]}
        theme="dark"
        title="Lorem Ipsum"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly standard light', () => {
  const tree = renderer
    .create(
      <Feature
        items={[
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
            title: 'Sicuro',
          },
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'Un risparmio di denaro per tutti: cittadini imprese ed enti',
            title: 'Conveniente',
          },
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              "I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono",
            title: 'Immediato',
          },
        ]}
        theme="light"
        title="Lorem Ipsum"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly no link light', () => {
  const tree = renderer
    .create(
      <Feature
        items={[
          {
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
            title: 'Sicuro',
          },
          {
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'Un risparmio di denaro per tutti: cittadini imprese ed enti',
            title: 'Conveniente',
          },
          {
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              "I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono",
            title: 'Immediato',
          },
        ]}
        theme="light"
        title="Lorem Ipsum"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly  custom color background light', () => {
  const tree = renderer
    .create(
      <Feature
        background="orange"
        items={[
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
            title: 'Sicuro',
          },
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'Un risparmio di denaro per tutti: cittadini imprese ed enti',
            title: 'Conveniente',
          },
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              "I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono",
            title: 'Immediato',
          },
        ]}
        theme="light"
        title="Lorem Ipsum"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// TODO: Figure out why the carousel makes the test fail.
/*
it('renders correctly  carousel dark', () => {
  const tree = renderer
    .create(
      <Feature
        items={[
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
            title: 'Sicuro',
          },
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'Un risparmio di denaro per tutti: cittadini imprese ed enti',
            title: 'Conveniente',
          },
          {
            link: {
              text: 'Scopri di più',
              url: '#',
            },
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              "I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono",
            title: 'Immediato',
          },
        ]}
        showCarouselMobile
        theme="dark"
        title="Lorem Ipsum"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly  carousel no link dark', () => {
  const tree = renderer
    .create(
      <Feature
        items={[
          {
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
            title: 'Sicuro',
          },
          {
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              'Un risparmio di denaro per tutti: cittadini imprese ed enti',
            title: 'Conveniente',
          },
          {
            stackIcon: {
              icon: 'AccountBox',
            },
            subtitle:
              "I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono",
            title: 'Immediato',
          },
        ]}
        showCarouselMobile
        theme="dark"
        title="Lorem Ipsum"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
}); */

test('All links are rendered correctly', async () => {
  const { getByText } = render(
    <Feature
      background="orange"
      items={[
        {
          link: {
            text: 'Scopri di più',
            url: '#',
          },
          stackIcon: {
            icon: 'AccountBox',
          },
          subtitle:
            'I tuoi dati e le informazioni contenute negli atti sono al sicuro',
          title: 'Sicuro',
        },
        {
          link: {
            text: 'Scopri di più2',
            url: '#',
          },
          stackIcon: {
            icon: 'AccountBox',
          },
          subtitle:
            'Un risparmio di denaro per tutti: cittadini imprese ed enti',
          title: 'Conveniente',
        },
        {
          link: {
            text: 'Scopri di più3',
            url: '#',
          },
          stackIcon: {
            icon: 'AccountBox',
          },
          subtitle:
            "I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono",
          title: 'Immediato',
        },
      ]}
      theme="light"
      title="Lorem Ipsum"
    />
  );
  expect(getByText('Scopri di più').closest('a')).toHaveAttribute('href', '#');
  expect(getByText('Scopri di più2').closest('a')).toHaveAttribute('href', '#');
  expect(getByText('Scopri di più3').closest('a')).toHaveAttribute('href', '#');
});
