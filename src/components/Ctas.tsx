import Button, { type ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { isValidElement } from 'react';
import { type CommonProps } from 'types/components';

interface CtaButtonProps extends Partial<ButtonProps> {
  text: string;
}

type CtaButton = CtaButtonProps | JSX.Element;

export interface CtaProps extends CommonProps {
  ctaButtons?: CtaButton[];
  reverse?: boolean;
}

const isButtonProps = (button: CtaButton): button is CtaButtonProps => {
  return !isValidElement(button);
};

export const Ctas = ({ ctaButtons, theme, reverse }: CtaProps) => {
  const buttonsThemeDefault: ButtonProps[] = [
    {
      color: theme === 'dark' ? 'negative' : 'primary',
      variant: 'contained',
    },
    {
      color: theme === 'dark' ? 'negative' : 'primary',
      variant: 'outlined',
    },
  ];

  return ctaButtons?.length ? (
    <Stack
      display="flex"
      direction={reverse ? 'row-reverse' : 'row'}
      justifyContent="left"
      spacing={2}
    >
      {ctaButtons.map((button: CtaButton, i) => {
        return isButtonProps(button) ? (
          <Button
            sx={{ width: { md: 'auto', xs: '100%' }, display: 'flex' }}
            key={`${button.text}-${i}`}
            {...buttonsThemeDefault[i]}
            {...button}
          >
            {button.text}
          </Button>
        ) : (
          button
        );
      })}
    </Stack>
  ) : null;
};
