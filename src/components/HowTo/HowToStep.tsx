import { Stack, Typography, Box } from '@mui/material';
import { EIcon, type EIconProps } from '../EIcon';

export interface Step {
  stepIcon?: EIconProps;
  title: string;
  description: string | JSX.Element;
}

export interface HowToStepProps extends Step {
  index: number;
  theme: 'light' | 'dark';
  isLastStep: boolean;
}

export const HowToStep = ({
  index,
  stepIcon,
  title,
  description,
  theme,
  isLastStep,
}: HowToStepProps) => {
  const isDarkTheme = theme === 'dark';
  const stepNum = index + 1;

  return (
    <Stack spacing={1} component="article">
      {/** Step with icon */}
      {stepIcon && (
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
            <EIcon icon={stepIcon.icon} {...stepIcon} />
            {!isLastStep && (
              <Box
                sx={{
                  opacity: 0.6,
                  transform: { xs: 'rotate(90deg)', md: 'none' },
                }}
              >
                <ArrowIcon color={isDarkTheme ? 'white' : '#0062c3'} />
              </Box>
            )}
          </Stack>
        </Stack>
      )}

      {/** Step without icon */}
      {!stepIcon && (
        <Typography
          color={isDarkTheme ? 'white' : 'primary'}
          variant="h6"
          component="p"
        >{`0${stepNum}`}</Typography>
      )}

      {/** Step title */}
      <Typography
        color={isDarkTheme ? 'white' : 'text.primary'}
        variant="h6"
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
    </Stack>
  );
};

const ArrowIcon = ({ color = 'none' }: { color?: string }) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 44 24"
      width="44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="m31.5429 1.04289c.3905-.39052 1.0237-.39052 1.4142 0l10.25 10.25001c.1953.1953.2929.4512.2929.7071s-.0976.5118-.2929.7071l-10.25 10.25c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l8.5429-8.5429h-38.5858c-.552284 0-1-.4477-1-1s.447716-1 1-1h38.5858l-8.5429-8.5429c-.3905-.39051-.3905-1.02369 0-1.41421z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};
