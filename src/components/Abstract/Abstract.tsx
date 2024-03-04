/* eslint-disable react/prop-types */

import { Box, Stack, Typography, useTheme } from '@mui/material';
import EContainer from '../EContainer';
import type { CommonProps, Generic } from 'types/components';
import { isJSX } from '../../utils';
import { sendTheme } from '../../types/SendTheme';

export interface AbstractProps extends CommonProps {
  overline: string;
  title: string;
  description: string | Generic;
  background?: string | Generic;
  layout?: 'left' | 'center' | 'right';
}

export const Abstract: React.FC<AbstractProps> = ({
  overline,
  title,
  description,
  theme,
  background,
  layout = 'left',
}) => {
  const textColor = theme === 'dark' ? 'background.paper' : 'text.primary';

  const overlay =
    theme === 'dark'
      ? 'linear-gradient(76.77deg, rgba(0, 115, 230, 0.7) 40.28%, rgba(0, 115, 230, 0) 100%), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), ';

  const backgroundColor =
    theme === 'dark' ? sendTheme.dark.backgroundColor : 'background.paper';
  const eyeletColor = theme === 'dark' ? 'background.paper' : 'text.secondary';

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

  const { spacing } = useTheme();

  const flexLayoutMap = {
    center: 'center',
    right: 'flex-end',
    left: 'flex-start',
  };

  return (
    <EContainer
      background={!background ? backgroundColor : BackgroundImage}
      sx={{ height: { lg: spacing(66) } }}
    >
      <Stack
        py={spacing(10)}
        px={{ sm: spacing(2) }}
        width="100%"
        justifyContent="center"
        alignItems={flexLayoutMap[layout]}
      >
        <Typography
          display="flex"
          flexDirection="column"
          maxWidth={spacing(70)}
          textAlign={layout}
          color={textColor}
          gap={spacing(2)}
        >
          <Typography color={eyeletColor} variant={'overline'}>
            {overline}
          </Typography>
          <Typography color={textColor} variant="h4">
            {title}
          </Typography>
          <Typography
            component={typeof description === 'string' ? 'p' : 'div'}
            color={textColor}
            variant="body1"
          >
            {description}
          </Typography>
        </Typography>
      </Stack>
    </EContainer>
  );
};
