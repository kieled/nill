import './globals.css'

import { Montserrat } from 'next/font/google'
import Header from './(components)/Header'
import type { ISidebarItem } from './(components)/Sidebar'
import Sidebar from './(components)/Sidebar'
import { FC } from 'react'

export const metadata = {
  title: 'nill - new IT forum',
  description: 'New IT forum for everyone whom like or know something about technologies'
}

interface Props {
  children: React.ReactNode
}

const font = Montserrat({
  variable: '--font-montserrat',
  subsets: ['cyrillic', 'cyrillic-ext'],
  preload: true,
})

const sidebarItems: ISidebarItem[] = [
  {
    id: 1,
    name: 'Games',
    sub: [
      {
        id: 11,
        name: 'Dota',
        link: 'https://dota.com/',
      },
      {
        id: 12,
        name: 'CS:GO',
        link: 'https://csgo.com/',
      },
      {
        id: 13,
        name: 'Valorant',
        link: 'https://valorant.net/',
      },
    ],
  },
  {
    id: 2,
    name: 'News',
    sub: [
      {
        id: 21,
        name: 'Hot',
        link: 'https://hot.com/',
      },
      {
        id: 22,
        name: 'Politics',
        link: 'https://politic.com/',
      },
      {
        id: 23,
        name: 'Games',
        link: 'https://games.com/',
      },
    ],
  },
]

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={font.className}>
        <Header />
        <main className='content'>
          <Sidebar items={sidebarItems} />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
