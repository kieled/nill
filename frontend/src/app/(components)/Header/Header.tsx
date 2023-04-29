import Link from 'next/link'
import s from './styles.module.css'

const options = {
  logo: 'nill',
  buttons: [
    {
      id: '1',
      name: '#insides',
      link: 'https://heheeh.com/',
    },
    {
      id: '2',
      name: '#topics',
      link: 'https://heheeh.com/',
    },
  ],
}

const Header = () => {
  return (
    <header className={s.container}>
      <h3 className={s.logo}>{options.logo}</h3>
      <ul className={s.links}>
        {options.buttons.map(i =>
          <li key={i.id}>
            <Link href={i.link}>{i.name}</Link>
          </li>)
        }
      </ul>
      <ul className='flex gap-4'>
        <button className={s.btn}>login</button>
      </ul>
    </header>
  )
}

export default Header
