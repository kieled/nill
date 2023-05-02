import s from './styles.module.css'
import React, {FC, ReactNode} from "react"
import Link from "next/link"

interface Props {
  children: ReactNode
  type: 'auth' | 'register'
}

const authData = {
  auth: {
    actionText: 'Зарегистрироваться',
    text: 'Нету аккаунта?',
    actionLink: '/auth/register',
    title: 'Авторизация'
  },
  register: {
    actionText: 'Войти',
    text: 'Уже есть аккаунт?',
    actionLink: '/auth/login',
    title: 'Регистрация'
  }
}

const Box: FC<Props> = ({children, type}) => {
  return (
    <div className={s.container}>
      <div className={s.box}>
        <h2 className={s.title}>{authData[type].title}</h2>
        <div className={s.content}>
          {children}
        </div>
        <div className={s.tip}>
          <span>{authData[type].text}</span>
          <Link className='text-blue-400' href={authData[type].actionLink}>
            {authData[type].actionText}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Box