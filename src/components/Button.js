import React from 'react'
import styles  from '../styles/Button.module.css'

function Button({ name, ...rest }) {
  return (
    <button className={styles.button} {...rest}>{name}</button>
  )
}

export default Button