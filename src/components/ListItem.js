import React from 'react'
import styles from '../styles/ListItem.module.css'

function ListItem({ item, ...rest }) {
  return (
    <li className={styles.listItem} {...rest}>{item}</li>
  )
}

export default ListItem