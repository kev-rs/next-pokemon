import { Card, Col, Container, Grid, Row, Text } from '@nextui-org/react';
import { RES } from '../../pages';
import { PokemonCard } from './PokemonCard';

export const Pokemons: React.FC<{ pokemons: RES }> = ({ pokemons }) => {
  return (
    <Container css={{ maxWidth: '1200px' }}>
      <Text h1 css={{ textAlign: 'center' }}>Pokemons</Text>
      <Grid.Container gap={2}>
        {pokemons?.map((prop) => (
          <PokemonCard prop={prop} key={prop.id} />
        ))}
      </Grid.Container>
    </Container>
  )
}
