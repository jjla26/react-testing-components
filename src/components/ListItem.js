import React from 'react'
import styles from '../styles/ListItem.module.css'

function ListItem({ children, selected, pointer }) {
  const pointerClass = pointer ? 'pointer' : ''
  const selectedClass = selected ? 'selected' : ''

  return (
    <li
      className={`${styles.listItem} ${styles[selectedClass]} ${styles[pointerClass]}`}>
        {children}
    </li>
  )
}

export default ListItem