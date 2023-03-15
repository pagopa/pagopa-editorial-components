import Button, { type ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { type CommonProps } from 'types/components';

interface CtaButton {
  text: string;
}

export interface EditorialCtaProps extends CommonProps {
  ctaButtons?: CtaButton[];
}

export const Ctas = ({ ctaButtons, theme }: EditorialCtaProps) => {
  const buttonsTheme: ButtonProps[] = [
    {
      color: theme === 'dark' ? 'negative' : 'primary',
      variant: 'outlined',
    },
    {
      color: theme === 'dark' ? 'negative' : 'primary',
      variant: 'contained',
    },
  ];

  return ctaButtons?.length ? (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      {ctaButtons.map((button: CtaButton, i) => {
        return (
          <Button key={`${button.text}-${i}`} {...buttonsTheme[i]}>
            {button.text}
          </Button>
        );
      })}
    </Stack>
  ) : null;
};
