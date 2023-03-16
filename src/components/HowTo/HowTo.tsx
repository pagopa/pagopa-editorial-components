import React from 'react';
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import howToBackgroundDark from '../../assets/images/how-to-background-dark.jpeg';
import howToBackgroundLight from '../../assets/images/how-to-background-light.jpeg';
import { HowToStep } from './HowToStep';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export interface Step {
  icon?: JSX.Element;
  title: string;
  description: string | JSX.Element;
}

export interface HowToProps {
  title: string;
  steps: Step[];
  theme: 'light' | 'dark';

  link?: {
    href: string;
    label: string;
    target?: React.HTMLAttributeAnchorTarget;
  };
  rowMaxSteps?: number;
  stepsAlignment?: 'right' | 'center' | 'left';
}

const groupStepsByRows = (steps: Step[], rowMaxSteps: number): Step[][] => {
  const numSteps = steps.length;
  return new Array(Math.ceil(numSteps / rowMaxSteps))
    .fill(undefined)
    .map((_, i) => steps.slice(i * rowMaxSteps, i * rowMaxSteps + rowMaxSteps));
};

export const HowTo: React.FC<HowToProps> = ({
  title,
  steps,
  theme,
  link,
  rowMaxSteps = 4,
  stepsAlignment = 'center',
}) => {
  const isDarkTheme = theme === 'dark';
  const background = isDarkTheme ? howToBackgroundDark : howToBackgroundLight;

  const alignment = { center: 'center', left: 'start', right: 'end' }[
    stepsAlignment
  ];

  const stepsRows = groupStepsByRows(steps, rowMaxSteps);

  return (
    <Box
      sx={{ position: 'relative', py: { xs: 6, md: 8 }, px: { xs: 2, md: 0 } }}
      component="section"
    >
      {/** Background */}
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
        {/** Section title */}
        <Typography
          color={isDarkTheme ? 'white' : 'text.primary'}
          sx={{ textAlign: 'center', mb: 8 }}
          variant="h4"
        >
          {title}
        </Typography>

        {/** Steps */}
        {stepsRows.map((stepRow, i) => (
          <Stack
            direction={{ md: 'row' }}
            justifyContent={alignment}
            spacing={{ xs: 4, md: 8 }}
            sx={{ mt: i > 0 ? { xs: 4, md: 8 } : 0 }}
            key={i}
          >
            {stepRow.map((step, j) => (
              <Box key={j} flex={0.25}>
                <HowToStep
                  index={i * rowMaxSteps + j}
                  theme={theme}
                  isLastStep={i * rowMaxSteps + j === steps.length - 1}
                  {...step}
                />
              </Box>
            ))}
          </Stack>
        ))}

        {/** Link */}
        {link && (
          <Link
            sx={{ display: 'flex', alignItems: 'center', mt: 6 }}
            href={link.href}
            target={link.target}
            color={isDarkTheme ? 'white' : 'primary'}
            underline="none"
            fontWeight={600}
          >
            {link.label}
            <ArrowForwardIcon
              sx={{ ml: 1 }}
              fontSize="small"
              aria-hidden="true"
            />
          </Link>
        )}
      </Container>
    </Box>
  );
};
