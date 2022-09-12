import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

const Home = () => {

    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

  return (
    <>
        <Switch icon checked={isDark} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
    </>
  )
}

export default Home;
