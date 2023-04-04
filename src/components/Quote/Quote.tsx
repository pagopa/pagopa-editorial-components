import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import { type CommonProps, type Generic } from 'types/components';
import QuoteText from './QuoteText';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export interface QuoteProps extends CommonProps, QuoteTextProps {
  image?: string | Generic;
  altText?: string;
  inverse?: boolean;
  background?: string;
  size: string;
  quotes: QuoteTextProps[];
}
interface QuoteTextProps extends CommonProps {
  subtitle?: string | Generic;
}

const Quote = (props: QuoteProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const themeComponent = useTheme();

  const { background, theme = 'dark', quotes } = props;
  const minHeight = '480px';
  const isDarkTheme = theme === 'dark';
  const textColor = isDarkTheme ? 'white' : 'text.primary';
  const bgcolor = isDarkTheme ? 'primary.main' : '#FAFAFA';

  const overlay =
    theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65)), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), ';

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      component="section"
      bgcolor={bgcolor}
      sx={{
        px: { xs: 4 },
        backgroundImage: `${overlay}url(${background ?? ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Grid container sx={{ minHeight: { lg: minHeight } }}>
          <Grid item lg={6} sx={{ minHeight: 'inherit' }}>
            <Stack
              sx={{ minHeight }}
              alignContent="flex-start"
              justifyContent="center"
            >
              <SwipeableViews
                axis={themeComponent.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                autoPlay={true}
              >
                {quotes.map(({ subtitle }, index) => (
                  <QuoteText
                    textColor={textColor}
                    subtitle={subtitle}
                    key={index}
                  ></QuoteText>
                ))}
              </SwipeableViews>
              <Stack direction={'row'}>
                <IconButton
                  onClick={() => {
                    if (activeStep > 0) setActiveStep(activeStep - 1);
                  }}
                >
                  <ArrowBackIcon></ArrowBackIcon>
                </IconButton>
                <IconButton
                  onClick={() => {
                    if (activeStep < quotes.length - 1)
                      setActiveStep(activeStep + 1);
                  }}
                >
                  <ArrowForwardIcon></ArrowForwardIcon>
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Quote;
