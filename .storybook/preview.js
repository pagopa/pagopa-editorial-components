import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from "@mui/material";
import theme from './theme';

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
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: {...MINIMAL_VIEWPORTS, ...customViewports }  },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Story />
    </ThemeProvider>
  ),
];
