import {
  Stack,
  Avatar,
  Typography,
  Chip,
  type AvatarProps,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { type CommonProps } from 'types/components';

export interface TitleProps extends CommonProps {
  product: string;
  avatar?: AvatarProps;
  beta?: boolean;
}

export const Content = ({ avatar, beta, product, theme }: TitleProps) => {
  const { palette, breakpoints } = useTheme();
  const textColor =
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary;
  const label = 'beta';
  const xs = useMediaQuery(breakpoints.only('xs'));

  return (
    <Stack direction="row" gap={1} alignItems="center">
      {avatar && <Avatar {...avatar} />}
      <Typography color={textColor} variant={xs ? 'subtitle1' : 'h5'} noWrap>
        {product}
      </Typography>
      {beta && (
        <Chip
          label={label}
          color="primary"
          sx={{ height: 20, width: 45 }}
          size="small"
        />
      )}
    </Stack>
  );
};
