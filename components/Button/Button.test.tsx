import '@testing-library/jest-dom'

import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import SearchIcon from '../../public/icons/search.svg'
import Button from './Button'

test('should call onClick function when button is clicked', () => {
  const mockOnClick = jest.fn()
  const { getByRole } = render(<Button onClick={mockOnClick}> Click Me </Button>)
  const button = getByRole('button')
  fireEvent.click(button)
  expect(mockOnClick).toHaveBeenCalled()
})

test('should render children prop as expected', () => {
  const buttonText = 'My Button'
  const { getByText } = render(<Button>{buttonText}</Button>)
  const button = getByText(buttonText)
  expect(button).toBeInTheDocument()
})

test('should disable button when disabled prop is true', () => {
  const { getByRole } = render(<Button disabled>Disabled Button</Button>)
  const button = getByRole('button')
  expect(button.hasAttribute('disabled')).toBeTruthy()
})

test('should render an icon if an icon prop is provided', () => {
  const { container } = render(<Button icon={SearchIcon}>Search Button</Button>)
  const icon = container.querySelector('.icon')
  expect(icon).toBeInTheDocument()
})

test('should render a small rounded button if size prop is "smallRounded"', () => {
  const { getByRole } = render(<Button size='smallRounded'>Small Rounded Button</Button>)
  const button = getByRole('button')
  expect(button.classList.contains('smallRounded')).toBeTruthy()
})

test('should render a fullWidth button if fullWidth prop is true', () => {
  const { getByRole } = render(<Button fullWidth>Full Width Button</Button>)
  const button = getByRole('button')
  expect(button.classList.contains('fullWidth')).toBeTruthy()
})

test('should render a rounded full button if roundedFull prop is true', () => {
  const { getByRole } = render(<Button roundedFull>Rounded Full Button</Button>)
  const button = getByRole('button')
  expect(button.classList.contains('roundedFull')).toBeTruthy()
})
