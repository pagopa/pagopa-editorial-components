// @ts-nocheck
import { createTheme } from '@mui/material/styles';
import { theme } from '@pagopa/mui-italia';

type CustomTheme = {
  [Key in keyof typeof theme]: (typeof theme)[Key];
};

declare module '@mui/material/styles/createTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
};

export default createTheme({ ...theme });
