import NextLink from 'next/link'
import { Logo } from './assets/Logo'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme, Navbar, Button, Link, Text } from '@nextui-org/react'
import { SearchBar } from './SearchBar'

export const Nav = () => {

  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <nav>
      <Navbar isBordered={isDark} variant='sticky'>
        <Navbar.Brand>
          <NextLink href='/' passHref>
            <Link color="inherit">
              <Logo />
              <Text b color="inherit" hideIn="xs">Poke Next</Text>
            </Link>
          </NextLink>
        </Navbar.Brand>

        <Navbar.Content hideIn="xs" variant="underline">
          <NextLink href='/favorites' passHref>
            <Navbar.Link isActive color="inherit">Favorites</Navbar.Link>
          </NextLink>
          <Navbar.Link color="inherit" href='#'>About</Navbar.Link>
          <Navbar.Link color="inherit" href='#'>Contact</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <SearchBar />
          <Navbar.Item>
            <Switch icon checked={isDark} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
          </Navbar.Item>
          <Navbar.Link color="inherit" href='#'>Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href='#' color={'primary'}>Sign up</Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </nav>
  )
}
