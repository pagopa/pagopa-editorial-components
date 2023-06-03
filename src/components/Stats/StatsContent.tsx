import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { type StackProps } from '@mui/system';
import { type CommonProps } from '../../types/components';

export interface StatsContentProps extends CommonProps, StackProps {
  eyelet?: string;
  title?: string;
  body?: string;
}

export const StatsContent = ({
  eyelet,
  title,
  body,
  theme,
  ...rest
}: StatsContentProps) => {
  const textColor = theme === 'dark' ? 'background.paper' : 'text.primary';
  const eyeletColor = theme === 'dark' ? 'background.paper' : 'text.secondary';

  return (
    <Stack gap={2} {...rest}>
      {eyelet && (
        <Typography color={eyeletColor} variant="overline">
          {eyelet}
        </Typography>
      )}
      {title && (
        <Typography color={textColor} variant="h4">
          {title}
        </Typography>
      )}
      {body && (
        <Typography color={textColor} variant="body2">
          {body}
        </Typography>
      )}
    </Stack>
  );
};
