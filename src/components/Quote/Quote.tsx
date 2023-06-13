import { Box, Grid, IconButton, Stack, useTheme } from '@mui/material';
import { type CommonProps, type Generic } from 'types/components';
import QuoteText from './QuoteText';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EContainer from '../EContainer';
import { isJSX } from '../../utils';

export interface QuoteProps extends CommonProps {
  background?: string | Generic;
  quotes: QuoteTextProps[];
}
interface QuoteTextProps {
  text?: string | Generic;
}

const Quote = (props: QuoteProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const themeComponent = useTheme();

  const { background, theme = 'dark', quotes } = props;
  const minHeight = '568px';
  const isDarkTheme = theme === 'dark';
  const textColor = isDarkTheme ? 'background.paper' : 'text.primary';
  const backgroundColor = theme === 'dark' ? 'primary.dark' : 'primary.paper';
  const overlay =
    theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65)), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), ';

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

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <EContainer background={!background ? backgroundColor : BackgroundImage}>
      <Grid item lg={6} sx={{ minHeight: { lg: minHeight } }} color={textColor}>
        <Stack sx={{ minHeight }} justifyContent="center">
          <SwipeableViews
            axis={themeComponent.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            autoPlay={false}
          >
            {quotes.map(({ text: subtitle }, index) => (
              <QuoteText
                textColor={textColor}
                subtitle={subtitle}
                key={index}
              ></QuoteText>
            ))}
          </SwipeableViews>
          <Stack direction={'row'}>
            <IconButton
              color="inherit"
              onClick={() => {
                if (activeStep > 0) setActiveStep(activeStep - 1);
              }}
            >
              <ArrowBackIcon></ArrowBackIcon>
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => {
                if (activeStep < quotes.length - 1)
                  setActiveStep(activeStep + 1);
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Grid>
    </EContainer>
  );
};

export default Quote;
