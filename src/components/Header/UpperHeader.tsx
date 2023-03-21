import {
  type AvatarProps,
  Stack,
  Avatar,
  Typography,
  Chip,
  Fab,
  type SxProps,
  useTheme,
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { type CommonProps } from 'types/components';

export interface UpperHeaderProps extends CommonProps {
  product: string;
  help?: boolean;
  onHelpClick: () => void;
  avatar?: AvatarProps;
  beta?: boolean;
}

export const UpperHeader = ({
  product,
  help,
  onHelpClick,
  avatar,
  beta,
  theme,
}: UpperHeaderProps) => {
  const { palette, spacing } = useTheme();
  const textColor =
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary;
  const label = 'beta';

  return (
    <Stack direction="row" sx={styles.top}>
      <Stack direction="row" gap={spacing(2)} alignItems="center">
        {avatar && <Avatar {...avatar} />}
        <Typography color={textColor} variant="h5">
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
      {help && (
        <Stack direction="row" alignItems="center" gap={spacing(2)}>
          <Typography variant="subtitle2" color={textColor}>
            Serve aiuto?
          </Typography>
          <Fab
            color="primary"
            sx={{ width: '44px', height: '44px' }}
            onClick={onHelpClick}
          >
            <ChatBubbleOutlineIcon
              sx={{ width: '16.67px', height: '16.67px' }}
            />
          </Fab>
        </Stack>
      )}
    </Stack>
  );
};

const styles: Record<string, SxProps> = {
  top: {
    paddingY: '18px',
    justifyContent: 'space-between',
  },
};
