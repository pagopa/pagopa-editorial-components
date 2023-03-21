import {
  type AvatarProps,
  Stack,
  Avatar,
  Typography,
  Chip,
  Fab,
  type SxProps,
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export interface UpperHeaderProps {
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
}: UpperHeaderProps) => (
  <Stack direction="row" sx={styles.top}>
    <Stack direction="row" gap="16px" alignItems="center">
      {avatar && <Avatar {...avatar} />}
      <Typography variant="h5">{product}</Typography>
      {beta && (
        <Chip
          label="beta"
          color="primary"
          sx={{ height: 20, width: 45 }}
          size="small"
        />
      )}
    </Stack>
    {help && (
      <Stack direction="row" alignItems="center" gap="16px">
        <Typography variant="subtitle2" color="primary">
          Serve aiuto?
        </Typography>
        <Fab
          color="primary"
          sx={{ width: '44px', height: '44px' }}
          onClick={onHelpClick}
        >
          <ChatBubbleOutlineIcon sx={{ width: '16.67px', height: '16.67px' }} />
        </Fab>
      </Stack>
    )}
  </Stack>
);

const styles: Record<string, SxProps> = {
  top: {
    paddingY: '18px',
    justifyContent: 'space-between',
  },
};
