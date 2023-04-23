'use client'

import Link from 'next/link'
import useTheme from 'hooks/useTheme'
import { MoonIcon } from '@heroicons/react/24/outline'
import s from './styles.module.scss'

const options = {
  logo: 'nill',
  buttons: [
    {
      id: '1',
      name: '#insides',
      link: 'https://heheeh.com/',
    },
    {
      id: '2',
      name: '#topics',
      link: 'https://heheeh.com/',
    },
  ],
}

function Header() {
  const [_, switchTheme] = useTheme()

  return (
        <header className={s.container}>
            <h3 className={s.logo}>{options.logo}</h3>
            <ul className={s.links}>
                {options.buttons.map(i =>
                    <li key={i.id}>
                        <Link href={i.link}>{i.name}</Link>
                    </li>)
                }
            </ul>
            <ul className='flex gap-4'>
                <button className={s.btn}>login</button>
                <button onClick={switchTheme} className={s.theme}><MoonIcon /></button>
            </ul>
        </header>
  )
}

export default Header
