'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import type { FC } from 'react'

import s from './styles.module.scss'

interface Props {
  title: string
  children: React.ReactNode
}

const DisclosureComponent: FC<Props> = ({ title, children }) => {
  return (
    <Disclosure as='div'>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={s.container}>
            <span>{title}</span>
            <ChevronUpIcon
              className={`${
                open ? s.opened : ''
              } ${s.default}`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className={s.content}>
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default DisclosureComponent
