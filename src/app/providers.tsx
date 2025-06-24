'use client';

import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AppContextProvider } from '@/context/AppContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1c1c1c',
    },
    primary: {
      main: '#734eed',
    },
    secondary: {
      main: '#a893ea',
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppContextProvider>
        {children}
      </AppContextProvider>
    </ThemeProvider>
  );
}
