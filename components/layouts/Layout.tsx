import { FC } from "react"
import Head from "next/head"
import { Nav } from '../ui';

interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({children, title}) => {

  console.log({origin});

  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content="Kevin Brooks Santana" />
            <meta name='description' content={`Info about pokemon ${ title }`} />
            <meta name='keywords' content={`${ title }, pokemon, pokedex`} />
            <meta property="og:title" content={`Info about ${ title }`} />
            <meta property="og:description" content={`This is a page about the pokemon ${ title }`} />
            <meta property="og:image" content={`${origin}/assets/banner.png`} />
        </Head>

        <Nav />
        
        <main className="container">
            { children }
        </main>
    </>
  )
}
