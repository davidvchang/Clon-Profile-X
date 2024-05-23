import React from 'react'

function Nav({icon, text}) {
  return (
    <button className='Nav'>
      {icon}
      <span className='textNav'>{text}</span>
    </button>
  )
}

export default Nav
