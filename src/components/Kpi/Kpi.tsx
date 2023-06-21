import { Card, type SxProps, Typography, useTheme } from '@mui/material';
import { EIcon, type EIconProps } from '../EIcon';
import { type Theme } from '../../types/components';

export interface KpiProps {
  caption?: string;
  className?: string;
  sx?: SxProps;
  theme?: Theme;
  value: number;
  kpiIcon?: EIconProps;
  id: string;
}

export const Kpi = ({
  value,
  caption,
  theme = 'light',
  sx,
  kpiIcon,
  ...rest
}: KpiProps) => {
  const { spacing } = useTheme();

  const backgroundColor = 'background.paper';
  const textColor = theme === 'dark' ? 'text.primary' : 'primary.dark';

  return (
    <Card
      sx={{
        backgroundColor,
        borderRadius: spacing(2),
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        gap: spacing(1),
        justifyContent: 'flex-end',
        paddingBottom: spacing(2),
        paddingY: spacing(1),
        paddingX: spacing(2),
        textAlign: 'left',
        ...sx,
      }}
      elevation={16}
      {...rest}
    >
      <EIcon icon={kpiIcon?.icon} color={kpiIcon?.color ?? 'disabled'} />
      <Typography color={textColor} variant="h4">
        {value}
      </Typography>
      <Typography color={textColor} variant="caption-semibold">
        {caption}
      </Typography>
    </Card>
  );
};
