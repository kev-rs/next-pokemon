
const saveFavorite = (pokemon:{id: number}) => {
    let items: number[] = JSON.parse(localStorage.getItem('pokemon') || '[]');

    (items.includes(pokemon.id)) 
        ? items = items.filter((id) => id !== pokemon.id)
        : items.push(pokemon.id)

    localStorage.setItem('pokemon', JSON.stringify(items))
}

const isOnStorage = (pokemon:{id: number}):boolean => {
    if(typeof window === 'undefined') return false;

    const items: number[] = JSON.parse(localStorage.getItem('pokemon') || '[]');
    return items.includes(pokemon.id);
}

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('pokemon') || '[]');
}

export { saveFavorite, isOnStorage, pokemons };
