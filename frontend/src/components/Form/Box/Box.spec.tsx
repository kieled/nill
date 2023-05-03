import {render} from '@testing-library/react'
import Box from './Box'

describe('Box', () => {
  it('renders the correct title for auth type', () => {
    const {getByText} = render(<Box type='auth'>Children</Box>)
    expect(getByText('Авторизация')).toBeInTheDocument()
  })

  it('renders the correct title for register type', () => {
    const {getByText} = render(<Box type='register'>Children</Box>)
    expect(getByText('Регистрация')).toBeInTheDocument()
  })

  it('renders the children', () => {
    const {getByText} = render(<Box type='auth'>My children</Box>)
    expect(getByText('My children')).toBeInTheDocument()
  })

  it('renders the correct text and link for auth type', () => {
    const {getByText} = render(<Box type='auth'>Children</Box>)
    expect(getByText('Нету аккаунта?')).toBeInTheDocument()
    expect(getByText('Зарегистрироваться')).toHaveAttribute('href', '/auth/register')
  })

  it('renders the correct text and link for register type', () => {
    const {getByText} = render(<Box type='register'>Children</Box>)
    expect(getByText('Уже есть аккаунт?')).toBeInTheDocument()
    expect(getByText('Войти')).toHaveAttribute('href', '/auth/login')
  })
})
