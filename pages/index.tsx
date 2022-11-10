import { GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import { axios } from '../services';
import z from 'zod'
import { Pokemons } from '../components/pokemons';
import { useEffect } from 'react';

const Home: React.FC<{ pokemons: RES }> = ({ pokemons }) => {

  // useEffect(() => {
  //   fetch('/api/hello').then(console.log);
  // }, []);

  return (
    <Layout title='Poke Next'>
        <Pokemons pokemons={pokemons} />
    </Layout>
  )
}

export default Home;

const response = z.object({ 
  name: z.string(), url: z.string(), id: z.string().optional(), img: z.string().optional() 
}).array()

const pokeValidator = z.object({
  count: z.number(), next: z.string(), previous: z.string().optional().nullable(), results: response
})

export type REQ = z.infer<typeof pokeValidator>;
export type RES = z.infer<typeof response>;

export const getStaticProps: GetStaticProps = async (ctx) => {

  // SECRET_KEY
  const data = await fetch(`/api/hello?key=${process.env.SECRET_KEY}`);

  const pokemons = (await getPokes()).results.map(({ name, ...rest }, i) => ({
    name,
    id: `${i+1}`,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))
  return { props: { pokemons }};  
}

const getPokes = async () => {
  const { data } = await axios.get<REQ>(`/pokemon?limit=80`);
  return pokeValidator.parse(data);
}
