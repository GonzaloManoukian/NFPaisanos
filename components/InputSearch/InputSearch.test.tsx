import { fireEvent, render } from '@testing-library/react'

import InputSearch from './InputSearch'

test('should handle onChange event', async () => {
  const mockOnChange = jest.fn()
  const { getByDisplayValue } = await render(<InputSearch onChange={mockOnChange} value='testing' />)
  fireEvent.change(getByDisplayValue('testing'), { target: { value: 'changeEvent' } })
  expect(mockOnChange).toHaveBeenCalledTimes(1)
})
