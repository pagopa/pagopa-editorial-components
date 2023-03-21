import { type HeaderProps } from 'components/Header/Header';

export const defaults: {
  args: HeaderProps;
  ctaButtons: HeaderProps['ctaButtons'];
} = {
  args: {
    theme: 'light',
    product: 'Nome del prodotto',
    help: true,
    onHelpClick: () => {
      alert('Assistenza');
    },
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
        active: true,
        children: [
          <li key={4}> first </li>,
          <li key={5}> second </li>,
          <li key={6}> third </li>,
        ],
      },
      {
        label: 'Voce Menu 3',
        onClick: () => {
          alert('Voce Menu 3');
        },
      },
    ],
  },
  ctaButtons: [
    {
      text: 'Primary',
      color: 'primary',
      variant: 'contained',
      size: 'small',
      onClick: () => {
        alert('Primary');
      },
    },
    {
      text: 'Secondary',
      color: 'primary',
      variant: 'outlined',
      size: 'small',
      onClick: () => {
        alert('Secondary');
      },
    },
  ],
};
