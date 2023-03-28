/* eslint-disable valid-typeof */
import { useState } from 'react';
import {
  Box,
  Container,
  MobileStepper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { FeatureStackItem } from './FeatureStackItem';

export interface FeatureItem {
  icon?: JSX.Element;
  title: string;
  subtitle: string;
  link?: {
    text: string;
    url: string;
  };
}
export interface FeatureProps {
  title: string;
  items: FeatureItem[];
  theme: 'dark' | 'light';
  showCarouselMobile?: boolean;
  background?: string;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  items,
  theme,
  showCarouselMobile,
  background,
}: FeatureProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const themeComponent = useTheme();

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const themeStyle = theme === 'light' ? 'text.primary' : 'background.paper';
  const themeStyleBg = theme === 'light' ? 'background.paper' : 'primary.main';

  return (
    <Box bgcolor={background ?? themeStyleBg}>
      <Container
        maxWidth="xl"
        sx={{
          py: {
            xs: 4,
            sm: 4,
            md: 8,
          },
        }}
      >
        <Stack alignContent="center" textAlign="center" spacing={8}>
          <Typography variant="h4" color={themeStyle}>
            {title}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: 'repeat(12, 1fr)',
            }}
          >
            <Stack
              gridColumn={{ xs: '2 / span 10' }}
              direction={{ xs: 'column', md: 'row' }}
              alignContent="center"
              justifyContent="center"
              spacing={{ xs: 6, md: 4 }}
            >
              {items.map((item, index) => (
                <Box
                  display={
                    showCarouselMobile ? { xs: 'none', md: 'block' } : {}
                  }
                  key={index}
                >
                  <FeatureStackItem theme={theme} item={item} />
                </Box>
              ))}
              {showCarouselMobile && (
                <Box display={{ md: 'none' }}>
                  <SwipeableViews
                    axis={
                      themeComponent.direction === 'rtl' ? 'x-reverse' : 'x'
                    }
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
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
                          theme === 'light'
                            ? 'primary.main'
                            : 'background.paper',
                      },
                    }}
                    variant="dots"
                    steps={items.length}
                    position="static"
                    activeStep={activeStep}
                    backButton={undefined}
                    nextButton={undefined}
                  />
                </Box>
              )}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Feature;
