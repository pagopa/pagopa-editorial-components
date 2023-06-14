import { Grid, Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { type Generic } from 'types/components';
import EContainer from './EContainer';
import { EIcon, type EIconProps } from './EIcon';

export interface StripeLinkProps {
  theme: 'dark' | 'light';
  subtitle: Generic | string;
  icon?: EIconProps;
  buttonText?: string;
}

const StripeLink = (props: StripeLinkProps) => {
  const { icon, subtitle, theme, buttonText } = props;
  const themeStyle = theme === 'light' ? 'primary.main' : 'background.paper';
  const themeStyleBg = theme === 'light' ? 'primary.main' : 'text.primary';
  const bgButton = theme === 'light' ? 'background.paper' : 'primary.main';
  return (
    <EContainer background={themeStyleBg} py={2}>
      <Grid item>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          justifyContent={{ md: 'flex-start' }}
          spacing={3}
          alignItems={{ md: 'center', xs: 'flex-start' }}
        >
          <EIcon
            {...icon}
            sx={{
              display: { md: 'flex', xs: 'none' },
              visibility: { md: 'visible', xs: 'hidden' },
            }}
          />
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
      </Grid>
    </EContainer>
  );
};

export default StripeLink;
