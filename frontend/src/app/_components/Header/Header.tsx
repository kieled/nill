'use client'

import Link from 'next/link'
import s from './styles.module.css'
import headerOptions from "mocks/headerOptions"
import Modal from "components/Modal"
import {useState} from "react"

const Header = () => {
  const [visible, setVisible] = useState(true)

  return (
    <header className={s.container}>
      <Link href='/' className={s.logo}>nill</Link>
      <ul className={s.links}>
        {headerOptions.buttons.map(i =>
          <li key={i.id}>
            <Link href={i.link}>{i.name}</Link>
          </li>)
        }
      </ul>
      <ul className='flex gap-4'>
        <button className={s.btn} onClick={() => setVisible(true)}>login</button>
      </ul>
      <Modal visible={visible} setVisible={setVisible} title='Авторизация'>
        test
      </Modal>
    </header>
  )
}

export default Header
