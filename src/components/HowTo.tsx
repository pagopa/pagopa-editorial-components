import React from 'react';
import type { SvgIconComponent } from '@mui/icons-material';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import howToBackgroundDark from '../assets/images/how-to-background-dark.jpeg';
import howToBackgroundLight from '../assets/images/how-to-background-light.jpeg';

interface Step {
  Icon?: SvgIconComponent;
  title: string;
  description: string;
}

export interface HowToProps {
  title: string;
  steps: [Step, Step, Step, Step];
  theme: 'light' | 'dark';
}

const HowTo: React.FC<HowToProps> = ({ title, steps, theme }) => {
  const isDarkTheme = theme === 'dark';
  const background = isDarkTheme ? howToBackgroundDark : howToBackgroundLight;

  return (
    <Box sx={{ position: 'relative', py: 8 }} component="section">
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
        <Typography
          color={isDarkTheme ? 'white' : 'text.primary'}
          sx={{ textAlign: 'center', mb: 8 }}
          variant="h4"
        >
          {title}
        </Typography>

        <Grid container spacing={8}>
          {steps.map((step, i) => (
            <Grid md={3} xs={12} item key={i}>
              <HowToStep index={i} theme={theme} {...step} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const HowToStep: React.FC<
  Step & { index: number; theme: 'light' | 'dark' }
> = ({ index, Icon, title, description, theme }) => {
  const isDarkTheme = theme === 'dark';

  return (
    <Stack spacing={1}>
      {Boolean(Icon) && (
        <Stack spacing={1.2}>
          <Typography
            color={isDarkTheme ? 'white' : 'primary'}
            sx={{ opacity: 0.6 }}
            variant="overline"
          >{`0${++index}`}</Typography>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            color={isDarkTheme ? 'white' : undefined}
          >
            <Icon
              color={!isDarkTheme ? 'primary' : undefined}
              fontSize="large"
            />
            {index > 0 && index < 4 && (
              <ArrowForwardIcon
                color={!isDarkTheme ? 'primary' : undefined}
                sx={{ transform: { xs: 'rotate(90deg)', md: 'none' } }}
              />
            )}
          </Stack>
        </Stack>
      )}
      {!Icon && (
        <Typography
          color={isDarkTheme ? 'white' : 'primary'}
          variant="h6"
          component="p"
        >{`0${++index}`}</Typography>
      )}
      <Typography
        color={isDarkTheme ? 'white' : 'text.primary'}
        variant="h5"
        component="p"
      >
        {title}
      </Typography>
      <Typography
        color={isDarkTheme ? 'white' : 'text.primary'}
        variant="body2"
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default HowTo;
