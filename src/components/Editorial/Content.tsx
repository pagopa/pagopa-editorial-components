import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { type CommonProps } from 'types/components';

export interface EditorialContentProps extends CommonProps {
  title: string;
  eyelet?: string;
  body: string | JSX.Element;
}

export const Content = ({
  eyelet,
  title,
  body,
  theme,
}: EditorialContentProps) => {
  const eyeletColor =
    theme === 'dark' ? 'primary.contrastText' : 'text.secondary';
  const textColor = theme === 'dark' ? 'primary.contrastText' : 'text.primary';

  return (
    <Stack maxWidth={{ md: '448px' }} gap="16px">
      <Typography variant="overline" color={eyeletColor}>
        {eyelet}
      </Typography>
      <Typography color={textColor} variant="h4">
        {title}
      </Typography>
      <Typography color={textColor} variant="body2">
        {body}
      </Typography>
    </Stack>
  );
};
