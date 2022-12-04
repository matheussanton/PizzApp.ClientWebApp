import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c3c750',
    }
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )

}
