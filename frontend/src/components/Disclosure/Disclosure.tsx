import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { type FC } from 'react'
import cn from 'classnames'

import s from './styles.module.css'

interface Props {
  title: string
  children: React.ReactNode
  onChange?: (fc: () => void) => void
}

const DisclosureComponent: FC<Props> = ({ title, children, onChange }) => {
  return (
    <Disclosure as='div'>
      {({ open, close }) => (
        <>
          <Disclosure.Button
            onClick={onChange ? () => onChange(close) : undefined}
            className={s.container}>
            <span>{title}</span>
            <ChevronUpIcon
              className={cn(s.default, { [s.opened]: open })}
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
