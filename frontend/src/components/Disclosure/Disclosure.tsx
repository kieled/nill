import {Disclosure} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/20/solid'
import {type FC} from 'react'
import cn from 'classnames'
import AnimateHeight from 'react-animate-height'

import s from './styles.module.css'

interface Props {
  title: string
  children?: React.ReactNode[] | React.ReactNode
  onChange?: (fc: () => void) => void
}

const DisclosureComponent: FC<Props> = (
  {
    title,
    children,
    onChange
  }
) => {
  return (
    <Disclosure as='div'>
      {({open, close}) => (
        <>
          <Disclosure.Button
            onClick={onChange ? () => {
              return onChange(close)
            } : undefined}
            className={s.container}>
            <span>{title}</span>
            <ChevronUpIcon
              className={cn(s.default, {[s.opened]: open})}
            />
          </Disclosure.Button>
          <AnimateHeight
            height={open ? 'auto' : 0}
            duration={200}
          >
            <Disclosure.Panel className={s.content} static>
              {
                children
                  ? Array.isArray(children)
                    ? children.map(i => i)
                    : children
                  : undefined
              }
            </Disclosure.Panel>
          </AnimateHeight>
        </>
      )}
    </Disclosure>
  )
}

export default DisclosureComponent
