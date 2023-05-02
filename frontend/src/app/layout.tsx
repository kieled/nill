import './globals.css'

import {Montserrat} from 'next/font/google'
import Header from './_components/Header'
import {FC} from 'react'
import sidebarOptions from "mocks/sidebarOptions"
import Sidebar from "./_components/Sidebar"

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

const RootLayout: FC<Props> = ({children}) => {
  return (
    <html lang="ru">
    <body className={font.className}>
    <Header/>
    <main>
      <Sidebar items={sidebarOptions}/>
      <div className='content'>
        {children}
      </div>
    </main>
    </body>
    </html>
  )
}

export default RootLayout
