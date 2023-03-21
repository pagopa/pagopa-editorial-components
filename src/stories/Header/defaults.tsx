import { type HeaderProps } from 'components/Header/Header';
import lavoraConNoi from '../assets/Header/LAVORA-CON-NOI.png';

export const defaults: {
  args: HeaderProps;
  ctaButtons: {
    dark: HeaderProps['ctaButtons'];
    light: HeaderProps['ctaButtons'];
  };
  avatar: HeaderProps['avatar'];
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
        theme: 'light',
        label: 'Voce Menu 1',
        children: [
          <li key={1}> first </li>,
          <li key={2}> second </li>,
          <li key={3}> third </li>,
        ],
      },
      {
        theme: 'light',
        label: 'Voce Menu 2',
        active: true,
        children: [
          <li key={4}> first </li>,
          <li key={5}> second </li>,
          <li key={6}> third </li>,
        ],
      },
      {
        theme: 'light',
        label: 'Voce Menu 3',
        onClick: () => {
          alert('Voce Menu 3');
        },
      },
    ],
  },
  ctaButtons: {
    light: [
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
    dark: [
      {
        text: 'Primary',
        color: 'negative',
        variant: 'contained',
        size: 'small',
        onClick: () => {
          alert('Primary');
        },
      },
      {
        text: 'Secondary',
        color: 'negative',
        variant: 'outlined',
        size: 'small',
        onClick: () => {
          alert('Secondary');
        },
      },
    ],
  },
  avatar: { src: lavoraConNoi, alt: 'product avatar' },
};
