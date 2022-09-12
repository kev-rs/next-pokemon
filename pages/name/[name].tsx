import { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next'
import { Layout } from "../../components/layouts"
import { axios, getPoke } from '../../services';
import { Pokemon } from '../../interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { isOnStorage, saveFavorite } from '../../utils';
import { HeartIcon } from '../../components/ui/HeartIcon';
import confetti from 'canvas-confetti'
import { DataType } from '../index';

export type Poke = { name: string };
export type Storage = Poke[];

const PokemonByName: React.FC<{pokemon: Pokemon}> = ({pokemon}) => {

  const [ check, setCheck ] = useState(isOnStorage({ id: pokemon.id }));

  const handleSave = () => {
    saveFavorite({ id: pokemon.id });
    setCheck(!check);

    if(check) return;

    confetti({
      particleCount: 100,
      zIndex: 999,
      spread: 160,
      origin: { x: 1, y: 0 },
      angle: -100
    });
  }
    
  return (
    <Layout title={ pokemon.name }>
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{padding: '30px'}}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button 
                color='error'
                icon={<HeartIcon fill="currentColor" filled={check} />}
                shadow
                onPress={handleSave}>
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>pokemon.Sprites: </Text>

              <Container display='flex'>
                <Image 
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

interface Path {
  params: {
    name: string;
  }
}

interface Props {
  paths: Path[];
  fallback: boolean;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<DataType>(`/pokemon?limit=100`);
  const paths = data.results.map(({ name }) => ({ params: { name }}));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { name } = params as {name: string};
  return { props: { pokemon: await getPoke(name)}}
}

export default PokemonByName;
