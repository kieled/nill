import type { FC } from 'react'
import Disclosure from 'components/Disclosure'
import Link from 'next/link'

export interface ISidebarItem {
  id: number
  name: string
  sub: SubItem[]
}

interface SubItem {
  id: number
  name: string
  link: string
}

const SidebarItemComponent: FC<ISidebarItem> = ({ sub, name }) => {
  return <Disclosure title={name}>
    <div className={'flex flex-col gap-3'}>
      {sub.map(i =>
        <Link
          className='block py-1 pl-4 border rounded-xl text-sm'
          key={i.id}
          href={i.link}
        >
          {i.name}
        </Link>,
      )}
    </div>
  </Disclosure>
}

export default SidebarItemComponent
