import React from 'react'

function Button({text , onClick}) {
  return (
    <button className='menu' onClick={onClick} >{text}</button>
  )
}

export default Button;