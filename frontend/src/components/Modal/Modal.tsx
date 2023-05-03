'use client'

import {FC, Fragment, ReactNode} from "react"
import {Dialog, Transition} from "@headlessui/react"
import {XMarkIcon} from '@heroicons/react/24/solid'
import s from './styles.module.css'

interface Props {
  visible: boolean
  setVisible: (value: boolean) => void
  children: ReactNode
  title?: string
}

const Modal: FC<Props> = (
  {
    visible,
    setVisible,
    children,
    title
  }
) => {
  const onClose = () => setVisible(false)

  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog className={s.wrapper} as='div' onClose={onClose}>
        <div className={s.background}/>
        <div className={s.inner}>
          <div className={s.center}>
            <Dialog.Panel className={s.modal}>
              {title &&
                  <Dialog.Title as="h3" className={s.title}>
                    {title}
                  </Dialog.Title>
              }
              <div onClick={onClose} className={s.close}>
                <XMarkIcon className='w-7 h-7'/>
              </div>
              <div>{children}</div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal