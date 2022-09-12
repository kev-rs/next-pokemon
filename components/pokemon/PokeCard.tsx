import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  img?: string;
  name: string;
  id?: number;
  url: string;
}

export const PokeCard: React.FC<Props> = ({ img, name, id }) => {

  const router = useRouter();

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable onPress={() => router.push(`/name/${name}`)}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={img!}
            objectFit='cover'
            width='100%'
            height={140}
            alt={name}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row justify="space-between">
            <Text b>{id}</Text>
            <Text transform='capitalize'>{name}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
