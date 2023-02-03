import React from 'react'

function Input({type, placeholder = ''}) {
  return (
    <input type={type} placeholder={placeholder} name = '' />
  )
}

export default Input;