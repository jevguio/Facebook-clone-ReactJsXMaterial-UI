import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#316FF6',
          },
          background: {
            default: '#f4f6f8',
            paper: '#ffffff',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#316FF6',
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
        }),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e', // Conditional AppBar background color
        },
      },
    },
  },
});

const theme = (mode) => createTheme(getDesignTokens(mode));

export default theme;
