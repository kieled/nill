import {fireEvent, render} from '@testing-library/react'
import Disclosure from './Disclosure'

describe('DisclosureComponent', () => {
  it('renders the title', () => {
    const {getByText} = render(<Disclosure title="My Title"/>)
    expect(getByText('My Title')).toBeInTheDocument()
  })

  it('renders the children', () => {
    const {getByText} = render(<Disclosure title="My Title">My children</Disclosure>)
    fireEvent.click(getByText('My Title'))
    expect(getByText('My children')).toBeInTheDocument()
  })

  it('calls onChange when clicked', () => {
    const onChangeMock = jest.fn()
    const {getByText} = render(<Disclosure title="My Title" onChange={onChangeMock}/>)
    fireEvent.click(getByText('My Title'))
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('does not call onChange when not clicked', () => {
    const onChangeMock = jest.fn()
    render(<Disclosure title="My Title" onChange={onChangeMock}/>)
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('opens the content when clicked', () => {
    const {queryByText, getByText} = render(<Disclosure title="My Title">My children</Disclosure>)
    expect(queryByText('My children')).not.toBeInTheDocument()
    fireEvent.click(getByText('My Title'))
    expect(getByText('My children')).toBeInTheDocument()
  })

  it('closes the content when clicked again', () => {
    const {queryByText, getByText} = render(<Disclosure title="My Title">My children</Disclosure>)
    expect(queryByText('My children')).not.toBeInTheDocument()
    fireEvent.click(getByText('My Title'))
    expect(getByText('My children')).toBeInTheDocument()
    fireEvent.click(getByText('My Title'))
    expect(queryByText('My children')).not.toBeInTheDocument()
  })
})
