import Image from "next/image";
import { Navbar, Text, Button, Link } from "@nextui-org/react"
import { useState } from "react";
import NextLink from 'next/link'

export const Nav = () => {

  const [active, setActive] = useState(false);
    
  return (
    <Navbar isBordered variant={'sticky'} isCompact>
      <Navbar.Brand>
        <NextLink href='/' passHref>
          <Link>
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt='pokemon-img'
              width={70}
              height={70}
            />  
            <Text color="white" h1>P</Text>
            <Text color="white" h3>ókemon</Text>
          </Link>
        </NextLink>
      </Navbar.Brand>

      <Navbar.Content hideIn="xs" variant="underline">
        <NextLink href='/favorites' passHref>
          <Navbar.Link isActive={active} onPress={() => setActive(!active)}>Favorites</Navbar.Link>
        </NextLink>
      </Navbar.Content>

      <Navbar.Content>
          <Navbar.Link>Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">Sign Up</Button>
          </Navbar.Item>
        </Navbar.Content>
    </Navbar>
  )
}
