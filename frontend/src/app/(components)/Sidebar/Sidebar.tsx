import type { FC } from 'react'
import s from './styles.module.scss'
import type { ISidebarItem } from './SidebarItem'
import SidebarItem from './SidebarItem'

interface Props {
  items: ISidebarItem[]
}

const Sidebar: FC<Props> = ({ items }) => {
  return (
        <aside className={s.container}>
            {items.map(i => <SidebarItem
                key={i.id}
                id={i.id}
                name={i.name}
                sub={i.sub}
            />)}
        </aside>
  )
}

export default Sidebar
