import {
  Box,
  Button,
  type ButtonProps,
  Stack,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import { type CommonProps, type Generic } from 'types/components';
import { isJSX } from '../utils';

export interface HeroProps extends CommonProps, HeroTextProps {
  image?: string | Generic;
  altText?: string;
  inverse?: boolean;
  background?: string;
  size?: 'small' | 'big';
  useHoverlay?: boolean;
}

interface CtaButton extends Partial<ButtonProps> {
  text: string;
}

interface HeroTextProps extends CommonProps {
  title: string;
  subtitle?: string | Generic;
  ctaButtons?: Array<CtaButton | Generic>;
}

const HeroTextContent = ({
  title,
  subtitle,
  ctaButtons,
  theme,
}: HeroTextProps) => {
  const textColor = theme === 'dark' ? 'primary.contrastText' : 'text.primary';
  return (
    <Stack
      justifyContent={{ md: 'center' }}
      sx={{ minHeight: 'inherit' }}
      mt={{ xs: 9, lg: 0 }}
    >
      <Box mb={{ xs: 6, md: 4 }}>
        <>
          <Typography variant="h1" color={textColor} mb={2}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body1" color={textColor}>
              {subtitle}
            </Typography>
          )}
        </>
      </Box>
      {ctaButtons?.length ? (
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          mb={{ xs: 8, lg: 0 }}
        >
          {ctaButtons.map((button, i) => {
            if (isJSX(button)) return button;
            return (
              <Button key={`${button.text}-${i}`} {...button}>
                {button.text}
              </Button>
            );
          })}
        </Stack>
      ) : null}
    </Stack>
  );
};

const Hero = (props: HeroProps) => {
  const {
    size,
    inverse = false,
    background,
    theme = 'dark',
    useHoverlay = true,
    image,
    altText = '',
  } = props;
  const minHeight = size === 'big' ? '720px' : '480px';

  const overlay = useHoverlay
    ? theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65)), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), '
    : '';

  return (
    <Box
      component="section"
      bgcolor="primary.main"
      sx={{
        px: { xs: 4 },
        backgroundImage: `${overlay}url(${background ?? ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          direction={inverse ? 'row-reverse' : 'row'}
          sx={{ minHeight: { lg: minHeight } }}
        >
          <Grid item lg={6} sx={{ minHeight: 'inherit' }}>
            <HeroTextContent {...props} />
          </Grid>
          {image && (
            <Grid item lg={6} mb={{ xs: 4, lg: 0 }}>
              {isJSX(image) ? (
                image
              ) : (
                <img
                  alt={altText}
                  src={image}
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    width: '100%',
                    height: '100%',
                    maxHeight: minHeight,
                    userSelect: 'none',
                  }}
                />
              )}
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
