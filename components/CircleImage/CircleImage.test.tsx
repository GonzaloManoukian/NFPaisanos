import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import React from 'react'

import { CircleImage } from './CircleImage'

const defaultProps: { src: string, size: 'sm' | 'md', 'data-testid': string} = {
  src: 'https://picsum.photos/id/237',
  size: 'md',
  'data-testid': 'circle-image'
}

test('renders without error', () => {
  const { getByTestId } = render(<CircleImage {...defaultProps} width={50} height={50} />)
  const image = getByTestId('circle-image')
  expect(image).toBeInTheDocument()
})

test('resizes image to fill circle when `fill` prop is passed', () => {
  const { getByTestId } = render(<CircleImage {...defaultProps} fill />)
  const image = getByTestId('circle-image')
  expect(image.firstChild).toHaveStyle(`
    width: 100%;
  `)
})

test('bgColor prop is set as inline style property on root element', () => {
  const bgColor = 'rgb(243, 156, 18)'
  const { getByTestId } = render(<CircleImage {...defaultProps} data-testid='circle-image' bgColor={bgColor} fill />)
  const circleImageRoot = getByTestId('circle-image')
  expect(circleImageRoot.style.background).toBe(bgColor)
})
