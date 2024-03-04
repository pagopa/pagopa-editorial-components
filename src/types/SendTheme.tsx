interface Theme {
  backgroundColor: string;
}

interface ThemeDropdown {
  dropdownColor: string;
}

export const sendTheme: Record<string, Theme> = {
  light: {
    backgroundColor: '#ffffff',
  },
  dark: {
    backgroundColor: '#0B3EE3',
  },
};

export const sendThemeDropdown: Record<string, ThemeDropdown> = {
  light: {
    dropdownColor: '#5C6F82',
  },
};
