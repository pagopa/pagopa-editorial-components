import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Card, type SxProps, Typography, useTheme } from '@mui/material';
import { type Theme } from '../../types/components';

export interface KpiProps {
  caption?: string;
  className?: string;
  id?: string;
  sx?: SxProps;
  theme?: Theme;
  value: number;
}

export const Kpi = ({
  value,
  caption,
  theme = 'light',
  sx,
  ...rest
}: KpiProps) => {
  const { spacing } = useTheme();

  const backgroundColor = 'background.paper';
  const textColor = theme === 'dark' ? 'text.primary' : 'primary.dark';

  return (
    <Card
      sx={{
        flex: 1,
        flexDirection: 'column',
        gap: spacing(1.2),
        padding: spacing(2),
        borderRadius: spacing(2),
        backgroundColor,
        textAlign: 'left',
        ...sx,
      }}
      elevation={16}
      {...rest}
    >
      <Typography color="text.disabled">
        <StarOutlineIcon fontSize="medium" color={'inherit'} />
      </Typography>
      <Typography color={textColor} variant="h4">
        {value}
      </Typography>
      <Typography color={textColor} variant="caption-semibold">
        {caption}
      </Typography>
    </Card>
  );
};
