import React from 'react'
import styles from '../styles/Input.module.css'

function Input(props) {
  return (
    <input className={styles.customInput} {...props} />
  )
}

export default Input