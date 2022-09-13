import Head from 'next/head'
import React from 'react'
import { Nav } from '../ui/Nav';

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const Layout: React.FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
          <title>{title}</title>
          <meta name='author' content="Kevin Brooks Santana" />
          <meta name='description' content={`Info about pokemon ${ title }`} />
          <meta name='keywords' content={`${ title }, pokemon, pokedex`} />
        </Head>

        <Nav />

        <main style={{marginTop: '20px'}}>{ children }</main>
    </>
  )
}
