/* eslint-disable valid-typeof */
import { Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export interface SubtitleProps {
  subtitle: string;
  textLink?: string;
  url?: string;
  theme: 'dark' | 'light';
}

const Subtitle = ({ subtitle, textLink, url, theme }: SubtitleProps) => {
  return (
    <Stack spacing={3} justifyContent="center" alignItems="center">
      <Typography
        color={theme === 'light' ? '#000000' : '#FAFAFA'}
        variant="body2"
      >
        {subtitle}
      </Typography>
      {textLink !== undefined && (
        <Stack
          spacing={1}
          justifyContent="center"
          alignItems="center"
          direction={'row'}
        >
          <Link
            color={theme === 'light' ? 'primary' : '#FAFAFA'}
            href={url}
            underline="none"
          >
            {textLink}
          </Link>
          <ArrowForwardIcon
            color={theme === 'light' ? 'primary' : 'secondary'}
          ></ArrowForwardIcon>
        </Stack>
      )}
    </Stack>
  );
};

export default Subtitle;
