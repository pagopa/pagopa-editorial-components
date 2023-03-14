import Button, { type ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CSSProperties, type ImgHTMLAttributes } from 'react';
import { type CommonProps } from 'types/components';

interface CtaButton {
  text: string;
}

interface EditorialTextProps extends CommonProps {
  title: string;
  ctaButtons?: CtaButton[];
}

export interface EditorialProps extends CommonProps, EditorialTextProps {
  image?: ImgHTMLAttributes<HTMLImageElement>;
  eyelet?: string;
  body?: string;
  inverse?: boolean;
}

const Editorial = ({
  image,
  eyelet,
  title,
  body,
  theme,
  ctaButtons,
  inverse,
}: EditorialProps) => {
  const headerColor =
    theme === 'dark' ? 'primary.contrastText' : 'text.secondary';
  const textColor = theme === 'dark' ? 'primary.contrastText' : 'text.primary';

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

  return (
    <Grid
      container
      sx={styles.main}
      direction={{
        md: inverse ? 'row-reverse' : 'row',
      }}
    >
      <Grid item md={5} sx={styles.half}>
        <Stack gap="32px">
          <Stack maxWidth={{ md: '448px' }} gap="16px">
            <Typography variant="overline" color={headerColor}>
              {eyelet}
            </Typography>
            <Typography color={textColor} variant="h4">
              {title}
            </Typography>
            <Typography color={textColor} variant="body2">
              {body}
            </Typography>
          </Stack>
          {ctaButtons?.length ? (
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              {ctaButtons.map((button: CtaButton, i) => {
                return (
                  <Button key={`${button.text}-${i}`} {...buttonsTheme[i]}>
                    {button.text}
                  </Button>
                );
              })}
            </Stack>
          ) : null}
        </Stack>
      </Grid>
      <Grid item md={5} sx={styles.half}>
        {image && <img style={styles.img} {...image} />}
      </Grid>
    </Grid>
  );
};

const styles: Record<string, CSSProperties> = {
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    gap: '32px',
  },
  half: {
    display: 'grid',
    justifyContent: 'center',
  },
  img: {
    objectFit: 'contain',
    objectPosition: 'center',
    height: 'auto',
    maxWidth: '100%',
    userSelect: 'none',
  },
};

export default Editorial;
