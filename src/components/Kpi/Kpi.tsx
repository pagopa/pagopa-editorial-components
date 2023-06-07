import { Card, type SxProps, Typography, useTheme } from '@mui/material';
import { EIcon, type EIconProps } from '../EIcon';
import { type Generic, type Theme } from '../../types/components';
import { isJSX } from '../../utils/index';

export interface KpiProps {
  caption?: string;
  className?: string;
  id?: string;
  sx?: SxProps;
  theme?: Theme;
  value: number;
  iconName?: EIconProps['name'];
  iconColor?: string;
  icon?: Generic;
}

export const Kpi = ({
  value,
  caption,
  theme = 'light',
  sx,
  icon,
  iconName,
  iconColor,
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
      {isJSX(icon) && icon}
      {iconName && (
        <Typography color={iconColor ?? 'text.disabled'}>
          <EIcon name={iconName} color="inherit" />
        </Typography>
      )}
      <Typography color={textColor} variant="h4">
        {value}
      </Typography>
      <Typography color={textColor} variant="caption-semibold">
        {caption}
      </Typography>
    </Card>
  );
};
