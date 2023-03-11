import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import React from 'react'

import SearchIcon from '../../public/icons/search.svg'
import { Icon } from './Icon'

describe('Icon', () => {
  const defaultProps = {
    src: SearchIcon,
    alt: 'icon-alt-text'
  }

  it('renders correctly with required props only', () => {
    const { container } = render(<Icon {...defaultProps} />)

    expect(container.querySelector('.icon')).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()

    const img = container.querySelector('img') as HTMLImageElement
    expect(img.alt).toBe(defaultProps.alt)
    expect(img.width).not.toBe(0)
    expect(img.height).not.toBe(0)
  })

  it('passes additional props to img and div elements', () => {
    const extraProps = {
      width: 30,
      height: 30
    }

    const { container } = render(
      <Icon {...defaultProps} {...extraProps} data-testid='test-icon' className='test-class' />
    )

    const icon = container.querySelector('.icon.test-class') as HTMLDivElement
    const img = container.querySelector('img') as HTMLImageElement

    expect(icon.style.width).toBe(`${extraProps.width}px`)
    expect(icon.style.height).toBe(`${extraProps.height}px`)
    expect(img.width).toBe(extraProps.width)
    expect(img.height).toBe(extraProps.height)
  })
})
