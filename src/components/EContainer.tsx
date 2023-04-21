import Box, { type BoxProps } from '@mui/material/Box';
import Grid, { type GridProps } from '@mui/material/Grid';
import { Container } from '@mui/system';
import { type Generic } from '../types/components';
import { isJSX } from '../utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  background?: string | Generic;
  direction?: GridProps['direction'];
  py?: BoxProps['py'];
  spacing?: GridProps['spacing'];
  alignItems?: GridProps['alignItems'];
}

const EContainer = (props: Props) => {
  const {
    children,
    background,
    direction = 'row',
    py = {},
    spacing,
    alignItems,
  } = props;
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
        <Grid
          container
          direction={direction}
          spacing={spacing}
          alignItems={alignItems}
        >
          {children}
        </Grid>
      </Container>
    </Box>
  );
};

export default EContainer;
