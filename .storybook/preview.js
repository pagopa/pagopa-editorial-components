import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { theme } from '@pagopa/mui-italia';
import CssBaseline from '@mui/material/CssBaseline';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const mainTheme = createTheme({
  ...theme,
});

const customViewports = {
  BreakPoint1: {
    name: '1440px',
    styles: {
      width: '1440px',
      height: '100%',
    },
  },
  BreakPoint2: {
    name: 'Medium mobile',
    styles: {
      width: '374px',
      height: '630px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: { ...MINIMAL_VIEWPORTS, ...customViewports } },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
