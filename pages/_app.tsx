import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';
import '../styles/globals.css'
import { NextPage } from 'next';

type NextWithLayout = NextPage & {
  getLayout: ((page:JSX.Element) => JSX.Element);
}

type PropsWithLayout = AppProps & {
  Component: NextWithLayout;
}

function MyApp({ Component, pageProps }: PropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
  )
}

export default MyApp
