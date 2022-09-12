import { Grid, Card, Link } from "@nextui-org/react"
import NextLink from 'next/link';

export const PokeCardFav: React.FC<{name: string | number}> = ({name}) => {
  
  return (
    <Grid xs={6} sm={2} md={2} xl={1} key={name}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <NextLink href={`/pokemon/${name}`} passHref>
          <Link>
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${name}.svg`}
              width={'100%'}
              height={140}
            />
          </Link>
        </NextLink>
      </Card>
    </Grid>
  )
}
