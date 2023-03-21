/* eslint-disable valid-typeof */
import { useState } from 'react';
import Subtitle from './Subtitle';
import {
  Box,
  Container,
  MobileStepper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

export interface FeatureItem {
  icon?: JSX.Element;
  title: string;
  subtitle: string;
  linkTitle?: string;
  url?: string;
}

export interface FeatureProps {
  title: string;
  items: FeatureItem[];
  theme: 'dark' | 'light';
  showCarouselMobile: boolean;
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Feature = ({ title, items, theme, showCarouselMobile }: FeatureProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const themeComponent = useTheme();

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return !showCarouselMobile ? (
    <Box bgcolor={theme === 'light' ? 'background.paper' : 'primary.main'}>
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
          <Typography
            variant="h4"
            color={theme === 'light' ? 'text.primary' : 'background.paper'}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: 'repeat(12, 1fr)',
            }}
          >
            <Box gridColumn={{ xs: '2 / span 10' }}>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignContent="center"
                justifyContent="center"
                spacing={{ xs: 6, md: 4 }}
              >
                {items.map((item, index) => (
                  <Stack
                    key={index}
                    alignContent="center"
                    justifyContent="flex-start"
                    spacing={{ xs: 1, md: 3 }}
                    sx={{
                      flex: 1,
                    }}
                  >
                    <Box
                      mx="auto"
                      sx={{
                        svg: {
                          height: '64px',
                          width: '64px',
                        },
                      }}
                      color={
                        theme === 'light' ? 'primary.main' : 'background.paper'
                      }
                    >
                      {item.icon}
                    </Box>
                    <Stack spacing={1}>
                      <Typography
                        color={
                          theme === 'light'
                            ? 'text.primary'
                            : 'background.paper'
                        }
                        variant="h6"
                      >
                        {item.title}
                      </Typography>
                      <>
                        {typeof item.linkTitle === undefined ? (
                          <Typography
                            variant="body2"
                            color={
                              theme === 'light'
                                ? 'text.primary'
                                : 'background.paper'
                            }
                          >
                            {item.subtitle}
                          </Typography>
                        ) : (
                          <Subtitle
                            theme={theme}
                            subtitle={item.subtitle}
                            textLink={item.linkTitle}
                            url={item.url}
                          ></Subtitle>
                        )}
                      </>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  ) : (
    <Box
      bgcolor={theme === 'light' ? 'background.paper' : 'primary.main'}
      sx={{ flexGrow: 1 }}
    >
      <Stack justifyContent="space-evenly" alignItems="center" spacing={3}>
        <AutoPlaySwipeableViews
          axis={themeComponent.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {items.map((item, index) => (
            <Stack
              key={index}
              alignContent="center"
              justifyContent="flex-start"
              spacing={{ xs: 1, md: 3 }}
              sx={{
                flex: 1,
              }}
            >
              <Box
                mx="auto"
                sx={{
                  svg: {
                    height: '64px',
                    width: '64px',
                  },
                }}
                color={theme === 'light' ? 'primary.main' : 'background.paper'}
              >
                {item.icon}
              </Box>
              <Stack justifyContent="center" alignItems="center" spacing={1}>
                <Typography
                  color={
                    theme === 'light' ? 'text.primary' : 'background.paper'
                  }
                  variant="h6"
                >
                  {item.title}
                </Typography>
                <>
                  {typeof item.linkTitle === undefined ? (
                    <Typography
                      variant="body2"
                      color={
                        theme === 'light' ? 'text.primary' : 'background.paper'
                      }
                    >
                      {item.subtitle}
                    </Typography>
                  ) : (
                    <Subtitle
                      theme={theme}
                      subtitle={item.subtitle}
                      textLink={item.linkTitle}
                      url={item.url}
                    ></Subtitle>
                  )}
                </>
              </Stack>
            </Stack>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          sx={{
            bgcolor: theme === 'light' ? 'background.paper' : 'primary.main',
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
      </Stack>
    </Box>
  );
};

export default Feature;
