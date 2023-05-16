import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const defaults = {
  args: {
    leftCtas: {
      theme: 'light',
      ctaButtons: [
        { text: 'Link', variant: 'naked', color: 'inherit', href: '#' },
      ],
    },
    rightCtas: {
      theme: 'light',
      ctaButtons: [
        {
          text: 'Assistenza',
          variant: 'naked',
          color: 'inherit',
          startIcon: <HelpOutlineIcon />,
          onClick: () => {
            alert('Assistenza');
          },
        },
      ],
    },
  },
};
