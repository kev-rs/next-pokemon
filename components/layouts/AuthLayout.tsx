import Head from "next/head"

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const AuthLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name='author' content="Kevin Brooks Santana" />
        <meta name='description' content={`Info about pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
      </Head>

      <main>{ children }</main>
    </>
  )
}
