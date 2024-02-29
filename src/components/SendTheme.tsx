interface Theme {
  backgroundColor: string;
}

const sendTheme: Record<string, Theme> = {
  light: {
    backgroundColor: '#ffffff',
  },
  dark: {
    backgroundColor: '#0B3EE3',
  },
};

export default sendTheme;
