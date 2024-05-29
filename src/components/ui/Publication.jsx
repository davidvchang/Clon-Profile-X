import React from 'react'

function Publication({iconPinPosted, textPinOrPosted, FotoPerfil, name, user, date, description, photo, NumComments, NumLikes, NumRepost, NumView}) {
  return (
    <div className='Publication'>
        <div className='pinPosted'>
            {iconPinPosted}
            <span>{textPinOrPosted}</span>
        </div>

        <div className='InformationPublication'>
            <div className='photoProfilePublication'>
                <img src={FotoPerfil} alt="Foto de perfil" />
            </div>

            <div className='Principal'>

                <div className='UserNameInfo'>
                    <div className='UserNameDate'>
                        <span className='name'>{name}</span>
                        <span className='user'>{user}</span>
                        <span className='point'>·</span>
                        <span className='date'>{date}</span>
                    </div>

                    <div className='PromoteIconMore'>
                        <button className='btnPromote'>
                            <span>Promote</span>
                        </button>

                        {iconMore}
                    </div>

                </div>

                <div className='TextPhotoActions'>
                    <p className='description'>{description}</p>

                    <div className='PhotoPublication'>
                        <img src={photo} alt="Foto" />
                    </div>
                </div>

                <div className='iconsActions'>
                    <div className='iconText'>
                        {iconComments}
                        <span>{NumComments}</span>
                    </div>

                    <div className='iconText'>
                        {iconRepost}
                        <span>{NumRepost}</span>
                    </div>
                    
                    <div className='iconText'>
                        {iconLike}
                        <span>{NumLikes}</span>
                    </div>

                    <div className='iconText'>
                        {iconView}
                        <span>{NumView}</span>
                    </div>

                    <div className='IconBookmarksShare'>
                        {iconBookmarks}
                        {iconShare}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const iconMore = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconMoreProfile">
<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

const iconComments = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconsReactions" id='iconComment'>
<path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>


const iconRepost = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat-2 iconsReactions" id='iconRepost'>
    <path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/>
</svg>

const iconLike = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconsReactions" id='iconLike'>
<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

const iconView = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3 iconsReactions" id='iconView'>
    <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
</svg>

const iconBookmarks = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconsReactions">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

const iconShare = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share iconsReactions">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>
</svg>



export default Publication