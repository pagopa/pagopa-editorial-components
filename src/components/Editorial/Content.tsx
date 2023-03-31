import { useTheme } from '@mui/material';
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
  const { palette, breakpoints } = useTheme();
  const eyeletColor =
    theme === 'dark' ? palette.primary.contrastText : palette.text.secondary;
  const textColor =
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary;
  const maxTextWidth = breakpoints.values.md / 2;

  return (
    <Stack maxWidth={{ md: maxTextWidth }} gap={2}>
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
