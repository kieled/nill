'use client'

import type {FC} from 'react'
import s from './styles.module.css'
import Disclosure from 'components/Disclosure'
import Link from 'next/link'
import useAutoCloseDisclosure from 'hooks/useAutoCloseDisclosure'

export interface ISidebarItem {
  id: number
  name: string
  sub: {
    id: number
    link: string
    name: string
  }[]
}

interface Props {
  items: ISidebarItem[]
}

const Sidebar: FC<Props> = ({items}) => {
  const [onChange] = useAutoCloseDisclosure()

  return (
    <aside className={s.container}>

      {items.map(i => <Disclosure
        title={i.name}
        key={i.id}
        onChange={(close: () => void) => onChange(i.id, close)}
      >
        {i.sub.map(d =>
          <Link className={s.itemLink} key={d.id} href={d.link}>
            {d.name}
          </Link>
        )}
      </Disclosure>)}
    </aside>
  )
}

export default Sidebar
