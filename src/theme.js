
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7986cb', // A softer, more modern blue
    },
    secondary: {
      main: '#ffab40', // A vibrant, complementary orange
    },
    background: {
      default: '#f7f9fc', // A lighter, cleaner background
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: '2.2rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.6rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.2rem',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          boxShadow: '0px 4px 12px rgba(121, 134, 203, 0.3)',
          '&:hover': {
            boxShadow: '0px 8px 24px rgba(121, 134, 203, 0.4)',
          },
        },
      },
    },
  },
});

export default theme;
