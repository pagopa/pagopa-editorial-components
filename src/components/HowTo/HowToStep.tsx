import React from 'react';
import type { Step } from './HowTo';
import { Stack, Typography, Link, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const HowToStep: React.FC<
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
