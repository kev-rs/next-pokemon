import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { darkTheme, lightTheme } from '../themes';
import { NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  return  (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} /> 
      </NextUIProvider>
    </ThemeProvider>
  )
}

export default MyApp;
