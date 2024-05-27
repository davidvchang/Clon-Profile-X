import React from 'react'

function News({category, title, numPost, icon}) {
  return (
    <div className='News'>
        <div className='NewsInfo'>
            <span className='category'>{category}</span>
            <span className='titleNews'>{title}</span>
            <span className='numPosts'>{numPost}</span>
        </div>

        {icon}
    </div>
  )
}

export default News