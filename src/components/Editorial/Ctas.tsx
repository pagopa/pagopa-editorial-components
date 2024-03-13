import Button, { type ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { isValidElement } from 'react';
import { type CommonProps } from 'types/components';

interface CtaButtonProps extends Partial<ButtonProps> {
  text: string;
}

type CtaButton = CtaButtonProps | JSX.Element;

export interface StoreButtonsProps {
  hrefGoogle?: string;
  hrefApple?: string;
}

export interface EditorialCtaProps extends CommonProps {
  ctaButtons?: CtaButton[];
  storeButtons?: StoreButtonsProps;
}

const isButtonProps = (button: CtaButton): button is CtaButtonProps => {
  return !isValidElement(button);
};

export const Ctas = ({
  ctaButtons,
  storeButtons,
  theme,
}: EditorialCtaProps) => {
  const buttonsTheme: ButtonProps[] = [
    {
      color: theme === 'dark' ? 'negative' : 'primary',
      variant: 'contained',
    },
    {
      color: theme === 'dark' ? 'negative' : 'primary',
      variant: 'outlined',
    },
  ];

  if (storeButtons) {
    return (
      <Stack
        direction={{ md: 'row-reverse', xs: 'row' }}
        justifyContent="left"
        spacing={2}
      >
        {storeButtons.hrefGoogle && (
          <Button
            sx={{ width: { md: 'auto', xs: '100%' } }}
            key="google"
            href={storeButtons.hrefGoogle}
          >
            Google Play
          </Button>
        )}
        {storeButtons.hrefApple && (
          <Button
            sx={{ width: { md: 'auto', xs: '100%' } }}
            key="apple"
            href={storeButtons.hrefApple}
          >
            App Store
          </Button>
        )}
      </Stack>
    );
  }

  return ctaButtons?.length ? (
    <Stack
      direction={{ md: 'row-reverse', xs: 'row' }}
      justifyContent="left"
      spacing={2}
    >
      {ctaButtons.map((button: CtaButton, i) => {
        return isButtonProps(button) ? (
          <Button
            sx={{ width: { md: 'auto', xs: '100%' } }}
            key={`${button.text}-${i}`}
            {...buttonsTheme[i]}
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
