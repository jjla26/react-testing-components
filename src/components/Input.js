import React from 'react'
import styles from '../styles/Input.module.css'

function Input({ children, label, radioLabel, ...rest}) {
  return (
    <>
      <label>{label}</label>
      <input className={rest.type === 'text' ? styles.input : ''} {...rest} />
      <label>{radioLabel}</label>
    </>
  )
}

export default Input