import { type HeaderProps } from 'components/Header/Header';

export const defaults: { args: HeaderProps } = {
  args: {
    theme: 'light',
    product: 'Nome del prodotto',
    help: true,
    menu: [
      {
        label: 'Voce Menu 1',
        children: [
          <li key={1}> first </li>,
          <li key={2}> second </li>,
          <li key={3}> third </li>,
        ],
      },
      {
        label: 'Voce Menu 2',
        children: [
          <li key={4}> first </li>,
          <li key={5}> second </li>,
          <li key={6}> third </li>,
        ],
      },
    ],
  },
};
