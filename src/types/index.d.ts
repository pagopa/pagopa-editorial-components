declare module '*.jpg' {
  const value: string;
  export = value;
}
declare module '*.jpeg' {
  const value: string;
  export = value;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.svg';
declare module '@pagopa/mui-italia' {
  import theme from '@pagopa/mui-italia/dist/theme/index';

  export default theme;
}
