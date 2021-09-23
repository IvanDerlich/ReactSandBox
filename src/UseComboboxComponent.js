import * as React from 'react'
import {useCombobox} from 'downshift'

import { menuStyles, comboboxStyles} from '../src/styles/shared'
import items from './shared/items';

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
      <h1>Down Shift</h1>
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
      <h1>---</h1>
    </>
  )
}

export default DropdownCombobox;
