import { useState } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { axios } from '../../services';
import { Layout } from '../../components/layouts';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { HeartIcon } from '../../components/ui';
import type { REQ } from '..';
import type { Pokemon, Sprites } from '../../interfaces';
import { isOnStorage, saveFav } from '../../utils';

interface Props {
  name: string;
  id: number;
  sprites: Sprites;
}

const onServer: boolean = (typeof window === 'undefined') ? true : false;

const Pokemon: React.FC<{ pokemon: Props }> = ({ pokemon }) => {

  const [ check, setCheck ] = useState(!onServer && isOnStorage({id: pokemon.id}));

  const handleSave = () => {
    saveFav({ name: pokemon.name, id: pokemon.id });
    setCheck(!check);
  }

  return (
    <Layout title={pokemon.name}>
      <Container css={{maxWidth: '1200px'}}>
        <Grid.Container gap={2}>
          <Grid>
            <Card css={{w: 300, h: 300}} isHoverable isPressable>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                width={"100%"}
                height={'100%'}
                alt={pokemon.name}
              />
            </Card>
          </Grid>

          <Grid css={{width: '800px'}}>
            <Card>
              <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                <Text css={{textTransform: 'capitalize'}} h1>{ pokemon.name }</Text>
                <Button
                  onPress={handleSave}
                  color='error'
                  icon={<HeartIcon fill='currentColor' filled={check} label='heart' />}
                ></Button>
              </Card.Header>
              
              <Card.Body css={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Text h2>Sprites:</Text>
                <Card.Image 
                  src={pokemon.sprites.front_default}
                  width={"100%"}
                  height={'100%'}
                  alt={pokemon.name}
                />
                <Card.Image 
                  src={pokemon.sprites.back_default}
                  width={"100%"}
                  height={'100%'}
                  alt={pokemon.name}
                />
                <Card.Image 
                  src={pokemon.sprites.front_shiny}
                  width={"100%"}
                  height={'100%'}
                  alt={pokemon.name}
                />
                <Card.Image 
                  src={pokemon.sprites.back_shiny}
                  width={"100%"}
                  height={'100%'}
                  alt={pokemon.name}
                />
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  )
}

export default Pokemon;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<REQ>(`/pokemon?limit=100`);
  const paths = data.results.map(({ name }) => ({ params: { name } }));
  return { paths, fallback: 'blocking' };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPoke(name);
  if(!pokemon) return {
    redirect: {
      destination: '/',
      permanent: false,
    }
  }
  return { props: { pokemon }, revalidate: 86400 };
}

const getPoke = async (names: string) => {
  try {
    const { data } = await axios.get<Pokemon>(`/pokemon/${names}`);
    return { name: data.name, id: data.id, sprites: data.sprites };
  } catch (error) {
    return null;
  }
}
