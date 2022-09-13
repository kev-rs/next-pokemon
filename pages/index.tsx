import { GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import { axios } from '../services';
import z from 'zod'
import { Card, Col, Container, Grid, Row, Text } from '@nextui-org/react';

const Home: React.FC<{ pokemons: RES }> = ({ pokemons }) => {

  console.log(pokemons);

  return (
    <Layout title='Pokemon'>
        <h1>Pokemon</h1>
        <Grid.Container gap={2}>
          {pokemons?.map((prop) => (
            <Grid key={ prop.id } lg={10} md={10} sm={10} xl={1} xs={2}> 
              <Card isHoverable isPressable>
                <Card.Body>
                  <Card.Image 
                    src={ prop.img || '/no-image.jpg'}
                    alt={prop.name}
                    height={100}
                    width={100}
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
                      <Text>{ prop.id }</Text>
                    </Col>
                    <Col>
                      <Text>{ prop.name }</Text>
                    </Col>
                  </Row>

                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
    </Layout>
  )
}

export default Home;

const response = z.object({ 
  name: z.string(), url: z.string(), id: z.string().optional(), img: z.string().optional() 
}).array()

const pokeValidator = z.object({
  count: z.number(), next: z.string(), previous: z.string().optional().nullable(), results: response
})

type REQ = z.infer<typeof pokeValidator>;
type RES = z.infer<typeof response>;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const pokemons = (await getPokes()).results.map(({ name, ...rest }, i) => ({
    name,
    id: `${i+1}`,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))
  return { props: { pokemons }};  
}

const getPokes = async () => {
  const { data } = await axios.get<REQ>(`/pokemon?limit=80`);
  return pokeValidator.parse(data);
}
