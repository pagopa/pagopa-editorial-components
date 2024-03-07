import {
  Stack,
  Avatar,
  Typography,
  Chip,
  type AvatarProps,
  useTheme,
  Link,
} from '@mui/material';
import { type CommonProps } from '../../../types/components';

export interface TitleProps extends CommonProps {
  product: {
    name: string;
    href?: string;
  };
  avatar?: AvatarProps;
  beta?: boolean;
  logo?: {
    src: string;
    alt: string;
    href: string;
  };
}

export const Content = ({
  avatar,
  beta,
  product: { name: productName, href: productHref },
  theme,
  logo,
}: TitleProps) => {
  const { palette, spacing } = useTheme();
  const textColor =
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary;
  const label = 'beta';

  return (
    <Stack direction="column" alignItems="center" gap={1}>
      {logo && (
        <Link href={logo.href}>
          <img src={logo.src} alt={logo.alt} height={48} />
        </Link>
      )}
      {avatar && <Avatar {...avatar} />}
      {!logo && (
        <Typography
          color={textColor}
          fontSize={{ xs: spacing(3), sm: spacing(3.5) }}
          noWrap
          variant="h5"
        >
          {productHref ? (
            <Link href={productHref} underline="none" color="text.primary">
              <b>{productName}</b>
            </Link>
          ) : (
            <b>{productName}</b>
          )}
        </Typography>
      )}
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
