import {
  Box,
  Button,
  type ButtonProps,
  Stack,
  Typography,
  Grid,
} from '@mui/material';
import { type CommonProps, type Generic } from 'types/components';
import { isJSX } from '../../utils';
import EContainer from './../EContainer';

export interface HeroProps extends CommonProps, HeroTextProps {
  image?: string | Generic;
  altText?: string;
  inverse?: boolean;
  background?: string | Generic;
  useHoverlay?: boolean;
}

interface CtaButton extends Partial<ButtonProps> {
  text: string;
}

interface HeroTextProps extends CommonProps {
  title: string;
  subtitle?: string | Generic;
  ctaButtons?: Array<CtaButton | Generic>;
  size?: 'medium' | 'big' | 'small';
}

const HeroTextContent = ({
  title,
  subtitle,
  ctaButtons,
  theme,
  size,
}: HeroTextProps) => {
  const textColor = theme === 'dark' ? 'primary.contrastText' : 'text.primary';
  return (
    <Stack
      justifyContent={size === 'small' ? 'center' : { md: 'center' }}
      alignItems={size === 'small' ? 'center' : 'inherit'}
      sx={{ minHeight: 'inherit' }}
      mt={{ xs: 9, lg: 0 }}
      component="section"
    >
      <Box mb={size === 'small' ? 0 : { xs: 6, md: 4 }}>
        <>
          <Typography
            variant="h1"
            color={textColor}
            mb={size === 'small' ? 0 : 2}
          >
            {title}
          </Typography>
          {isJSX(subtitle) ? (
            subtitle
          ) : (
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
  const minHeight =
    size === 'big' ? '720px' : size === 'medium' ? '480px' : '220px';

  const overlay = useHoverlay
    ? theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65)), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), '
    : '';
  const backgroundColor = theme === 'dark' ? 'primary.dark' : 'primary.paper';

  const BackgroundImage = isJSX(background) ? (
    background
  ) : (
    <Box
      // https://www.w3.org/WAI/tutorials/images/decorative/#example-1-image-used-as-part-of-page-design
      role="presentation"
      sx={{
        px: { xs: 4 },
        position: 'absolute',
        inset: 0,
        zIndex: -10,
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `${overlay}url(${background ?? ''})`,
      }}
    />
  );

  return (
    <EContainer
      background={!background ? backgroundColor : BackgroundImage}
      direction={inverse ? 'row-reverse' : 'row'}
    >
      <Grid
        item
        lg={size === 'small' ? 12 : 6}
        sx={{ minHeight: { lg: minHeight } }}
      >
        <HeroTextContent {...props} />
      </Grid>
      {size !== 'small' && image ? (
        <Grid item lg={6} mb={{ xs: 4, lg: 0 }} component="figure">
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
      ) : null}
    </EContainer>
  );
};

export default Hero;