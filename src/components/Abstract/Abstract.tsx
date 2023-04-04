/* eslint-disable react/prop-types */

import { Box, Container, Stack, Typography } from '@mui/material';
import type { CommonProps, Theme } from 'types/components';

export interface AbstractProps extends CommonProps {
  overline: string;
  title: string;
  description: string | JSX.Element;
  background?: string;
  layout?: 'left' | 'center' | 'right';
}

const getBackgroundSx = (theme: Theme, background?: string) => {
  if (!background) {
    return {};
  }

  const overlay =
    theme === 'dark'
      ? 'linear-gradient(76.77deg, rgba(0, 115, 230, 0.7) 40.28%, rgba(0, 115, 230, 0) 100%), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), ';

  return {
    backgroundImage: `${overlay}url(${background ?? ''})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
};

export const Abstract: React.FC<AbstractProps> = ({
  overline,
  title,
  description,
  theme,
  background,
  layout = 'left',
}) => {
  const textColor = theme === 'dark' ? 'white' : 'text.primary';

  const backgroundSx = getBackgroundSx(theme, background);

  return (
    <Box
      component="section"
      bgcolor={theme === 'dark' ? 'primary.main' : 'white'}
      sx={{
        px: { xs: 4 },
        ...backgroundSx,
      }}
    >
      <Container
        sx={{ textAlign: layout, color: textColor }}
        maxWidth="lg"
        disableGutters
      >
        <Stack
          alignItems={
            layout === 'left'
              ? 'flex-start'
              : layout === 'center'
              ? 'center'
              : 'end'
          }
          justifyContent="center"
          sx={{ minHeight: 530 }}
        >
          <Stack sx={{ maxWidth: 520 }} spacing={2}>
            <Typography
              sx={{ color: theme === 'light' ? 'text.secondary' : textColor }}
              variant={'overline'}
            >
              {overline}
            </Typography>
            <Typography color={textColor} variant="h4">
              {title}
            </Typography>
            <Typography color={textColor} variant="body1">
              {description}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
