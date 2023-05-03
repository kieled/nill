import {render} from '@testing-library/react'
import Category from './Category'

describe('Category', () => {
  it('renders an image with the correct source', () => {
    const {container} = render(<Category icon="facebook"/>)
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', '/categories/facebook.svg')
  })
  it('sets the alt and title attributes of the image', () => {
    const {container} = render(<Category icon="instagram" name="Instagram"/>)
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('alt', 'Instagram')
    expect(image).toHaveAttribute('title', 'Instagram')
  })
  it('handles missing name prop', () => {
    const {container} = render(<Category icon="github"/>)
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('alt', '')
    expect(image).not.toHaveAttribute('title', '')
  })
})
