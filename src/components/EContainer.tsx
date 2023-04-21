import Box, { type BoxProps } from '@mui/material/Box';
import Grid, { type GridDirection } from '@mui/material/Grid';
import { Container, type ResponsiveStyleValue } from '@mui/system';
import { type Generic } from '../types/components';
import { isJSX } from '../utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  background?: string | Generic;
  direction?: ResponsiveStyleValue<GridDirection>;
  py?: BoxProps['py'];
}

const EContainer = (props: Props) => {
  const { children, background, direction = 'row', py = {} } = props;
  const backgroundIsJSX = isJSX(background);

  return (
    <Box
      component="section"
      sx={{ px: { xs: 4 }, position: 'relative', overflow: 'hidden' }}
      py={py}
      bgcolor={!backgroundIsJSX ? background : undefined}
    >
      {backgroundIsJSX && background}
      <Container maxWidth="lg" disableGutters>
        <Grid container direction={direction}>
          {children}
        </Grid>
      </Container>
    </Box>
  );
};

export default EContainer;
