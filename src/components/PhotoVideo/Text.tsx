import { type CommonProps } from 'types/components';
import { Typography } from '@mui/material';

export interface PhotoVideoTextProps extends CommonProps {
  title?: string;
  subtitle?: string;
}

const Text = ({ title, subtitle, theme = 'dark' }: PhotoVideoTextProps) => {
  const color = theme === 'dark' ? 'primary.contrastText' : 'text.primary';
  return (
    <>
      {title && (
        <Typography variant="h5" mb={4} color={color}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography paragraph sx={{ fontSize: '16px' }} mb={3} color={color}>
          {subtitle}
        </Typography>
      )}
    </>
  );
};

export default Text;
