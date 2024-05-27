import React from 'react'

function UserSuggestion({img, textButton, Name, User}) {
  return (
    <div className='UserSuggestion'>
        <div className='PhotoNameUser'>
            <div className='photoProfile'>
                <img src={img} alt="Foto de perfil" />
            </div>

            <div className='NameUser'>
                <span className='name'>{Name}</span>
                <span className='user'>{User}</span>
            </div>
        </div>

        <button className='Follow'>
            <span>{textButton}</span>
        </button>
    </div>
  )
}

export default UserSuggestion