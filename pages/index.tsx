import { GetStaticProps } from 'next'
import { Layout } from '../components/layouts'
import { axios } from '../services'
import z from 'zod'
import { Grid } from '@nextui-org/react';
import { PokeCard } from '../components/pokemon';
const Home: React.FC<{pokemons:RES}> = ({pokemons}) => {
  
  return (
    <Layout title='Pokemons List'>
      <h1>Hi kev</h1>
      <Grid.Container gap={2} justify='flex-start'>
          {pokemons.map(({...props}) => <PokeCard key={props.id} {...props} />)}
      </Grid.Container>
    </Layout>
  )
}

export default Home;

const results = z.object({
  name: z.string(),
  url: z.string(),
  id: z.number().optional(),
  img: z.string().optional()
}).array();

const dataValidator = z.object({
  count: z.number(),
  next: z.string().optional(),
  previous: z.string().optional().nullable(),
  results,
});

export type DataType = z.infer<typeof dataValidator>;
export type RES = z.infer<typeof results>

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await getPokes();
  
  const pokemons: RES = data.results.map((poke, i) => ({
    ...poke, 
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))

  return {
    props: { pokemons }
  }
}

const getPokes = async (): Promise<DataType> => {
  const { data } = await axios.get('/pokemon?limit=151');
  return dataValidator.parse(data);
}



