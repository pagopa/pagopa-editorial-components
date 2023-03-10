import { Box, Button, Stack, Typography, Container, Grid } from '@mui/material';
import { type CommonProps, type Generic } from 'types/components';

export interface HeroProps extends CommonProps, HeroTextProps {
  image?: string;
  altText?: string;
  inverse?: boolean;
  background?: string;
  size?: 'small' | 'big';
}

interface HeroTextProps extends CommonProps {
  title: string;
  subtitle?: string | Generic;
  ctaButtons?: Array<{ text: string; color: string; variant: string }>;
}

// const HERO_TEXT_PADDING = { xs: 4, sm: 4, md: 9 };

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
      <Typography variant="h1" color={textColor} mb={2}>
        {title}
      </Typography>
      <>
        {subtitle && (
          <Typography variant="body1" color={textColor}>
            {subtitle}
          </Typography>
        )}
      </>
      {ctaButtons?.length && (
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          mt={4}
          mb={{ xs: 4 }}
        >
          {ctaButtons?.map(({ text, color, variant }, i) => (
            // @ts-expect-error
            <Button key={`${text}-${i}`} color={color} variant={variant}>
              {text}
            </Button>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

const Hero = (props: HeroProps) => {
  const { size, inverse = false, background, theme = 'dark' } = props;
  const minHeight = size === 'big' ? '720px' : '480px';

  const overlay =
    theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65))'
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))';

  return (
    <Box
      bgcolor="primary.main"
      sx={{
        backgroundImage: `${overlay}, url(${background ?? ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction={inverse ? 'row-reverse' : 'row'}
          sx={{ minHeight: { sm: minHeight } }}
        >
          <Grid item lg={6} sx={{ minHeight: 'inherit' }}>
            <HeroTextContent {...props} />
          </Grid>
          {props.image && (
            <Grid item lg={6}>
              <img
                alt={props.altText}
                src={props.image}
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  width: '100%',
                  height: '100%',
                  maxHeight: minHeight,
                  userSelect: 'none',
                }}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
