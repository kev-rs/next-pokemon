import NextLink from 'next/link'
import { useRouter } from 'next/router';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme, Navbar, Button, Link, Text } from '@nextui-org/react'
import { SearchBar, MoonIcon, SunIcon, Logo } from './index'

export const Nav = () => {

  type Paths = '/favorites' | '/about' | '/contact';

  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const router = useRouter();
  
  return (
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
          <Navbar.Link isActive={router.asPath === '/favorites'} color="inherit">Favorites</Navbar.Link>
        </NextLink>
        <NextLink href='/about' passHref>
          <Navbar.Link isActive={router.asPath === '/about'} color="inherit">About</Navbar.Link>
        </NextLink>
        <NextLink href='/contact' passHref>
          <Navbar.Link isActive={router.asPath === '/contact'} color="inherit">Contact</Navbar.Link>
        </NextLink>
      </Navbar.Content>

      <Navbar.Content>
        <SearchBar />
        <Navbar.Item>
          <Switch
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />} 
            checked={isDark} 
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
        </Navbar.Item>
        <NextLink replace href='/login' passHref>
          <Navbar.Link color="inherit">Login</Navbar.Link>
        </NextLink>
        <Navbar.Item>
          <Button auto flat as={Link} onPress={() => router.push('/register')} color={'primary'}>Sign up</Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}
