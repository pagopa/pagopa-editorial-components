import { useState } from 'react';
import { Grid, MobileStepper, Typography, useTheme } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { type FeatureItem, FeatureStackItem } from './FeatureStackItem';
import EContainer from '../EContainer';
import { sendTheme } from '../../types/SendTheme';

export interface FeatureProps {
  title: string;
  items: FeatureItem[];
  theme: 'dark' | 'light';
  showCarouselMobile?: boolean;
  background?: string;
}

const Feature = (props: FeatureProps) => {
  const { title, items, theme, showCarouselMobile, background } = props;
  const [activeStep, setActiveStep] = useState(0);
  const themeComponent = useTheme();

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const themeStyle = theme === 'light' ? 'text.primary' : 'background.paper';
  const themeStyleBg =
    theme === 'light' ? 'background.paper' : sendTheme.dark.backgroundColor;

  return (
    <EContainer
      background={background ?? themeStyleBg}
      py={{
        xs: 4,
        sm: 4,
        md: 8,
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" color={themeStyle} textAlign="center">
          {title}
        </Typography>
      </Grid>
      <Grid item mt={8}>
        <Grid container spacing={{ xs: 6, md: 4 }} justifyContent="center">
          {items.map((item, index) => (
            <Grid
              md={3}
              item
              display={showCarouselMobile ? { xs: 'none', md: 'block' } : {}}
              key={index}
            >
              <FeatureStackItem theme={theme} item={item} />
            </Grid>
          ))}
          {showCarouselMobile && (
            <Grid item display={{ md: 'none' }}>
              <SwipeableViews
                axis={themeComponent.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                autoPlay={false}
              >
                {items.map((item, index) => (
                  <FeatureStackItem theme={theme} item={item} key={index} />
                ))}
              </SwipeableViews>
              <MobileStepper
                sx={{
                  my: 2,
                  justifyContent: 'center',
                  bgcolor:
                    theme === 'light' ? 'background.paper' : 'primary.main',
                  '& .MuiMobileStepper-dotActive': {
                    backgroundColor:
                      theme === 'light' ? 'primary.main' : 'background.paper',
                  },
                }}
                variant="dots"
                steps={items.length}
                position="static"
                activeStep={activeStep}
                backButton={undefined}
                nextButton={undefined}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </EContainer>
  );
};

export default Feature;
