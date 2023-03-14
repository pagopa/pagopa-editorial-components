import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { theme } from '@pagopa/mui-italia';
import CssBaseline from '@mui/material/CssBaseline';

const mainTheme = createTheme({
  ...theme,
  palette: { secondary: { main: '#FAFAFA' } },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
console.log('mainTheme :>> ', mainTheme);
export const decorators = [
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
