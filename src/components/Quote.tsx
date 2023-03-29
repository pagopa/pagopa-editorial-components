import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { type CommonProps, type Generic } from 'types/components';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
export interface QuoteProps extends CommonProps, QuoteTextProps {
  image?: string | Generic;
  altText?: string;
  inverse?: boolean;
  background?: string;
  size: string;
}
interface QuoteTextProps extends CommonProps {
  subtitle?: string | Generic;
}
const Quote = (props: QuoteProps) => {
  const { background, theme = 'dark', subtitle } = props;
  const minHeight = '480px';
  const overlay =
    theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65)), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), ';

  return (
    <Box
      component="section"
      bgcolor="primary.main"
      sx={{
        px: { xs: 4 },
        backgroundImage: `${overlay}url(${background ?? ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Grid container sx={{ minHeight: { lg: minHeight } }}>
          <Grid item lg={6} sx={{ minHeight: 'inherit' }}>
            <Stack
              sx={{ minHeight }}
              alignContent="flex-start"
              justifyContent="center"
            >
              <FormatQuoteIcon
                sx={{ alignSelf: 'flex-start' }}
                fontSize="large"
              ></FormatQuoteIcon>

              <Typography sx={{ alignSelf: 'center' }} variant="h5">
                {subtitle}
              </Typography>

              <FormatQuoteIcon
                sx={{ alignSelf: 'flex-end' }}
                fontSize="large"
              ></FormatQuoteIcon>
            </Stack>
          </Grid>
          <Grid item lg={6}>
            <Button></Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Quote;
