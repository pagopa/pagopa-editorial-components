import Button, { type ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { isValidElement } from 'react';
import { type CommonProps } from 'types/components';
import appleBadge from '../../assets/images/app-store-badge.png';
import googleBadge from '../../assets/images/google-play-badge.png';
import { ThemeProvider, createTheme } from '@mui/material';

interface CtaButtonProps extends Partial<ButtonProps> {
  text: string;
}

type CtaButton = CtaButtonProps | JSX.Element;

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

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
      <ThemeProvider theme={customTheme}>
        <Stack
          direction={{ xs: 'column', sm: 'row-reverse' }}
          justifyContent="left"
          spacing={2}
        >
          {storeButtons.hrefGoogle && (
            <Button
              sx={{
                padding: '0px',
                margin: '0px',
                justifyContent: 'start',
              }}
              key="google"
              href={storeButtons.hrefGoogle}
            >
              <img
                src={googleBadge}
                alt="Download on the App Store"
                style={{ height: '3em' }}
              />
            </Button>
          )}
          {storeButtons.hrefApple && (
            <Button
              sx={{
                padding: '0px',
                margin: '0px',
                justifyContent: 'start',
              }}
              key="apple"
              href={storeButtons.hrefApple}
            >
              <img
                src={appleBadge}
                alt="Download on the App Store"
                style={{ height: '3em' }}
              />
            </Button>
          )}
        </Stack>
      </ThemeProvider>
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
