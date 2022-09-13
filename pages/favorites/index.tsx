import { Card, Container, Grid, Image } from '@nextui-org/react'
import React from 'react'
import { Layout } from '../../components/layouts'
import { Fav, pokemons } from '../../utils'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Favorites = () => {
  const router = useRouter();
  const [ items, setItems ] = useState<Fav[]>([]);

  useEffect(() => {
    setItems(pokemons())
  }, []);
  

  return (
    <Layout title='Favorites'>
      <Container>
        <h1>Favorites</h1>
        <Grid.Container gap={2}>
          {
            items.map(({ id, name }) => (
              <Grid key={id}>
                <Card 
                  css={{w: '200px', h: '200px'}} 
                  isHoverable 
                  isPressable 
                  onPress={() => router.push(`/pokemon/${name}`)}
                >
                  <Card.Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt={name}
                    width={150}
                    height={'100%'}
                  />
                </Card>
              </Grid>
            ))
          }
        </Grid.Container>
      </Container>
    </Layout>
  )
}

export default Favorites