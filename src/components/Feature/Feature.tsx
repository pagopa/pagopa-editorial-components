/* eslint-disable valid-typeof */
import Component from '../Component';
import Subtitle from './Subtitle';
import { Box, Container, Stack, Typography } from '@mui/material';

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
}

const Feature = ({ title, items, theme }: FeatureProps) => {
  return (
    <Component>
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
              <Box gridColumn={{ xs: '2 / span 8', md: '2 / span 10' }}>
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
                          theme === 'light'
                            ? 'primary.main'
                            : 'background.paper'
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
    </Component>
  );
};

export default Feature;
