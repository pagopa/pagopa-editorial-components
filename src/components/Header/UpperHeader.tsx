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
}

export const UpperHeader = ({
  product,
  help,
  onHelpClick,
  avatar,
  beta,
  theme,
}: UpperHeaderProps) => {

  return (
    <Stack direction="row" sx={styles.top}>
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
