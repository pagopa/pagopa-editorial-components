import { type SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { type Generic, type CommonProps } from '../../types/components';

export interface StatsContentProps extends CommonProps {
  eyelet?: string;
  title?: string;
  body?: string | Generic;
  sx?: SxProps;
}

export const StatsContent = ({
  eyelet,
  title,
  body,
  theme,
  sx,
}: StatsContentProps) => {
  const textColor = theme === 'dark' ? 'background.paper' : 'text.primary';
  const eyeletColor = theme === 'dark' ? 'background.paper' : 'text.secondary';

  return (
    <Stack gap={2} sx={sx}>
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
