import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
