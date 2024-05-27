import React from 'react'

function Follows({num, link, text}) {
  return (
    <a href={link} className='Follows'>
        <span className='Num'>{num}</span>
        <span className='followsText'>{text}</span>
    </a>
  )
}

export default Follows