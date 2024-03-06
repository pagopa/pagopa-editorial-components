import {
  Stack,
  Avatar,
  Typography,
  Chip,
  type AvatarProps,
  useTheme,
  Link,
  useMediaQuery,
} from '@mui/material';
import { type CommonProps } from '../../../types/components';
import logoImage from '../../../assets/images/logoSend.svg';

export interface TitleProps extends CommonProps {
  product: {
    name: string;
    href?: string;
  };
  avatar?: AvatarProps;
  beta?: boolean;
}

export const Content = ({
  avatar,
  beta,
  product: { name: productName, href: productHref },
  theme,
}: TitleProps) => {
  const { palette, spacing } = useTheme();
  const textColor =
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary;
  const label = 'beta';

  const isBelow900px = useMediaQuery('(max-width:900px)');

  const productContent = logoImage ? (
    <img src={logoImage} alt="Logo" style={{ height: '70px' }} />
  ) : (
    <Typography
      color={textColor}
      fontSize={{ xs: spacing(3), sm: spacing(3.5) }}
      noWrap
      variant="h5"
    >
      <b>{productName}</b>
    </Typography>
  );

  return (
    <Stack direction="row" gap={1} alignItems="center">
      {avatar && <Avatar {...avatar} />}
      {productHref && (
        <Link
          href={productHref}
          underline="none"
          sx={{
            margin: isBelow900px ? '22px 24px 16px 0' : '22px 24px 16px 24px',
          }}
        >
          {productContent}
        </Link>
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
