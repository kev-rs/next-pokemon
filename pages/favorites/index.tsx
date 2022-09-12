import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { NoFav } from '../../components/ui';
import { pokemons } from '../../utils';
import { PokeFav } from '../../components/pokemon';
import { pokeNames, saveFavorite } from '../../utils';

const Favorites = () => {

  const [ items, setItems ] = useState<string[] | number[]>([])

  useEffect(() => {
    // setItems(pokeNames());
    setItems(pokemons())
  }, []);  
     
  return (
    <Layout>
      {items.length === 0 
        ? <NoFav />
        : <PokeFav items={items} />}
    </Layout>
  )
}

export default Favorites;