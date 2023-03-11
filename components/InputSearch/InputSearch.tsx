import SearchIcon from '@/public/icons/search.svg'
import { ChangeEvent, KeyboardEvent, memo, useState } from 'react'

import Button from '../Button/Button'
import styles from './InputSearch.module.css'

type InputSearchProps = {
    value?: string,
    defaultValue?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    onAction?: (value: string) => void,
    onClear?: () => void,
};

export interface CleanInputSearchRef {
    cleanInputSearch: () => void
};

const InputSearch = ({
  onAction,
  onClear,
  onChange,
  value,
  defaultValue,
  ...restOfProps
}: InputSearchProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>(defaultValue || value || '')

  const keyDownEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement

    if (e.key === 'Enter') {
      onAction && onAction(target.value)
    }
  }

  const handlerAction = () => {
    onAction && onAction(searchValue)
  }

  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event)
    setSearchValue(event.target.value)
  }

  return (
    <div className={styles.inputSearch}>
      <div className={styles.input}>
        <input
          type='search'
          name='search'
          id='search'
          value={searchValue}
          onKeyDown={keyDownEnter}
          onChange={handlerChange}
          placeholder='Type to find something nice... '
          {...restOfProps}
        />
      </div>
      <div className='my-1'>
        <Button icon={SearchIcon} onClick={handlerAction} primary aria-label='search' data-testid='searchButton' />
      </div>
    </div>
  )
}

export default memo(InputSearch)
