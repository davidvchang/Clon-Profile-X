import React from 'react'

function Info({icon, text}) {
  return (
    <div className='Info'>
        {icon}
        <span>{text}</span>
    </div>
  )
}

export default Info
