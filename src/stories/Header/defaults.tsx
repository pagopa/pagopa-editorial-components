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
    product: {
      name: 'Nome del prodotto',
      href: '/',
    },
    menu: [
      {
        theme: 'light',
        label: 'Voce Menu 1',
        items: [
          { key: 1, href: '#', label: 'Voce menu secondo livello' },
          { key: 2, href: '#', label: 'Voce menu secondo livello' },
          { key: 3, href: '#', label: 'Voce menu secondo livello' },
        ],
      },
      {
        theme: 'light',
        label: 'Voce Menu 2',
        active: true,
        items: [
          { key: 1, href: '#', label: 'Secondo livello' },
          { key: 2, href: '#', label: 'Secondo livello' },
        ],
      },
      {
        theme: 'light',
        label: 'Voce Menu 3',
        href: '/#',
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
