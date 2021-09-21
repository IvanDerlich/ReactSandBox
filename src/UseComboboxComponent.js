import * as React from 'react'
import {useCombobox} from 'downshift'

import { items, menuStyles, comboboxStyles} from '../src/styles/shared'
import { useState } from 'react'

function DropdownCombobox() {
  // const items = ['Neptunium', 'Plutonium']
  const [inputItems, setInputItems] = useState(items)
  const {
    isOpen,
    // selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({inputValue}) => {
      setInputItems(
        items.filter(item =>
          item.toLowerCase().startsWith(inputValue.toLowerCase()),
        ),
      )
    },
  })

  return (
    <>
      <label {...getLabelProps()}>Choose an element:</label>
      <div 
        style={comboboxStyles}
        {...getComboboxProps()}
      >
        <input {...getInputProps()} />
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label={'toggle menu'}
        >
          &#8595;
        </button>
      </div>
      <ul
       {...getMenuProps()}
       style={menuStyles}
      >
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
              }
              key={`${item}${index}`}
              {...getItemProps({item, index})}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  )
}

export default DropdownCombobox;
