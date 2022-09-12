
const saveStorage = (name: string) => {
    let names: string[] = JSON.parse(localStorage.getItem('pokemons') || '[]');

    names.includes(name)
        ? names = names.filter((pokeName) => pokeName !== name)
        : names.push(name);

    localStorage.setItem('pokemons', JSON.stringify(names));
}

const checkData = ({name}: {name: string}): boolean => {
    if(typeof window === 'undefined') return false;

    const names: string[] = JSON.parse(localStorage.getItem('pokemons') || '[]');
    return names.includes(name);
}

const pokeNames = () => {
    return JSON.parse(localStorage.getItem('pokemons') || '[]');
}

export { saveStorage, checkData, pokeNames };