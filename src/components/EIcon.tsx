import * as MuiIcons from '@mui/icons-material';
import { Typography, type SvgIconProps } from '@mui/material';
import { isJSX } from '../utils';
import { type Generic } from '../types/components';
import React from 'react';

export interface EIconProps extends Omit<SvgIconProps, 'color'> {
  icon?: keyof typeof MuiIcons | string | Generic;
  color?: string;
}

export const EIcon = (props: EIconProps) => {
  const IconWrapper = ({ icon, ...rest }: EIconProps) => {
    if (isJSX(icon))
      return React.cloneElement(icon, { ...rest, ...icon.props });

    const Icon =
      icon &&
      (MuiIcons[
        icon as keyof typeof MuiIcons
      ] as React.ComponentType<SvgIconProps>);
    return Icon ? <Icon {...rest} color="inherit" /> : null;
  };

  return (
    <Typography color={props?.color ?? 'inherit'}>
      <IconWrapper {...props} />
    </Typography>
  );
};
