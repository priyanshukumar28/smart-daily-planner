
import React, { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CircularProgress, Box } from '@mui/material';
import theme from './theme';

const Dashboard = React.lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense 
        fallback={
          <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            minHeight="100vh"
          >
            <CircularProgress />
          </Box>
        }
      >
        <Dashboard />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
