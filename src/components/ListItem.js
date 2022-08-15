import React from 'react'
import styles from '../styles/ListItem.module.css'

function ListItem({ item, selected, pointer, onClickCallback }) {
  const pointerClass = pointer ? 'pointer' : ''
  const selectedClass = selected ? 'selected' : ''

  return (
    <li
      className={`${styles.listItem} ${styles[selectedClass]} ${styles[pointerClass]}`} 
      onClick={() => onClickCallback(item)}>
        {item}
    </li>
  )
}

export default ListItem