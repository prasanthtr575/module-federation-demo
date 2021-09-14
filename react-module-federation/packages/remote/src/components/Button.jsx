import React from 'react'

function Button({ children, ...rest }) {
  return (
    <button style={{background: '#4169e1', color:'white', padding: '20px', fontSize: '18px'} }{...rest}>{ children }</button>
  )
}

export default Button