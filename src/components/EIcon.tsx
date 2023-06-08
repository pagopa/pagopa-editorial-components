import * as MuiIcons from '@mui/icons-material';
import { type SvgIconProps } from '@mui/material';

export interface EIconProps extends SvgIconProps {
  name?: keyof typeof MuiIcons;
}

export const EIcon = ({ name, ...rest }: EIconProps) => {
  const Icon = name && MuiIcons[name];
  return Icon ? <Icon {...rest} /> : null;
};
