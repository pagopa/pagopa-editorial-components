import {
  Box,
  Typography,
  TextField,
  Stack,
  Divider,
  Grid,
  Button,
  Checkbox,
} from '@mui/material';
import { Container } from '@mui/system';
import solidLightBackground from '../assets/hero-solid-light.jpg';

export default {
  title: 'Form/light',
};

export const ExampleForm = () => (
  <Box
    component="section"
    bgcolor="primary.main"
    sx={{
      backgroundImage: `url(${solidLightBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <form>
            <Typography variant="h3" pt={8} mb={4} textAlign="center">
              Vuoi aderire a Firma con IO?
            </Typography>
            <Stack spacing={2} mb={4}>
              <TextField
                placeholder="Nome e Cognome"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: 'white',
                }}
              />
              <TextField
                placeholder="Indirizzo e-mail"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: 'white',
                }}
              />
              <TextField
                placeholder="Nome ente"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: 'white',
                }}
              />
            </Stack>
            <Grid container mb={1}>
              <Grid item xs={11}>
                <Typography variant="caption">
                  Inserendo il tuo indirizzo email stai accettando la nostra
                  informativa sul trattamento dei dati personali per
                  l’iscrizione alla newsletter.
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Checkbox />
              </Grid>
            </Grid>
            <Divider />
            <Stack spacing={4} pt={4} pb={8}>
              <Stack direction="row" justifyContent="center">
                <Button variant="contained">Invia Richiesta</Button>
              </Stack>
              <Typography variant="caption-semibold" textAlign="center">
                Inserendo il tuo indirizzo email stai accettando la nostra
                informativa sul trattamento dei dati personali per la Privacy
                Policy.
              </Typography>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
