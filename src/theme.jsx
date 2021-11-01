import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      dark: '#054D51',
      main: '#1E9C99',
      light: '#48C8C5',
    },
    secondary: {
      dark: '#48C8C5',
      main: '#81C8D8',
      light: '#C0F2F3',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
