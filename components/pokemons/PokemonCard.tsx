import { Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  id?: string | undefined;
  img?: string | undefined;
  name: string;
  url: string;
}

export const PokemonCard: React.FC<{ prop: Props }> = ({ prop }) => {

  const router = useRouter();

  return (
    <Grid key={prop.id} xs={12} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable>
        <Card.Body onClick={() => router.push(`/poke/${prop.id}`)}>
          <Card.Image
            src={prop.img || '/no-image.jpg'}
            alt={prop.name}
            width={'100%'}
            height={140}
            objectFit={'cover'}
          />
        </Card.Body>

        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text>{prop.id}</Text>
            </Col>
            <Col>
              <Text>{prop.name}</Text>
            </Col>
          </Row>

        </Card.Footer>
      </Card>
    </Grid>
  )
}
