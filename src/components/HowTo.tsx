import React from 'react';
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import howToBackgroundDark from '../assets/images/how-to-background-dark.jpeg';
import howToBackgroundLight from '../assets/images/how-to-background-light.jpeg';

interface Step {
  Icon?: React.ReactNode;
  title: string;
  description: string | React.ReactNode;
  link?: {
    href: string;
    label: string;
    target?: React.HTMLAttributeAnchorTarget;
  };
}

export interface HowToProps {
  title: string;
  steps: Step[];
  theme: 'light' | 'dark';
}

const HowTo: React.FC<HowToProps> = ({ title, steps, theme }) => {
  const isDarkTheme = theme === 'dark';
  const background = isDarkTheme ? howToBackgroundDark : howToBackgroundLight;

  return (
    <Box
      sx={{ position: 'relative', py: { xs: 6, md: 8 }, px: { xs: 2, md: 0 } }}
      component="section"
    >
      {/** Background */}
      <Box
        component="img"
        // https://www.w3.org/WAI/tutorials/images/decorative/#example-1-image-used-as-part-of-page-design
        role="presentation"
        loading="lazy"
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -10,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
        src={background}
      />
      <Container>
        {/** Section title */}
        <Typography
          color={isDarkTheme ? 'white' : 'text.primary'}
          sx={{ textAlign: 'center', mb: 8 }}
          variant="h4"
        >
          {title}
        </Typography>

        {/** Steps */}
        <Stack
          direction={{ md: 'row' }}
          justifyContent="center"
          flexWrap="wrap"
          gap={{ xs: 4, md: 8 }}
        >
          {steps.map((step, i) => (
            <Box key={i} flexGrow={0.25} flexBasis={'20%'}>
              <HowToStep
                index={i}
                theme={theme}
                isLastStep={i === steps.length - 1}
                {...step}
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

const HowToStep: React.FC<
  Step & { index: number; theme: 'light' | 'dark'; isLastStep: boolean }
> = ({ index, Icon, title, link, description, theme, isLastStep }) => {
  const isDarkTheme = theme === 'dark';
  const stepNum = index + 1;

  return (
    <Stack spacing={1}>
      {/** Step with icon */}
      {Icon && (
        <Stack spacing={1.2}>
          <Typography
            color={isDarkTheme ? 'white' : 'primary'}
            sx={{ opacity: 0.6 }}
            variant="overline"
          >{`0${stepNum}`}</Typography>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            color={isDarkTheme ? 'white' : undefined}
          >
            {Icon}
            {!isLastStep && (
              <ArrowForwardIcon
                color={!isDarkTheme ? 'primary' : undefined}
                sx={{ transform: { xs: 'rotate(90deg)', md: 'none' } }}
              />
            )}
          </Stack>
        </Stack>
      )}
      {/** Step without icon */}
      {!Icon && (
        <Typography
          color={isDarkTheme ? 'white' : 'primary'}
          variant="h6"
          component="p"
        >{`0${++index}`}</Typography>
      )}
      {/** Step title */}
      <Typography
        color={isDarkTheme ? 'white' : 'text.primary'}
        variant="h5"
        component="p"
      >
        {title}
      </Typography>
      {/** Step description */}
      {typeof description === 'string' ? (
        <Typography
          color={isDarkTheme ? 'white' : 'text.primary'}
          variant="body2"
        >
          {description}
        </Typography>
      ) : (
        <Box color={isDarkTheme ? 'white' : 'text.primary'}>{description}</Box>
      )}

      {/** Link */}
      {link && (
        <Link
          href={link.href}
          target={link.target}
          color={isDarkTheme ? 'white' : 'primary'}
          underline="none"
          fontWeight={600}
        >
          {link.label}
        </Link>
      )}
    </Stack>
  );
};

export default HowTo;
