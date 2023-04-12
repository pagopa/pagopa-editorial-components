import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { type Generic } from 'types/components';

export interface StripeLinkProps {
  theme: 'dark' | 'light';
  subtitle: Generic | string;
  icon?: Generic;
  buttonText?: string;
}

const StripeLink = (props: StripeLinkProps) => {
  const { icon, subtitle, theme, buttonText } = props;
  const themeStyle = theme === 'light' ? 'primary.main' : 'background.paper';
  const themeStyleBg = theme === 'light' ? 'primary.main' : 'text.primary';
  const bgButton = theme === 'light' ? 'background.paper' : 'primary.main';

  return (
    <Box bgcolor={themeStyleBg} maxWidth={'1440px'} p={2}>
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        justifyContent={{ md: 'flex-start' }}
        spacing={3}
        alignItems={{ md: 'center', xs: 'flex-start' }}
        sx={{ ml: { md: 16 } }}
      >
        {icon && icon}
        <Typography variant="body2" color={'background.paper'}>
          {subtitle}
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: bgButton,
            color: themeStyle,
            ':hover': { backgroundColor: bgButton },
          }}
          endIcon={<ArrowForwardIcon color="inherit"></ArrowForwardIcon>}
        >
          {buttonText}
        </Button>
      </Stack>
    </Box>
  );
};

export default StripeLink;
