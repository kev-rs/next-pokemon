export interface Fav {
  name: string;
  id: number;
}

const saveFav = ({ name, id }: Fav) => {
    let items: Fav[] = JSON.parse(localStorage.getItem('pokemon') || '[]');

  const check = items.find(({ id:pokeId }) => pokeId === id);

  check
      ? items = items.filter(({ id:pokeId }) => pokeId !== id)
      : items.push({name, id});

  localStorage.setItem('pokemon', JSON.stringify(items));
}

const isOnStorage = ({ id }: {id: number}): boolean => {
  let items: Fav[] = JSON.parse(localStorage.getItem('pokemon') || '[]');
  return items.some(({id:pokeId}) => pokeId === id)
}

const pokemons = () => {
  return JSON.parse(localStorage.getItem('pokemon') || '[]');  
}

export { saveFav, isOnStorage, pokemons };