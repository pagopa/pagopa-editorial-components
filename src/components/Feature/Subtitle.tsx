import { Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export interface SubtitleProps {
  subtitle: string;
  textLink: string | undefined;
  url: string | undefined;
}
const Subtitle = ({ subtitle, textLink, url }: SubtitleProps) => {
  return (
    <Stack spacing={3} justifyContent="center" alignItems="center">
      <Typography variant="body2">{subtitle}</Typography>
      <Stack
        spacing={1}
        justifyContent="center"
        alignItems="center"
        direction={'row'}
      >
        <Link color={'primary'} href={url} underline="none">
          {textLink}
        </Link>
        <ArrowForwardIcon color="primary"></ArrowForwardIcon>
      </Stack>
    </Stack>
  );
};

export default Subtitle;
