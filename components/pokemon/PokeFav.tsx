import { Grid } from "@nextui-org/react"
import { PokeCardFav } from "./"

export const PokeFav: React.FC<{items: string[] | number[]}> = ({items}) => {
  
  return (
    <Grid.Container gap={2} justify='flex-start'>
      {items.map(name => <PokeCardFav name={name} key={name} />)}
    </Grid.Container>
  )
}
