// cSpell: disable
import { Dispatch, SetStateAction } from 'react'
import { Listbox } from '@headlessui/react'
import styles from './Select.module.css'
import Text from '../Text/Text'
import { textFont } from '@/utils/fonts'
import Button from '../Button/Button'
import DropdownIcon from '@/public/icons/dropdown.svg'

export type SelectElement = {
  id: string;
  name: string;
}

export type SelectProps = {
  elements: SelectElement[];
  title: string;
  value?: SelectElement | undefined;
  setValue?: Dispatch<SetStateAction<SelectElement | undefined>>;
}

export const Select = ({ elements, title, value, setValue }: SelectProps) => {
  return (
    <div className={styles.select}>
      <Listbox value={value} onChange={setValue}>
        <Listbox.Button className={`${styles.button} ${textFont.className}`}>
          <Text as='span' variant='caption'>
            {value ? value.name : title}
          </Text>
          <Button icon={DropdownIcon} size='smallRounded' outline roundedFull />
        </Listbox.Button>
        <Listbox.Options className={styles.options}>
          {elements.map((element) => (
            <Listbox.Option
              key={element.name}
              value={element}
              className={styles.option}
            >
              <Text as='span' variant='caption' fontWeight='normal' color='white'>
                {element.name}
              </Text>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
