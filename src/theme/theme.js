import { createTheme } from '@mui/material/styles';
import 'normalize.css';

const theme = createTheme({
  palette: {
    primary: {
      dark: '#858e92',
      main: '#fff',
    },
    secondary: {
      main: 'rgba(251, 215, 132, 1)',
    },
    background: {
      main: '#0b1d26',
      fogging: 'linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%)',
      foggingDown: 'linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%)',
    }
  },
  typography: {
    fontFamily: 'Gilroy-Bold, sans-serif',
    fontSize: 18,
    h1: {
      fontFamily: 'Chronicle Display, sans-serif',
    },
    h2: {
      fontFamily: 'Chronicle Display, sans-serif',
    },
    body1: {
      fontSize: 18,
    },
  },
});

export default theme